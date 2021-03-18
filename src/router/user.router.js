const Router = require('koa-router');

const UserController = require('../controller/user.controller')
const userMiddleware = require('../middleware/user.middleware')

const userRouter = new Router({ prefix: '/users' });


userRouter.post('/', userMiddleware.verifyUser, userMiddleware.handlePassword, UserController.create);


module.exports = userRouter;