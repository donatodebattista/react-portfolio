import ButtonLink from "./ButtonLink";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className='w-full'>
        <div className="flex flex-row gap-3 justify-center my-4 sm:mb-10 sm:mt-6">
          <a
            href="https://github.com/donatodebattista"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a github"
          >
            <ButtonLink icon={BsGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/donato-de-battista-5a7486308/"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a Linkedin"
          >
            <ButtonLink icon={FaLinkedin}/>
          </a>

            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=donatodebattista16@gmail.com&su=Hola%20Donato!&body="
            target="_blank"
            rel="noopener noreferrer"
            title="Enviar correo a Gmail"
            >
            <ButtonLink icon={SiGmail}/>
          </a>          
        </div>
        <div className='max-w-5xl mx-auto'>
            <p className='text-[#5a5a5a] text-xs text-center'>Copyright © 2025 Donato De Battista. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}
