const pool = require('../app/database')


class MomentService {
    async create(id, content) {
        const statement = `INSERT INTO moment(content,user_id) values (?,?);`;
        const result = await pool.execute(statement, [content, id]);
        return result[0];
    }
    async getDetailById(id) {
        const statement = `
        SELECT moment.id id ,moment.content content, moment.createAt createAt ,JSON_OBJECT('id',user.id ,'name',user.name) user FROM moment
        LEFT JOIN user ON moment.user_id = user.id 
        WHERE moment.id= ?;`;
        const result = await pool.execute(statement, [id]);
        return result[0];
    }
    async getDetailList(limit, offset) {
        const statement = `
        SELECT moment.id id ,moment.content content, moment.createAt createAt ,JSON_OBJECT('id',user.id ,'name',user.name) user FROM moment
        LEFT JOIN user ON moment.user_id = user.id 
        LIMIT ?,?;`;
        const result = await pool.execute(statement, [offset, limit]);
        return result[0];
    }
    async update(id, content) {
        const statement = `UPDATE moment SET content =? WHERE id=?;`;
        const [result] = await pool.execute(statement, [content, id]);
        return result;
    }
    async removeById(id) {
        const statement = `DELETE FROM moment WHERE id = ? ;`;
        const [result] = await pool.execute(statement, [id]);
        return result;
    }
}

module.exports = new MomentService();