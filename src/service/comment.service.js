const pool = require('../app/database')
class CommentService {
    async create(content, moment_id, user_id) {
        const statement = `INSERT INTO comment(content,moment_id,user_id) values(?,?,?);`;
        const [result] = await pool.execute(statement, [content, moment_id, user_id]);
        return result;
    }
    async reply(content, moment_id, user_id, comment_id) {
        const statement = `INSERT INTO comment(content,moment_id,user_id,comment_id) values(?,?,?,?);`;
        const [result] = await pool.execute(statement, [content, moment_id, user_id, comment_id]);
        return result;
    }
    async update(content, id) {
        const statement = `UPDATE comment SET content = ? WHERE id = ?;`;
        const [result] = await pool.execute(statement, [content, id]);
        return result;

    }
    async remove(id) {
        const statement = `DELETE FROM comment WHERE id = ?;`;
        const [result] = await pool.execute(statement, [id]);
        return result;

    }
}

module.exports = new CommentService();