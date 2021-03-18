const userService = require('../service/user.service');

const error_type = require('../constants/error-type');

const md5Password = require('../utils/password.handle')
const verifyUser = async(ctx, next) => {
    //用户名或者密码为空
    const { name, password } = ctx.request.body;
    if (!name || !password) {
        const error = new Error(error_type.NAME_OR_PASSWORD_IS_NULL);
        return ctx.app.emit('error', error, ctx)
    }
    //用户名已经存在
    const result = await userService.getUserByName(name);
    if (result.length) {
        const error = new Error(error_type.NAME_IS_EXISTS);
        return ctx.app.emit('error', error, ctx);
    };
    await next();
}

const handlePassword = async(ctx, next) => {
    ctx.request.body.password = md5Password(ctx.request.body.password);
    await next();
}

module.exports = {
    verifyUser,
    handlePassword
}