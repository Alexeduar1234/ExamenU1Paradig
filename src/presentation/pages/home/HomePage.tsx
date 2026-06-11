import { Link } from "react-router-dom";
import { Gamepad2, Tag } from "lucide-react";

export const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-violet-500">Bienvenido a GameStore. Donde compran los mejores</h1>

      <div className="mt-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-start gap-6">

          {/* cuadro 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm text-gray-500">Juegos disponibles</h2>
                <p className="text-4xl md:text-5xl font-bold text-violet-500 mt-2">120</p>
              </div>
              <span className="text-gray-400 hidden md:block"><Gamepad2 size={36} /></span>
            </div>
          </div>

          {/* cuadro 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm text-green-400">Ofertas activas</h2>
                <p className="text-4xl md:text-5xl font-bold text-green-400 mt-2">15</p>
              </div>
              <span className="text-gray-400 hidden md:block"><Tag size={36} /></span>
            </div>
          </div>

        </div>

        <div className="mt-6">
          <Link
            to="/catalog"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Ver catalogo
          </Link>
        </div>
      </div>
    </div>
  );
};
