import { useState } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
      <div className="logo z-50">
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 30H70V70H30V30Z" stroke="white" strokeWidth="4" />
          <path d="M30 30H70V50H30V30Z" fill="white" />
          <path d="M30 50H50V70H30V50Z" fill="white" />
        </svg>
      </div>

      <button className="menu-toggle z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`hamburger ${isMenuOpen ? "open" : ""} flex flex-col justify-between h-5 w-7`}>
          <span className="block w-full h-0.5 bg-white transition-all duration-300"></span>
          <span className="block w-full h-0.5 bg-white transition-all duration-300"></span>
          <span className="block w-full h-0.5 bg-white transition-all duration-300"></span>
        </div>
      </button>

      <div
        className={`menu-overlay ${isMenuOpen ? "open" : ""} fixed inset-0 bg-black/90 flex justify-center items-center z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="menu">
          <ul className="text-center">
            <li className="my-5">
              <a href="#home" className="text-2xl text-white hover:text-blue-400 transition-colors duration-300">
                Home
              </a>
            </li>
            <li className="my-5">
              <a href="#about" className="text-2xl text-white hover:text-blue-400 transition-colors duration-300">
                About
              </a>
            </li>
            <li className="my-5">
              <a href="#work" className="text-2xl text-white hover:text-blue-400 transition-colors duration-300">
                Work
              </a>
            </li>
            <li className="my-5">
              <a href="#contact" className="text-2xl text-white hover:text-blue-400 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
