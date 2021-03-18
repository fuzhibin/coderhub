const momentService = require('../service/moment.service.js');

class MomentControll {
    async create(ctx, next) {
        const { id } = ctx.user;
        const content = 'hahaha~~~~';
        const result = await momentService.create(id, content);
        ctx.body = result;
    }
    async detail(ctx, next) {
        const momentId = ctx.params.momentId;
        const result = await momentService.getDetailById(momentId);
        ctx.body = result
    }
    async list(ctx, next) {
        const { limit, offset } = ctx.query
        const result = await momentService.getDetailList(limit, offset);
        ctx.body = result
    }
    async update(ctx, next) {
        const { momentId } = ctx.params;
        console.log(momentId);
        const { content } = ctx.request.body;
        console.log(content);
        const result = await momentService.update(momentId, content);
        ctx.body = result;
    }
    async remove(ctx, next) {
        const { momentId } = ctx.params;
        const result = await momentService.removeById(momentId);
    }
}


module.exports = new MomentControll();