const chatBox = document.getElementById('chat-box');

const responses = [
    "Hi there! How can I assist you today?",
    "That's interesting. Tell me more!",
    "I see. What do you think about that?",
    "Can you explain that further?",
    "I'm here to help. What else do you need?"
];

function sendMessage() {
    const input = document.getElementById('input');
    const message = input.value.trim();
    if (message === '') return;

    displayMessage(message, 'user');
    input.value = '';
    // Simulate AI response with a delay
    setTimeout(() => {
        const aiResponse = generateAIResponse(message);
        displayMessage(aiResponse, 'bot');
    }, 500);
}

function generateAIResponse(userMessage) {
    // Basic AI response logic based on user message
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
        return "Hello! How can I help you today?";
    } else if (userMessage.toLowerCase().includes('help')) {
        return "I'm here to help. What do you need assistance with?";
    } else {
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
