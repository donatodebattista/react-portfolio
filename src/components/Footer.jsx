import ButtonLink from "./ButtonLink";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className='w-full pb-4'>
      <div className="flex flex-row gap-3 justify-center my-6">
        <ButtonLink
          icon={BsGithub}
          href="https://github.com/donatodebattista"
          title="Visitar Github"
          isDisabled={false}
        />
        <ButtonLink
          icon={FaLinkedin}
          href="https://www.linkedin.com/in/donato-de-battista-5a7486308/"
          title="Visitar Linkedin"
          isDisabled={false}
        />
        <ButtonLink
          icon={SiGmail}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=donatodebattista16@gmail.com&su=Hola%20Donato!&body="
          title="Enviar correo a Gmail"
          isDisabled={false}
        />
      </div>
      <p className='text-[rgba(255,255,255,0.2)] text-xs text-center font-medium tracking-wider'>
        © 2025 Donato De Battista — Todos los derechos reservados
      </p>
    </footer>
  );
}
