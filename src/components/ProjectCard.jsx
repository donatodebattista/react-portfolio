import { useRef, useState } from "react";
import { motion } from "motion/react";
import { FaCode } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import ButtonLink from "./ButtonLink";

export default function ProjectCard({ title, imageUrl, repoUrl, siteUrl, isDeployed, isRepoDisabled = false, isSiteDisabled = false }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: -dy * 8, y: dx * 8 });
    // glow follows cursor
    const gx = ((e.clientX - rect.left) / rect.width) * 100;
    const gy = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x: gx, y: gy });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden group cursor-default"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(164,118,255,0.35), 0 20px 60px rgba(0,0,0,0.5)"
          : "0 4px 24px rgba(0,0,0,0.3)",
        transition: "box-shadow 0.3s ease",
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Specular light overlay */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          }}
        />
      )}

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={`Vista previa de ${title}`}
          className="w-full aspect-video object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Bottom info */}
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-whiteText text-sm sm:text-base font-semibold">{title}</h3>
          <span
            className="inline-flex items-center gap-1 mt-1 text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              background: isDeployed ? "rgba(134,239,172,0.1)" : "rgba(251,191,36,0.1)",
              color: isDeployed ? "#86efac" : "#fbbf24",
              border: `1px solid ${isDeployed ? "rgba(134,239,172,0.2)" : "rgba(251,191,36,0.2)"}`,
            }}
          >
            <span className="w-1 h-1 rounded-full" style={{ background: isDeployed ? "#86efac" : "#fbbf24" }} />
            {isDeployed ? "Deployed" : "En Desarrollo"}
          </span>
        </div>

        <div className="flex flex-row gap-2">
          <ButtonLink href={siteUrl} title="Visitar sitio web" icon={MdArrowOutward} isDisabled={isSiteDisabled} />
          <ButtonLink href={repoUrl} title="Visitar repositorio" icon={FaCode} isDisabled={isRepoDisabled} />
        </div>
      </div>
    </motion.div>
  );
}