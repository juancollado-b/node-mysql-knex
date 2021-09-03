const { Router } = require("express");
const router = Router();
const renderChat = require("../controllers/renderChat");

router.get("/chat", renderChat);

module.exports = router;
