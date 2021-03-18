const {
    NAME_OR_PASSWORD_IS_NULL,
    NAME_IS_EXISTS,
    NAME_IS_NOT_EXISTS,
    NAME_OR_PASSWORD_ERROR,
    TOKEN_IS_NOT_VALUE,
    UNPERMISSION
} = require('../constants/error-type')

const errorHandle = (err, ctx) => {
    let message, status;
    switch (err.message) {
        case NAME_OR_PASSWORD_IS_NULL:
            message = "名字或密码不能为空~";
            status = 404;
            break;
        case NAME_IS_EXISTS:
            message = "名字已经存在了~";
            status = 404;
            break;
        case NAME_IS_NOT_EXISTS:
            message = "名字不存在~";
            status = 404;
            break;
        case NAME_OR_PASSWORD_ERROR:
            message = "名字或者密码错误~";
            status = 404;
            break;
        case TOKEN_IS_NOT_VALUE:
            message = "token不是有效的~";
            status = 404;
            break;
        case UNPERMISSION:
            message = "权限不够~";
            status = 401;
            break;
    }
    ctx.body = message;
    ctx.status = status;
}

module.exports = errorHandle