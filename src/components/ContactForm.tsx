import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'popup_blocked'>('idle');
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  const nameRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const agreedRef = useRef<HTMLInputElement>(null);

  const WHATSAPP_NUMBER = '5554981112788';

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
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    const lettersRegex = /[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/;

    // 1. Nome completo
    if (!formData.name.trim()) {
      newErrors.name = 'Informe seu nome.';
    } else if (!lettersRegex.test(formData.name)) {
      newErrors.name = 'O nome deve conter letras.';
    }

    // 2. WhatsApp (telefone)
    const digits = formData.whatsapp.replace(/\D/g, '');
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Informe seu WhatsApp.';
    } else if (digits.length < 8) {
      newErrors.whatsapp = 'Informe um telefone válido.';
    }

    // 3. E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Informe seu e-mail.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Informe um e-mail válido.';
    }

    // 4. Perfil (Interesse)
    if (!formData.profile) {
      newErrors.profile = 'Selecione uma opção.';
    }

    // 5. Mensagem
    if (!formData.message.trim()) {
      newErrors.message = 'Escreva sua mensagem.';
    }

    // 6. Consentimento (LGPD)
    if (!formData.agreed) {
      newErrors.agreed = 'Confirme o consentimento para continuar.';
    }

    setErrors(newErrors);

    // Focus on the first invalid field
    if (Object.keys(newErrors).length > 0) {
      if (newErrors.name) {
        nameRef.current?.focus();
      } else if (newErrors.whatsapp) {
        whatsappRef.current?.focus();
      } else if (newErrors.email) {
        emailRef.current?.focus();
      } else if (newErrors.profile) {
        profileRef.current?.focus();
      } else if (newErrors.message) {
        messageRef.current?.focus();
      } else if (newErrors.agreed) {
        agreedRef.current?.focus();
      }
      return;
    }

    // Process valid submission: Prepare message and open WhatsApp
    const normalizedName = formData.name.trim();
    const normalizedWhatsapp = formData.whatsapp.trim();
    const normalizedEmail = formData.email.trim();
    const normalizedProfile = formData.profile;
    const normalizedMessage = formData.message.trim();

    const messageTemplate = `Olá, equipe +Seven!\n\n` +
      `Meu nome é: ${normalizedName}\n` +
      `E-mail: ${normalizedEmail}\n` +
      `Telefone: ${normalizedWhatsapp}\n` +
      `Área de interesse: ${normalizedProfile}\n\n` +
      `Mensagem:\n${normalizedMessage}`;

    const encodedText = encodeURIComponent(messageTemplate);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    setWhatsappUrl(url);

    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow === null || typeof newWindow === 'undefined') {
        setSubmitStatus('popup_blocked');
      } else {
        setSubmitStatus('success');
      }
    } catch (err) {
      setSubmitStatus('popup_blocked');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 w-full" aria-label="Formulário de Contato">
        
        {/* Nome completo e WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-[#B6BEC8] type-eyebrow">
              Nome completo
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="name"
              placeholder="Digite seu nome"
              className={`px-4 py-3 text-sm glass-input w-full font-normal ${errors.name ? 'border-red-500/55' : ''}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="whatsapp" className="text-[#B6BEC8] type-eyebrow">
              WhatsApp
            </label>
            <input
              ref={whatsappRef}
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              className={`px-4 py-3 text-sm glass-input w-full font-normal ${errors.whatsapp ? 'border-red-500/55' : ''}`}
              aria-invalid={!!errors.whatsapp}
              aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
            />
            {errors.whatsapp && (
              <span id="whatsapp-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.whatsapp}
              </span>
            )}
          </div>
        </div>

        {/* E-mail e Perfil dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[#B6BEC8] type-eyebrow">
              E-mail
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
              placeholder="exemplo@email.com"
              className={`px-4 py-3 text-sm glass-input w-full font-normal ${errors.email ? 'border-red-500/55' : ''}`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 relative">
            <label htmlFor="profile" className="text-[#B6BEC8] type-eyebrow">
              Perfil
            </label>
            <select
              ref={profileRef}
              id="profile"
              name="profile"
              value={formData.profile}
              onChange={handleInputChange}
              className={`px-4 py-3 text-sm glass-input w-full appearance-none pr-10 font-normal ${errors.profile ? 'border-red-500/55' : ''}`}
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
            <div className="absolute right-3.5 top-[34px] pointer-events-none text-[#7F8A98]" aria-hidden="true">
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {errors.profile && (
              <span id="profile-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.profile}
              </span>
            )}
          </div>
        </div>

        {/* Campo de Mensagem */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-[#B6BEC8] type-eyebrow">
            Como podemos ajudar?
          </label>
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Conte brevemente o que sua escola, instituição ou empresa precisa..."
            rows={4}
            className={`px-4 py-3 text-sm glass-input w-full resize-y font-normal ${errors.message ? 'border-red-500/55' : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
              <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.message}
            </span>
          )}
        </div>

        {/* Consentimento LGPD */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="agreed" className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              ref={agreedRef}
              type="checkbox"
              id="agreed"
              name="agreed"
              checked={formData.agreed}
              onChange={handleInputChange}
              className="mt-1 accent-[#16BDF0] w-4 h-4 shrink-0 focus:ring-2 focus:ring-[var(--brand-cyan)] focus:outline-none rounded"
              aria-invalid={!!errors.agreed}
              aria-describedby={errors.agreed ? "agreed-error" : undefined}
            />
            <span className="text-xs text-[#7F8A98] leading-relaxed">
              Autorizo o uso dos meus dados para que a equipe +Seven possa entrar em contato e enviar orientações.
            </span>
          </label>
          {errors.agreed && (
            <span id="agreed-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3 text-red-400" aria-hidden="true" /> {errors.agreed}
            </span>
          )}
        </div>

        {/* Botão de Envio */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="mt-2 w-full shadow-lg shadow-[#095BFF]/20"
          rightIcon={<Send className="w-4 h-4" />}
        >
          Abrir conversa no WhatsApp
        </Button>

        {/* Status de Envio Neutro e Honesto */}
        {submitStatus === 'success' && (
          <div role="status" aria-live="polite" className="mt-4 p-4 rounded-xl border border-[var(--border-light)] bg-white/5 text-sm text-[var(--gray-secondary)] flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[var(--brand-cyan)] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-white font-medium mb-1">Iniciando conversa...</p>
              <p>O WhatsApp foi aberto com a mensagem preparada. Revise e envie para concluir.</p>
            </div>
          </div>
        )}

        {submitStatus === 'popup_blocked' && (
          <div role="status" aria-live="polite" className="mt-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-sm text-[var(--gray-secondary)] flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex-1">
              <p className="text-white font-medium mb-1">Abertura bloqueada</p>
              <p className="mb-3 text-red-300">Não foi possível abrir o WhatsApp. Verifique o bloqueio de pop-ups e tente novamente.</p>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--brand-cyan)] hover:underline font-medium text-xs tracking-wider"
                >
                  <span>ABRIR CONVERSA MANUALMENTE</span>
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
