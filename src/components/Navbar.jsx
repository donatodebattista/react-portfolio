import { useState } from "react"

export default function Navbar() {
  const [actual, setActual] = useState(1)

  

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
              <a className={actual === 1 ? "text-[#a476ffb6]" : "text-white"} href="#1" onClick={() => setActual(1)}>Home</a>
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
                <a className={actual === 2 ? "text-[#a476ffb6]" : "text-white"} href="#2" onClick={() => setActual(2)}>Proyectos</a>
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
                <a className={actual === 3 ? "text-[#a476ffb6]" : "text-white"} href="#3" onClick={() => setActual(3)}>Contacto</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}