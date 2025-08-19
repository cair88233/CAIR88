const chatBox = document.getElementById("chat-box");

function appendMessage(who, msg) {
  const el = document.createElement("div");
  el.textContent = `${who}: ${msg}`;
  chatBox.appendChild(el);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("user-msg");
  const msg = input.value.trim();
  if (msg) {
    appendMessage("Anda", msg);
    localStorage.setItem("chat-from-user", msg);
    input.value = "";
  }
}

function sendAdminMessage() {
  const input = document.getElementById("admin-msg");
  const msg = input.value.trim();
  if (msg) {
    appendMessage("Admin", msg);
    localStorage.setItem("chat-from-admin", msg);
    input.value = "";
  }
}

// Terima pesan
window.addEventListener("storage", (e) => {
  if (e.key === "chat-from-user") {
    appendMessage("Pengguna", e.newValue);
  }
  if (e.key === "chat-from-admin") {
    appendMessage("Admin", e.newValue);
  }
});