import React from "react";
import { GameBadge } from "./GameBadge";

interface Props {
  title: string;
  genre: string;
  price: number;
  available: boolean;
  icon?: React.ReactNode;
}

export const GameCard = ({ title, genre, price, available, icon }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">

      {/* Icono */}
      {icon && (
        <span className="text-gray-600 text-2xl">{icon}</span>
      )}

      {/* Titulo */}
      <h2 className="text-lg font-bold text-gray-700 mt-2">{title}</h2>

      {/* Genero */}
      <p className="text-sm text-gray-500">{genre}</p>

      {/* Precio formateado */}
      <p className="text-gray-700 mt-1">${price.toFixed(2)}</p>

      {/* Badge de disponibilidad */}
      <div className="mt-2">
        {available ? (
          <GameBadge label="Disponible" color="bg-green-500" />
        ) : (
          <GameBadge label="Agotado" color="bg-red-500" />
        )}
      </div>

    </div>
  );
};
