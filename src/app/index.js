//npm 安装模块
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

//app文件夹
const app = new Koa();
const error_handle = require('./error.handle');

//router文件夹
const userRouter = require('../router/user.router');
const loginRouter = require('../router/login.router');
const routers = require('../router/index')


app.use(bodyParser());
//登陆路由
routers(app);
//错误处理路由
app.on('error', error_handle);
module.exports = app