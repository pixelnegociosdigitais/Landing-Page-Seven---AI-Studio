import { useState, ChangeEvent, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { siteContent } from '../content/siteContent';

interface FormData {
  name: string;
  whatsapp: string;
  email: string;
  profile: string;
  message: string;
  agreed: boolean;
}

interface FormErrors {
  name?: string;
  whatsapp?: string;
  email?: string;
  profile?: string;
  message?: string;
  agreed?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    email: '',
    profile: '',
    message: '',
    agreed: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const profileOptions = [
    { value: 'Escola', label: 'Escola' },
    { value: 'Instituição de ensino', label: 'Instituição de ensino' },
    { value: 'Educador', label: 'Educador' },
    { value: 'MEI', label: 'MEI' },
    { value: 'Microempresa', label: 'Microempresa' },
    { value: 'Pequena empresa', label: 'Pequena empresa' },
    { value: 'Profissional', label: 'Profissional' },
    { value: 'Outro', label: 'Outro' },
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (checked) {
        setErrors((prev) => ({ ...prev, agreed: undefined }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (value.trim() !== '') {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'O nome completo é obrigatório.';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'O WhatsApp é obrigatório.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
    }

    if (!formData.profile) {
      newErrors.profile = 'Selecione o seu perfil de contato.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Sua mensagem é obrigatória.';
    }

    if (!formData.agreed) {
      newErrors.agreed = 'Você precisa autorizar o uso de dados para contato.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSuccessModalOpen(true);
    }
  };

  // Prepares WhatsApp link with formatted content
  const handleSendToWhatsApp = () => {
    const messageTemplate = `*Novo Contato - +Seven Website*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Perfil:* ${formData.profile}\n\n` +
      `*Mensagem:*\n${formData.message}`;
    
    const encodedText = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/${siteContent.contact.whatsapp}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full" aria-label="Formulário de Contato">
        
        {/* Name and WhatsApp fields side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs text-[#B6BEC8] font-bold tracking-wider uppercase">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Digite seu nome"
              className={`px-4 py-3 text-sm glass-input w-full ${errors.name ? 'border-red-500/55' : ''}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="whatsapp" className="text-xs text-[#B6BEC8] font-bold tracking-wider uppercase">
              WhatsApp
            </label>
            <input
              type="text"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="(00) 00000-0000"
              className={`px-4 py-3 text-sm glass-input w-full ${errors.whatsapp ? 'border-red-500/55' : ''}`}
              aria-invalid={!!errors.whatsapp}
              aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
            />
            {errors.whatsapp && (
              <span id="whatsapp-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" /> {errors.whatsapp}
              </span>
            )}
          </div>
        </div>

        {/* Email and Profile dropdown side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs text-[#B6BEC8] font-bold tracking-wider uppercase">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="exemplo@email.com"
              className={`px-4 py-3 text-sm glass-input w-full ${errors.email ? 'border-red-500/55' : ''}`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 relative">
            <label htmlFor="profile" className="text-xs text-[#B6BEC8] font-bold tracking-wider uppercase">
              Perfil
            </label>
            <select
              id="profile"
              name="profile"
              value={formData.profile}
              onChange={handleInputChange}
              className={`px-4 py-3 text-sm glass-input w-full appearance-none pr-10 ${errors.profile ? 'border-red-500/55' : ''}`}
              aria-invalid={!!errors.profile}
              aria-describedby={errors.profile ? "profile-error" : undefined}
            >
              <option value="">Selecione</option>
              {profileOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#07111F] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
            {/* Custom chevron indicator */}
            <div className="absolute right-3.5 top-[34px] pointer-events-none text-[#7F8A98]">
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {errors.profile && (
              <span id="profile-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" /> {errors.profile}
              </span>
            )}
          </div>
        </div>

        {/* Message area */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs text-[#B6BEC8] font-bold tracking-wider uppercase">
            Como podemos ajudar?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Conte brevemente o que sua escola, instituição ou empresa precisa..."
            rows={4}
            className={`px-4 py-3 text-sm glass-input w-full resize-none ${errors.message ? 'border-red-500/55' : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </span>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="flex flex-col gap-1">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleInputChange}
              className="mt-1 accent-[#16BDF0] w-4 h-4"
            />
            <span className="text-xs text-[#7F8A98] leading-relaxed">
              Autorizo o uso dos meus dados para que a equipe +Seven possa entrar em contato e enviar orientações.
            </span>
          </label>
          {errors.agreed && (
            <span className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.agreed}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 w-full py-3.5 bg-[#095BFF] hover:bg-[#095BFF]/95 text-white font-bold text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#095BFF]/20 active:scale-98 transition-all"
        >
          <span>Enviar mensagem</span>
          <Send className="w-4 h-4" />
        </button>

        {/* Developer comment section: Where to insert backend API handler */}
        {/*
          BACKEND INTEGRATION NOTES:
          Para conectar o formulário a um backend real futuramente:
          1. Crie uma rota de API (ex: '/api/contato') no express em 'server.ts'.
          2. Substitua o comportamento do 'handleSubmit' por uma requisição fetch/axios:
             
             const response = await fetch('/api/contato', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(formData)
             });
             
          3. Configure o envio de e-mails usando Nodemailer ou outro serviço como SendGrid ou Mailgun no backend.
        */}
      </form>

      {/* Dynamic Success Modal / Option to Send to WhatsApp */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B16]/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-[#07111F] border border-[#16BDF0]/30 rounded-2xl p-6 shadow-2xl relative">
            
            <div className="flex items-center gap-3 text-[#16BDF0] mb-4">
              <CheckCircle2 className="w-8 h-8 shrink-0 text-[#25D366]" />
              <h4 className="text-white font-bold text-lg sm:text-xl">
                Mensagem validada com sucesso!
              </h4>
            </div>

            <p className="text-sm text-[#B6BEC8] leading-relaxed mb-6">
              Para um atendimento imediato e direto, você pode encaminhar esses dados automaticamente para o nosso **WhatsApp de atendimento** ou prosseguir com a cópia.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold rounded-xl flex items-center justify-center gap-2.5 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enviar pelo WhatsApp</span>
              </button>
              
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `*Contato +Seven*\nNome: ${formData.name}\nWhatsApp: ${formData.whatsapp}\nE-mail: ${formData.email}\nPerfil: ${formData.profile}\nMensagem: ${formData.message}`
                  );
                  alert('Dados copiados para a área de transferência!');
                  setIsSuccessModalOpen(false);
                }}
                className="w-full py-3 bg-white/5 hover:bg-white/10 text-[#B6BEC8] hover:text-white font-semibold rounded-xl border border-white/10 transition-all text-sm"
              >
                Apenas copiar dados do formulário
              </button>

              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-2.5 text-[#7F8A98] hover:text-white transition-all text-xs font-medium"
              >
                Fechar janela
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
