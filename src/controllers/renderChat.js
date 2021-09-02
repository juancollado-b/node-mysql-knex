const MessagesService = require("../services/MessagesService");
const messageService = new MessagesService();
module.exports = async (req, res) => {
    const messages = await messageService.getAll();

    res.render("home", {
        messages,
    });
};
