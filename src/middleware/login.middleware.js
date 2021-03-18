const error_type = require('../constants/error-type');
const md5Password = require('../utils/password.handle')
const userService = require('../service/user.service')

const { PUBLIC_KEY } = require('../app/config')
const jwt = require('jsonwebtoken');
const verifyLogin = async(ctx, next) => {
    //用户名或者密码为空
    const { name, password } = ctx.request.body;
    if (!name || !password) {
        const error = new Error(error_type.NAME_OR_PASSWORD_IS_NULL);
        return ctx.app.emit('error', error, ctx)
    }
    //用户名不存在
    const result = await userService.getUserByName(name);
    const user = result[0];
    if (!user) {
        const error = new Error(error_type.NAME_IS_NOT_EXISTS);
        return ctx.app.emit('error', error, ctx);
    };
    //加密
    if (md5Password(password) !== user.password) {
        const error = new Error(error_type.NAME_OR_PASSWORD_ERROR);
        return ctx.app.emit('error', error, ctx);
    }
    ctx.user = user;
    await next();
}

const verifyAuth = async(ctx, next) => {
    const authorization = ctx.headers.authorization;

    if (!authorization) {
        const error = new Error(error_type.TOKEN_IS_NOT_VALUE);
        return ctx.app.emit('error', error, ctx);
    }
    const token = authorization.replace('Bearer ', "");
    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        });

        ctx.user = result;
        await next();

    } catch (err) {
        const error = new Error(error_type.TOKEN_IS_NOT_VALUE);
        ctx.app.emit('error', error, ctx);
    }
}
module.exports = {
    verifyLogin,
    verifyAuth
}