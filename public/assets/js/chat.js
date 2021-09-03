const socket = io();

const $sendMessageButton = document.getElementById("send-button");
const $messageInput = document.getElementById("message-input");
const $emailInput = document.getElementById("email-input");
const $messagesList = document.getElementById("messages-list");

$sendMessageButton.addEventListener("click", () => {
    socket.emit("new-message", {
        message: $messageInput.value,
        email: $emailInput.value,
    });

    $messageInput.value = "";
    $emailInput.value = "";
});

socket.on("saved-message", (data) => {
    if (data.success) {
        $messagesList.innerHTML += `
            <div class="card mb-4">
                <header class="card-header is-flex is-align-items-center">
                    <p class="card-header-title">
                        ${data.message.email}
                    </p>
                    <p class="timestamp"><time
                            datetime=${data.message.created_at}
                        >${data.message.created_at}</time></p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <p>${data.message.message}</p>
                    </div>
                </div>
            </div>
        `;
    }
});
