import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Heart, Star, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with any questions about Clini Global\'s healthcare solutions. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you offer')) {
      return 'We offer comprehensive healthcare technology solutions including Patient Care Management, AI-Powered Diagnostics, Telemedicine Platform, Data Security & Compliance, Analytics & Reporting, and Mobile Health Apps.';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return 'You can reach us at +1 (555) 123-4567 or email us at info@cliniglobal.com. Our team is available 24/7 to assist you.';
    } else if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return 'Our pricing is customized based on your specific needs and organization size. I\'d be happy to connect you with our sales team for a personalized quote. Would you like me to schedule a consultation?';
    } else if (lowerMessage.includes('security') || lowerMessage.includes('hipaa')) {
      return 'Security is our top priority. All our solutions are HIPAA compliant with end-to-end encryption, access control, and comprehensive audit trails to ensure your patient data is protected.';
    } else if (lowerMessage.includes('demo') || lowerMessage.includes('trial')) {
      return 'We offer personalized demos and trial periods for all our solutions. Would you like me to schedule a demo with one of our healthcare technology specialists?';
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! Welcome to Clini Global. I\'m here to help you learn more about our healthcare technology solutions. What would you like to know?';
    } else {
      return 'Thank you for your question! For detailed information about our healthcare solutions, I\'d recommend speaking with one of our specialists. You can reach us at +1 (555) 123-4567 or schedule a consultation through our contact form.';
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating decorative elements around chatbot */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 pointer-events-none z-40">
          <Heart className="absolute bottom-[520px] right-[420px] text-pink-400 opacity-60 animate-bounce" size={16} style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <Star className="absolute bottom-[480px] right-[450px] text-yellow-400 opacity-50 animate-bounce" size={18} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
          <Sparkles className="absolute bottom-[540px] right-[380px] text-purple-400 opacity-40 animate-bounce" size={20} style={{ animationDelay: '2s', animationDuration: '4s' }} />
        </div>
      )}

      {/* Enhanced Chatbot Button with glass effect */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 hover:from-blue-700/90 hover:to-indigo-700/90"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Enhanced Chatbot Window with glass-morphism */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white/30 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl flex flex-col z-50">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border-b border-white/20 text-white p-4 rounded-t-3xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Clini Global Assistant</h3>
                <p className="text-sm text-white/80">Online now</p>
              </div>
            </div>
          </div>

          {/* Messages with enhanced styling */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-2xl backdrop-blur-md border border-white/20 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white'
                    : 'bg-white/40 text-gray-800'
                }`}>
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                    )}
                    {message.sender === 'user' && (
                      <User size={16} className="text-white mt-1 flex-shrink-0" />
                    )}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/40 backdrop-blur-md border border-white/20 text-gray-800 p-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Bot size={16} className="text-blue-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input with glass effect */}
          <div className="p-4 border-t border-white/20 bg-white/10 backdrop-blur-md rounded-b-3xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-white/40 backdrop-blur-md border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/60 transition-all duration-300"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === ''}
                className="w-10 h-10 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;