document.addEventListener("DOMContentLoaded", () => {
    const userType = document.getElementById("user-type");
    const chatWindow = document.getElementById("chat-window");
    const messageBox = document.getElementById("message-box");
    const sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", () => {
      const messageText = messageBox.value.trim();
      if (messageText) {
        const selectedType = userType.value; 
        displayMessage(messageText, selectedType);
        messageBox.value = ""; 
      }
    });
  
    messageBox.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendButton.click();
      }
    });
  
    function displayMessage(text, type) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", type);
      messageDiv.textContent = text;
  
      chatWindow.appendChild(messageDiv);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  });