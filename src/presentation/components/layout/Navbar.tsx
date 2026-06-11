import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Gamepad2 } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-violet-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">

          {/* Titulo */}
          <div className="flex items-center">
            <span className="font-bold text-xl">GameStore</span>
          </div>

          {/* Navegacion en Escritorio */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="flex gap-1 items-center px-3 py-2 rounded-md text-sm text-gray-200 hover:bg-violet-800 hover:text-white transition-colors"
            >
              <Home size={18} />
              <span>Inicio</span>
            </Link>
            <Link
              to="/catalog"
              className="flex gap-1 items-center px-3 py-2 rounded-md text-sm text-gray-200 hover:bg-violet-800 hover:text-white transition-colors"
            >
              <Gamepad2 size={18} />
              <span>Catalogo</span>
            </Link>
          </div>

          {/* Boton menu movil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 p-2 focus:outline-none"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu movil */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={toggleMenu}
              className="flex gap-1 items-center px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-violet-800 hover:text-white"
            >
              <Home size={18} />
              <span>Inicio</span>
            </Link>
            <Link
              to="/catalog"
              onClick={toggleMenu}
              className="flex gap-1 items-center px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-violet-800 hover:text-white"
            >
              <Gamepad2 size={18} />
              <span>Catalogo</span>
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
};
