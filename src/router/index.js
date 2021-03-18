const fs = require('fs');
const files = fs.readdirSync(__dirname);
console.log(files);
const routers = function(app) {
    files.forEach(value => {
        if (value === 'index.js') {
            return
        };
        let router = require(`./${value}`);
        app.use(router.routes());
        app.use(router.allowedMethods());
    })
}

module.exports = routers;