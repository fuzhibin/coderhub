const mysql = require('mysql2');


const config = require('./config')

const pool = mysql.createPool({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    connectionLimit: config.MYSQL_CONNENTLIMIT
});

pool.getConnection((err, connect) => {
    if (err) {
        console.log('连接失败');
    } else {
        console.log('连接成功');
    }
})

module.exports = pool.promise();