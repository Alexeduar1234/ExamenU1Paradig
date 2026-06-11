import { useState } from "react";
import { GameCard } from "../../components/games/GameCard";

export const CatalogPage = () => {

  const [cartCount, setCartCount] = useState<number>(0);
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [showCart, setShowCart] = useState<boolean>(false);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setTotalSpent((prev) => prev + 59.99);
  };

  const handleEmptyCart = () => {
    setCartCount(0);
    setTotalSpent(0);
  };

  const handleToggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-violet-800 mb-4">Catalogo de Juegos</h1>

      {/* Seccion 1 Lista de juegos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <GameCard
          title="The Legend of Zelda : twilight princess (chulada)"
          genre="Aventura"
          price={59.99}
          available={true}
        />
        <GameCard
          title="FIFA 26 (meh)"
          genre="Deportes"
          price={89.99}
          available={false}
        />
        <GameCard
          title="READ DEAD REDEMPTION 2 (preciocidad)"
          genre="mundo abierto"
          price={67.99}
          available={true}
        />
      </div>

      {/* Seccion 2 Controles del carrito */}
      <div className="flex flex-wrap gap-3 mb-4">
        <button
          onClick={handleAddToCart}
          className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Agregar al carrito (+$59.99)
        </button>

        <button
          onClick={handleEmptyCart}
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Vaciar carrito
        </button>

        <button
          onClick={handleToggleCart}
          className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Ver resumen
        </button>
      </div>

      {/* Seccion 3 Resumen del carrito */}
      {showCart && (
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Resumen del carrito</h2>
          <p className="text-gray-600">Juegos en carrito: {cartCount}</p>
          <p className="text-gray-600">Total a pagar: ${totalSpent.toFixed(2)}</p>
        </div>
      )}

    </div>
  );
};
