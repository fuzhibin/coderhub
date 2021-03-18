const Router = require('koa-router')

const loginMiddleware = require("../middleware/login.middleware")
const loginController = require('../controller/login.controller')


const loginRouter = new Router({ prefix: '/login' })

loginRouter.post('/', loginMiddleware.verifyLogin, loginController.login);
loginRouter.post('/text', loginMiddleware.verifyAuth, loginController.success);
module.exports = loginRouter