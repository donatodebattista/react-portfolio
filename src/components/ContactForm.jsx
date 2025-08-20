//NUEVO
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

export default function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1mpyggp', 'template_t8adorc', form.current, {
        publicKey: 'snHso6b8EsjFJe8G7',
      })
      .then(
        () => {
          toast.success("Enviado Correctamente!", {
          theme: "dark"
        })
        },
        (error) => {
            toast.error("Ocurrió un error", {
            theme: "dark"
            })
        },
      );
  };

  return (
    <form id="contact-form" ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
        <label htmlFor="from_name" className='hidden'>name</label>
        <input type="text" name="from_name" id='from_name' placeholder='Nombre' className='px-4 py-2 bg-[#1717179c] text-whiteText border border-[#62626227] rounded-md focus:outline-none focus:border-[#e7e7e727]'/>
        
        <label htmlFor="from_email" className='hidden'>email</label>
        <input type="email" name="from_email" id="from_email" placeholder='Email' className='px-4 py-2 bg-[#1717179c] text-whiteText border border-[#62626227] rounded-md focus:outline-none focus:border-[#e7e7e727]'/>
        
        <label htmlFor="message" className='hidden'>message</label>
        <textarea placeholder='Mensaje' name="message" id="message" className='px-4 py-2 bg-[#1717179c] text-whiteText border border-[#62626227] rounded-md focus:outline-none resize-none h-50 focus:border-[#e7e7e727]'></textarea>
        <button type="submit" id="send-email-button" value="Send" className='transition-colors px-4 py-2 bg-[#a476ffb6] hover:bg-[#a476ff84] text-whiteText border border-[#62626227] rounded-md focus:outline-none cursor-pointer'>Enviar</button>
    </form>
  )
}