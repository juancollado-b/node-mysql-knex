const { Router } = require("express");
const router = Router();
const renderChat = require("../controllers/renderChat");
module.exports = (io) => {
    router.get("/chat", renderChat);

    return router;
};
