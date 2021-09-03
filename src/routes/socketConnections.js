const MesaggesService = require("../services/MessagesService");
const messagesService = new MesaggesService();

module.exports = (io) => {
    io.on("connection", (socket) => {
        socket.on("new-message", async (data) => {
            try {
                const message = await messagesService.create(data);
                io.sockets.emit("saved-message", { success: true, message });
            } catch (error) {
                io.sockets.emit("saved-message", { success: false, error });
            }
        });
    });
    return io;
};
