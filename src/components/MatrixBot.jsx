import React, { useState } from 'react';

const botStyle = {
  position: 'fixed',
  bottom: 24,
  right: 24,
  zIndex: 1000,
  background: 'rgba(35,41,70,0.98)',
  color: '#00ff99',
  borderRadius: 16,
  boxShadow: '0 4px 32px #23294699',
  width: 320,
  maxWidth: '90vw',
  fontFamily: '"Fira Mono", monospace',
  fontSize: 16,
  padding: 0,
  overflow: 'hidden',
};

const headerStyle = {
  background: '#232946',
  color: '#7f5af0',
  padding: '12px 16px',
  fontWeight: 700,
  fontSize: 18,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  borderBottom: '1px solid #222',
};

const chatStyle = {
  padding: '16px',
  minHeight: 120,
  maxHeight: 200,
  overflowY: 'auto',
  background: 'rgba(35,41,70,0.95)',
};

const inputStyle = {
  width: '100%',
  border: 'none',
  outline: 'none',
  background: '#181c2b',
  color: '#00ff99',
  fontFamily: '"Fira Mono", monospace',
  fontSize: 16,
  padding: '10px 12px',
  borderBottomLeftRadius: 16,
  borderBottomRightRadius: 16,
};

const defaultMessages = [
  { from: 'bot', text: '👋 Hi! I am your Guide. Ask me about Benson, his projects, or scroll for more!' },
];

export default function MatrixBot() {
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    let botMsg = { from: 'bot', text: '' };
    if (/about|benson|bio/i.test(input)) {
      botMsg.text = 'Benson B Varghese is a passionate developer. Scroll down to see more!';
    } else if (/project/i.test(input)) {
      botMsg.text = 'Check out the Projects section for cool work!';
    } else if (/cv|resume/i.test(input)) {
      botMsg.text = "You can upload or download Benson's CV in the CV section.";
    } else if (/contact|email/i.test(input)) {
      botMsg.text = 'Contact info is at the bottom of the page.';
    } else {
      botMsg.text = 'Try asking about "about", "projects", "cv", or "contact"!';
    }
    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div style={botStyle}>
      <div style={headerStyle}>Matrix Bot</div>
      <div style={chatStyle}>
        {messages.map((msg, i) => (
          <div key={i} style={{ color: msg.from === 'bot' ? '#00ff99' : '#ff8906', marginBottom: 8 }}>
            {msg.from === 'bot' ? '>' : 'You:'} {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} style={{ margin: 0 }}>
        <input
          style={inputStyle}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a question..."
        />
      </form>
    </div>
  );
} 