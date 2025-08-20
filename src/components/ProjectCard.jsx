import { FaCode } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import ButtonLink from "./ButtonLink";

export default function ProjectCard({ title, imageUrl, repoUrl, siteUrl, isDeployed }) {
  return (
    <div className="bg-[#1717179c] rounded-2xl shadow-lg overflow-hidden group relative transition-transform duration-300 border  border-[#62626227]">
      <img
        src={imageUrl}
        alt={`Vista previa de ${title}`}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-whiteText text-md sm:text-lg font-semibold">{title}</h3>
          <p className="text-xs text-[#dbdbdb98]">{isDeployed ? "Deployed" : "En Desarrollo"}</p>
        </div>

        <div className="flex flex-row gap-2">
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Visitar sitio web"
          >
            <ButtonLink icon={MdArrowOutward} />
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver repositorio"
          >
            <ButtonLink icon={FaCode} />
          </a>
        </div>
      </div>
    </div>
  );
}