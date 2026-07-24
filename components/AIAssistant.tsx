
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User, Loader2, MessageSquare, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { UNITS, ENROLLMENT_STEPS, DOCUMENTATION } from '../constants';
import { usePostHog } from 'posthog-js/react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou a Mila, assistente virtual do Colégio Reação. Como posso ajudar você hoje com informações sobre nossas unidades ou matrículas para 2026?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const posthog = usePostHog();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      posthog.capture('ai_assistant_viewed');
    }
  }, [isOpen, posthog]);

  const schoolContext = `
    Você é a Mila, assistente virtual do Colégio Reação em Brasília (Recanto das Emas).
    Informações principais:
    - Unidade I: Quadra 206 (Infantil e Fundamental I e II).
    - Unidade II: Quadra 201 (Infantil, Fundamental e Ensino Médio).
    - Matrículas 2026: Abertas e com foco em excelência.
    - Metodologia: Foco em resultados (ENEM, PAS, UnB) e formação humana integral.
    - Passos para matrícula: ${ENROLLMENT_STEPS.map(s => s.title).join(', ')}.
    - Documentos necessários: ${DOCUMENTATION.join(', ')}.
    - Atendimento: Segunda a sexta, das 07:30 às 18:00.
    
    Seu tom de voz: Profissional, acolhedor, prestativo e focado em convidar os pais para uma visita presencial. 
    Se não souber algo, peça para falarem com a secretaria pelo WhatsApp.
  `;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    posthog.capture('ai_message_sent', { 
      message_length: userMsg.length,
      query: userMsg.substring(0, 100)
    });

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: schoolContext }] },
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          temperature: 0.7,
          topP: 0.8,
          maxOutputTokens: 500,
        }
      });

      const aiText = response.text || "Desculpe, tive um problema ao processar sua resposta. Pode repetir?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
      
      posthog.capture('ai_response_received', { status: 'success' });
    } catch (error) {
      console.error("Erro na Mila AI:", error);
      const errorMessage = "No momento estou offline, mas você pode falar com nossa secretaria pelo WhatsApp!";
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
      
      posthog.capture('ai_error', { 
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 md:right-10 z-[120] w-[90vw] md:w-[400px] h-[500px] md:h-[600px] flex flex-col bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
      <div className="bg-brand-navy p-6 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg relative">
            <Bot className="text-white" size={24} />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-brand-navy rounded-full"></span>
          </div>
          <div>
            <h3 className="text-white font-black text-lg leading-tight">Mila AI</h3>
            <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Consultora Virtual</p>
          </div>
        </div>
        <button id="btn-ai-chat-close" onClick={onClose} className="text-white/30 hover:text-white transition-colors p-2 bg-white/10 rounded-xl">
          <X size={20} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50/50 scroll-smooth"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-brand-red text-white rounded-tr-none' 
                : 'bg-white text-brand-navy border border-slate-100 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-white p-4 rounded-3xl border border-slate-100 flex items-center gap-2">
              <Loader2 className="animate-spin text-brand-red" size={16} />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mila está pensando...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100 shrink-0">
        <div className="relative flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte sobre as unidades ou 2026..."
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-6 pr-14 text-sm focus:border-brand-red outline-none transition-all placeholder:text-slate-400"
          />
          <button 
            id="btn-ai-message-send"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-3 bg-brand-red text-white rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-3 text-[9px] text-slate-300 font-bold uppercase tracking-widest">
          <Sparkles size={10} /> IA Educacional treinada pelo Colégio Reação
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
