const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const { PORT } = require("./config/globals");

app.engine(
    "hbs",
    handlebars({
        extname: "hbs",
        defaultLayout: "index.hbs",
        layoutsDir: "./src/views/layouts",
        partialsDir: "./src/views/partials/",
    })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(express.static("public"));
app.use(require("./routes/chat.router"));
require("./routes/socketConnections")(io);

http.listen(PORT, () => {
    console.log("App listen on port", PORT);
});
