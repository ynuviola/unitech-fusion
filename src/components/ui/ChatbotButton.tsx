import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ChatMessage {
  type: 'bot' | 'user';
  content: string;
}

interface PredefinedQuestion {
  id: string;
  question: string;
  answer: string;
}

export default function ChatbotButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Preguntas predefinidas
  const predefinedQuestions: PredefinedQuestion[] = [
    {
      id: 'q1',
      question: '¿Qué servicios de soporte TI ofrecen?',
      answer: 'Ofrecemos planes de soporte TI adaptados a las necesidades de tu empresa, desde mantenimiento preventivo hasta soporte 24/7 para infraestructuras críticas. Nuestro objetivo es mantener tu tecnología funcionando sin interrupciones para que puedas enfocarte en tu negocio.'
    },
    {
      id: 'q2',
      question: '¿Cómo pueden ayudarme con la transformación digital?',
      answer: 'Nuestro servicio de transformación digital comienza con un diagnóstico de tu situación actual, identificando oportunidades de mejora. Luego diseñamos e implementamos soluciones tecnológicas que optimizan tus procesos, mejoran la experiencia de tus clientes y aumentan la productividad de tu equipo.'
    },
    {
      id: 'q3',
      question: '¿Desarrollan aplicaciones móviles?',
      answer: 'Sí, desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android. Nuestro equipo de desarrollo se especializa en crear apps intuitivas, rápidas y seguras que satisfacen las necesidades específicas de tu negocio y ofrecen una excelente experiencia de usuario.'
    },
    {
      id: 'q4',
      question: '¿Cuánto tiempo toma desarrollar un software a medida?',
      answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Un proyecto pequeño puede tomar 1-2 meses, mientras que soluciones más complejas pueden requerir 3-6 meses. En nuestra primera reunión, evaluaremos tus necesidades y te proporcionaremos un cronograma detallado para tu proyecto específico.'
    },
    {
      id: 'q5',
      question: '¿Ofrecen servicios de consultoría en ciberseguridad?',
      answer: 'Absolutamente. Nuestra consultoría en ciberseguridad incluye evaluación de vulnerabilidades, implementación de políticas de seguridad, capacitación de personal y monitoreo continuo. Te ayudamos a proteger tu información sensible y a cumplir con las normativas aplicables en tu industria.'
    },
    {
      id: 'q6',
      question: '¿Cómo puedo solicitar una cotización?',
      answer: 'Puedes solicitar una cotización completando nuestro formulario de contacto o escribiendo a nuestro Whatsapp. Uno de nuestros especialistas se pondrá en contacto contigo en menos de 24 horas para entender tus necesidades y preparar una propuesta personalizada.'
    }
  ];

  // Mensaje de bienvenida
  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([
        {
          type: 'bot',
          content: '👋 ¡Hola! Soy el asistente virtual de Unitech Fusion. ¿En qué puedo ayudarte hoy?'
        }
      ]);
    }
  }, [isChatOpen, messages.length]);

  // Scroll al final de los mensajes cuando se añade uno nuevo
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Mostrar el botón cuando el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar la selección de una pregunta predefinida
  const handleQuestionClick = (question: PredefinedQuestion) => {
    // Añadir la pregunta como mensaje del usuario
    setMessages(prev => [
      ...prev,
      { type: 'user', content: question.question }
    ]);

    // Simular un pequeño retraso antes de la respuesta del bot
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { type: 'bot', content: question.answer }
      ]);
    }, 500);
  };

  // Alternar la apertura/cierre del chat
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Botón flotante del chatbot - Modificado para que siempre esté visible cuando el chat está abierto */}
      <button
        onClick={toggleChat}
        className={`fixed z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 bg-primary hover:bg-primary/90 text-white ${
          isVisible || isChatOpen ? 'opacity-100 right-6 bottom-24' : 'opacity-0 right-6 bottom-24 pointer-events-none'
        }`}
        aria-label="Abrir chat de asistencia"
      >
        {!isChatOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Ventana del chat */}
      <div
        className={`fixed z-40 bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
          isChatOpen && isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Encabezado del chat */}
        <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
          <div className="flex items-center">
            <div className="relative w-10 h-10 rounded-full bg-white/20 overflow-hidden mr-3">
              <Image 
                src="/images/utf-logo.jpg" 
                alt="Unitech Fusion" 
                width={40} 
                height={40} 
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-montserrat font-bold">Asistente Unitech</h3>
              <p className="text-xs text-white/80">Respuesta en tiempo real</p>
            </div>
          </div>
        </div>

        {/* Cuerpo del chat - mensajes */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.type === 'user'
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'bg-white shadow-md rounded-tl-none'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Preguntas predefinidas */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Preguntas frecuentes:</p>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {predefinedQuestions.map((q) => (
              <button
                key={q.id}
                onClick={() => handleQuestionClick(q)}
                className="w-full text-left text-sm bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 transition-colors"
              >
                {q.question}
              </button>
            ))}
          </div>
        </div>

        {/* Footer del chat */}
        <div className="p-3 bg-white border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            Unitech Fusion - Soluciones tecnológicas a tu medida
          </p>
        </div>
      </div>
    </>
  );
}