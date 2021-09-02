const db = require("../index");

module.exports = class MessagesDao {
    async getAll() {
        const messages = await db("messages").select("*");
        return messages;
    }

    async create(message) {
        const result = await db("messages").insert(message);
        return await db("messages").where("id", `${result[0]}`);
    }
};
