import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { analyzePrescription } from '../services/geminiService';
import { getTranslation } from '../services/translationService';
import { medicalKnowledgeBase, searchMedicalKnowledge } from '../services/medicalKnowledgeBase';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  language: Language;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ language, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: getTranslation(language, 'chatBotWelcome') || "Hello! I'm your Digital Doctor assistant. How can I help you with your prescriptions or medications today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (inputText.trim() === '' || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Process the user's message
      let responseText = await processUserMessage(inputText, language);
      
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getTranslation(language, 'chatBotError') || "Sorry, I encountered an error processing your request. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const processUserMessage = async (message: string, language: Language): Promise<string> => {
    // First, check our medical knowledge base for relevant information
    const relevantQAs = searchMedicalKnowledge(message);
    
    // If we found relevant medical information, use it
    if (relevantQAs.length > 0) {
      // Return the most relevant answer
      return relevantQAs[0].answer;
    }
    
    // Check for keywords related to prescriptions or medications
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('prescription') || lowerMessage.includes('medication') || lowerMessage.includes('drug')) {
      return getTranslation(language, 'chatBotPrescriptionInfo') || 
        "I can help you analyze prescriptions. Please upload an image of your prescription using the Prescription Analyzer tool, and I'll provide detailed information about your medications, including dosages, interactions, and safety alerts.";
    }
    
    if (lowerMessage.includes('side effect') || lowerMessage.includes('side-effect') || lowerMessage.includes('effect')) {
      return getTranslation(language, 'chatBotSideEffects') || 
        "If you're concerned about side effects of your medications, please upload your prescription for analysis. I can identify potential side effects based on your specific medications and dosages.";
    }
    
    if (lowerMessage.includes('interaction') || lowerMessage.includes('interact')) {
      return getTranslation(language, 'chatBotInteractions') || 
        "Drug interactions can be serious. To check for potential interactions between your medications, please upload your prescription for analysis.";
    }
    
    if (lowerMessage.includes('dose') || lowerMessage.includes('dosage')) {
      return getTranslation(language, 'chatBotDosage') || 
        "Proper dosage is important for medication effectiveness and safety. Please upload your prescription so I can analyze the dosages and provide recommendations based on your health profile.";
    }
    
    if (lowerMessage.includes('help')) {
      return getTranslation(language, 'chatBotHelp') || 
        "I'm here to help you understand your prescriptions and medications. You can ask me about:\n- Prescription analysis\n- Medication side effects\n- Drug interactions\n- Dosage information\n\nTo get started, please upload your prescription using the Prescription Analyzer tool.";
    }
    
    // Default response
    return getTranslation(language, 'chatBotDefault') || 
      "I'm here to help you with prescription and medication questions. For detailed analysis, please upload your prescription using the Prescription Analyzer tool. Is there something specific about your medications you'd like to know?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto flex flex-col h-[70vh]">
      <div className="flex justify-between items-center border-b p-4">
        <h2 className="text-xl font-bold text-gray-800">
          {getTranslation(language, 'chatBotTitle') || 'Digital Doctor Assistant'}
        </h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="border-t p-4 bg-white">
        <div className="flex">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={getTranslation(language, 'chatBotPlaceholder') || "Type your question about prescriptions or medications..."}
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={2}
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || inputText.trim() === ''}
            className={`bg-blue-500 text-white px-4 py-2 rounded-r-lg font-medium ${
              isLoading || inputText.trim() === '' 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-blue-600'
            }`}
          >
            {getTranslation(language, 'chatBotSend') || 'Send'}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          {getTranslation(language, 'chatBotDisclaimer') || 'For detailed prescription analysis, please use the Prescription Analyzer tool.'}
        </p>
      </div>
    </div>
  );
};

export default ChatBot;