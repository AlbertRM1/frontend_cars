import React, { useState } from 'react';

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');

      // Aquí puedes llamar a un servicio de chatbot y manejar la respuesta
      // Simplemente agregamos un mensaje de ejemplo del chatbot por ahora
      setTimeout(() => {
        setMessages([...messages, { text: 'Respuesta del chatbot...', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-header" onClick={toggleChat}>
        ChatBot
      </button>
      {isChatOpen && (
        <div className="chatbot">
          <div className="chatbot-header" onClick={toggleChat}>ChatBot</div>
          <div className="chatbot-messages">
            
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={newMessage}
              onChange={handleInputChange}
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
