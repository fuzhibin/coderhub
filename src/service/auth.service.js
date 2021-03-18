const pool = require('../app/database')

class AuthService {
    async checkResource(tableName, id, momentId) {
        const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`;
        const [result] = await pool.execute(statement, [momentId, id]);
        return result.length === 0 ? false : true;
    }
}

module.exports = new AuthService();