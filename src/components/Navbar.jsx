import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [actual, setActual] = useState(1);

  const manualScrollRef = useRef(false);
  const manualTimeoutRef = useRef(null);

  useEffect(() => {
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
    if (!el) {
      setActual(id);
      return;
    }


    const currentScroll = window.scrollY;
    const rect = el.getBoundingClientRect();
    const elAbsoluteTop = rect.top + window.scrollY;

    const targetScroll =
      elAbsoluteTop - (window.innerHeight / 2 - rect.height / 2);
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

  return (
    <nav className="fixed top-4 left-0 w-full bg-transparent z-50 flex justify-center">
      <div className="backdrop-blur-xl rounded-lg sm:rounded-2xl px-8 py-3 sm:py-4 mt-4 flex justify-center items-center">
        <ul className="flex flex-row gap-x-6 sm:gap-x-12 text-white font-code text-sm sm:text-lg">
          <li>
            <div className="flex items-center gap-1">
              <span
                className={
                  "inline-block w-1 sm:w-2 h-1 sm:h-2 rounded-full transition-colors duration-200 mr-1 " +
                  (actual === 1 ? "bg-lime-400" : "bg-transparent")
                }
              />
              <a
                href="#1"
                onClick={(e) => handleNavClick(e, 1)}
                className={actual === 1 ? "text-[#a476ffb6]" : "text-white"}
              >
                Home
              </a>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-1">
              <span
                className={
                  "inline-block w-1 sm:w-2 h-1 sm:h-2 rounded-full transition-colors duration-200 mr-1 " +
                  (actual === 2 ? "bg-lime-400" : "bg-transparent")
                }
              />
              <a
                href="#2"
                onClick={(e) => handleNavClick(e, 2)}
                className={actual === 2 ? "text-[#a476ffb6]" : "text-white"}
              >
                Proyectos
              </a>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-1">
              <span
                className={
                  "inline-block w-1 sm:w-2 h-1 sm:h-2 rounded-full transition-colors duration-200 mr-1 " +
                  (actual === 3 ? "bg-lime-400" : "bg-transparent")
                }
              />
              <a
                href="#3"
                onClick={(e) => handleNavClick(e, 3)}
                className={actual === 3 ? "text-[#a476ffb6]" : "text-white"}
              >
                Contacto
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
