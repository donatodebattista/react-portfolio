import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [actual, setActual] = useState(1);
  const [mounted, setMounted] = useState(false);

  const manualScrollRef = useRef(false);
  const manualTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      () => {
        if (manualScrollRef.current) return;

        let maxVisible = 0;
        let mostVisibleId = null;

        sections.forEach((sec) => {
          const rect = sec.getBoundingClientRect();
          const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
          );

          if (visibleHeight > maxVisible) {
            maxVisible = visibleHeight;
            const id = parseInt(sec.getAttribute("id"), 10);
            if (!Number.isNaN(id)) mostVisibleId = id;
          }
        });

        if (mostVisibleId !== null) {
          setActual(mostVisibleId);
        } else {
          let closestId = null;
          let closestDistance = Infinity;
          sections.forEach((sec) => {
            const rect = sec.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < closestDistance) {
              closestDistance = distance;
              const id = parseInt(sec.getAttribute("id"), 10);
              if (!Number.isNaN(id)) closestId = id;
            }
          });
          if (closestId !== null) setActual(closestId);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-30% 0px -30% 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    const cancelManualLock = () => {
      if (manualTimeoutRef.current) {
        clearTimeout(manualTimeoutRef.current);
        manualTimeoutRef.current = null;
      }
      manualScrollRef.current = false;
    };
    window.addEventListener("wheel", cancelManualLock, { passive: true });
    window.addEventListener("touchstart", cancelManualLock, { passive: true });
    window.addEventListener("keydown", cancelManualLock, { passive: true });

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      observer.disconnect();
      window.removeEventListener("wheel", cancelManualLock);
      window.removeEventListener("touchstart", cancelManualLock);
      window.removeEventListener("keydown", cancelManualLock);
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(String(id));
    if (!el) { setActual(id); return; }

    const currentScroll = window.scrollY;
    const rect = el.getBoundingClientRect();
    const elAbsoluteTop = rect.top + window.scrollY;
    const targetScroll = elAbsoluteTop - (window.innerHeight / 2 - rect.height / 2);
    const distance = Math.abs(targetScroll - currentScroll);
    const estimatedDuration = Math.min(1200, Math.max(400, distance * 0.5));

    manualScrollRef.current = true;
    setActual(id);
    el.scrollIntoView({ behavior: "smooth", block: "center" });

    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      manualScrollRef.current = false;
      manualTimeoutRef.current = null;
    }, Math.round(estimatedDuration + 120));

    window.history.replaceState(null, "", `#${id}`);
  };

  const links = [
    { id: 1, label: "Home" },
    { id: 2, label: "Proyectos" },
    { id: 3, label: "Contacto" },
  ];

  return (
    <AnimatePresence>
      {mounted && (
        <motion.nav
          className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            className="glass rounded-2xl px-6 py-3 flex justify-center items-center"
            style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)" }}
          >
            <ul className="flex flex-row gap-x-2 sm:gap-x-3 text-white font-sans text-sm sm:text-base">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors duration-200"
                    style={{ color: actual === id ? "#c4a4ff" : "rgba(255,255,255,0.65)" }}
                  >
                    {actual === id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(164,118,255,0.15)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full transition-all duration-300"
                      style={{
                        background: actual === id ? "#86efac" : "transparent",
                        boxShadow: actual === id ? "0 0 6px #86efac" : "none",
                      }}
                    />
                    <span className="relative z-10 font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
