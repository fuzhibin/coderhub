const Router = require('koa-router');
const commentRouter = new Router({ prefix: '/comment' });

const {
    verifyAuth
} = require('../middleware/login.middleware');
const {
    verifyPermission
} = require('../middleware/auth.midderware')
const {
    create,
    reply,
    update,
    remove
} = require('../controller/comment.controller.js');

commentRouter.post('/', verifyAuth, create);
//评论的回复
commentRouter.post('/reply', verifyAuth, reply);
//修改评论
commentRouter.patch('/:commentId', verifyAuth, verifyPermission, update);
//删除评论
commentRouter.delete('/:commentId', verifyAuth, verifyPermission, remove)

module.exports = commentRouter;