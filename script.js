async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value;
    if (!userText) return;

    chatBox.innerHTML += `<div class="message user">${userText}</div>`;
    input.value = "";

    const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
    });

    const data = await response.json();

    chatBox.innerHTML += `<div class="message bot">${data.reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}