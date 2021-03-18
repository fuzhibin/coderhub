const commentService = require('../service/comment.service')

class CommentController {
    async create(ctx, next) {
        const { id } = ctx.user;
        const { content, momentId } = ctx.request.body;
        const result = await commentService.create(content, momentId, id);
        ctx.body = result;
    }
    async reply(ctx, next) {
        const { id } = ctx.user;
        const { commentId, content, momentId } = ctx.request.body;
        const result = await commentService.reply(content, momentId, id, commentId);
        ctx.body = result;
    }
    async update(ctx, next) {
        const { content } = ctx.request.body;
        const { commentId } = ctx.params;
        const result = await commentService.update(content, commentId);
        ctx.body = result;
    }
    async remove(ctx, next) {
        const { commentId } = ctx.params;
        const result = await commentService.remove(commentId);
        ctx.body = result;
    }
}

module.exports = new CommentController();