
import React, { useState } from 'react';

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
const API_KEY = 'AIzaSyAA6DXYNIuyxHKmA2bFhgSCShEsDdGR6Zo';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const generateResponse = async (prompt) => {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error('Failed to generate response');
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    };

    const cleanMarkdown = (text) => {
        return text
            .replace(/#{1,6}\s?/g, '')
            .replace(/\\/g, '')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
    };

    const addMessage = (message, isUser) => {
        setMessages((prevMessages) => [...prevMessages, { text: message, isUser }]);
    };

    const handleUserInput = async () => {
        if (!userInput.trim()) return;

        addMessage(userInput, true);
        setUserInput('');
        setIsLoading(true);

        try {
            const botMessage = await generateResponse(userInput);
            addMessage(cleanMarkdown(botMessage), false);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, I encountered an error. Please try again.', false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
        <div className="chat-container">
            <div className="chat-header">
                <h1>Chatbot</h1>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                <div key={index} className={msg.isUser ? 'user-message' : 'bot-message'}>
                    <img
                        className="profile-image"
                        src={msg.isUser ? 'user.jpg' : 'bot.jpg'}
                        alt={msg.isUser ? 'User' : 'Bot'} />
                    <div className="message-content">{msg.text}</div>
                </div>
            ))}
        </div>
        <div className="chat-input-container">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleUserInput();
                        }
                    } }
                    placeholder="Type your message..."
                    disabled={isLoading} />
                <button onClick={handleUserInput} disabled={isLoading}>Send</button>
            </div>
            </div>
        </>
    );
};

export default Chatbot;
