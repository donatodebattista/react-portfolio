import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1mpyggp', 'template_t8adorc', form.current, {
        publicKey: 'snHso6b8EsjFJe8G7',
      })
      .then(
        () => { toast.success("¡Enviado correctamente!", { theme: "dark" }); },
        ()  => { toast.error("Ocurrió un error, intenta de nuevo.", { theme: "dark" }); },
      );
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl text-sm font-sans transition-all duration-200 focus:outline-none " +
    "bg-[rgba(255,255,255,0.04)] text-white placeholder-[rgba(255,255,255,0.3)] " +
    "border border-[rgba(255,255,255,0.08)] " +
    "focus:border-[rgba(164,118,255,0.5)] focus:shadow-[0_0_0_3px_rgba(164,118,255,0.1)]";

  return (
    <form id="contact-form" ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>
      <label htmlFor="from_name" className='hidden'>Nombre</label>
      <input type="text" name="from_name" id='from_name' placeholder='Tu nombre' className={inputClass} />

      <label htmlFor="from_email" className='hidden'>Email</label>
      <input type="email" name="from_email" id="from_email" placeholder='tu@email.com' className={inputClass} />

      <label htmlFor="message" className='hidden'>Mensaje</label>
      <textarea
        placeholder='¿En qué puedo ayudarte?'
        name="message"
        id="message"
        className={`${inputClass} resize-none h-32`}
      />

      <button
        type="submit"
        id="send-email-button"
        className="mt-1 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 cursor-pointer"
        style={{
          background: "linear-gradient(135deg, rgba(164,118,255,0.9) 0%, rgba(120,80,220,0.9) 100%)",
          border: "1px solid rgba(164,118,255,0.3)",
          boxShadow: "0 4px 16px rgba(164,118,255,0.2)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(164,118,255,0.4)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(164,118,255,0.2)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Enviar mensaje
      </button>
    </form>
  );
}