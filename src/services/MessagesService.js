const MessagesDao = require("../db/dao/messages.dao");
const messageDao = new MessagesDao();

module.exports = class MessagesService {
    async getAll() {
        return messageDao.getAll();
    }

    async create(data) {
        const { email, message } = data;
        if (!email || !message) {
            throw "Email and message are required fields.";
        }
        const created = await messageDao.create({ email, message });
        return created[0];
    }
};
