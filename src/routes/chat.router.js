const { Router } = require("express");
const router = Router();

module.exports = (io) => {
    router.get("/chat", (req, res) => {
        res.render("home");
    });

    return router;
};
