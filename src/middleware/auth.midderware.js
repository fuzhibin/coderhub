const authService = require('../service/auth.service')

const {
    UNPERMISSION
} = require('../constants/error-type')
const verifyPermission = async(ctx, next) => {
    const { id } = ctx.user;
    const [resourceKey] = Object.keys(ctx.params);
    const tableName = resourceKey.replace('Id', "");
    const resourceId = ctx.params[resourceKey]
    try {
        const result = await authService.checkResource(tableName, id, resourceId);
        if (!result) {
            throw new Error()
        }
        await next();
    } catch (err) {
        const error = new Error(UNPERMISSION);
        return ctx.app.emit('error', error, ctx);
    }
}


module.exports = {
    verifyPermission
}