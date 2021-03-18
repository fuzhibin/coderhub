const UserService = require('../service/user.service')

class UserController {
    //插入一条新的用户记录
    async create(ctx, next) {
        const { name, password } = ctx.request.body;
        const result = await UserService.create(name, password);
        ctx.body = result;
    }

}

module.exports = new UserController();