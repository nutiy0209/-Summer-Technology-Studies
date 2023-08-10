import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { text: "Welcome to our online store! How can I assist you today?", type: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== "") {
      const newMessage = { text: inputMessage, type: "user" };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      try {
        const response = await fetch('/api/langchain', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ input: newMessage.text })
        });

        if (response.ok) {
          const data = await response.json();
          setMessages([...messages, { text: data.output, type: "bot" }]);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Your logo and other content */}
      </header>
      <div className="Chat-container">
        <div className="Chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`Message ${message.type === "bot" ? "Bot-message" : "User-message"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="Chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
