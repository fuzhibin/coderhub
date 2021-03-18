const Router = require('koa-router');

const {
    verifyAuth
} = require('../middleware/login.middleware')
const {
    create,
    detail,
    list,
    update,
    remove
} = require('../controller/moment.controller.js')

const {
    verifyPermission
} = require('../middleware/auth.midderware')

//动态路由
const momentRouter = new Router({ prefix: '/moment' });

momentRouter.post('/', verifyAuth, create);
momentRouter.get('/', list);
momentRouter.get('/:momentId', verifyAuth, detail);

//修改内容的接口
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update);
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove);

module.exports = momentRouter;