function sendMessage() {
  const input = document.ElementById(user-input);
  const chatBox = document.getElementById("chat-box");
  
  const userText = input.value.trim();

  if (userText === "") return;
  
  // Add User Message
  addMessage("You: " + userText);

  //Sample Message For Now
  setTimeout(() => {
    addMessage("Aria: I'm learning...");
  }, 500);

  input.value = "";
}

function addMessage(text) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("div");
  message.textContent = text;
  chatBox.appendChild(message);

  chatBox.scrollTop = chatBox.scrollHeight;
}
  
