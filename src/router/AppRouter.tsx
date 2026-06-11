import { Routes, Route } from "react-router-dom";
import { Navbar } from "../presentation/components/layout/Navbar";
import { HomePage } from "../presentation/pages/home/HomePage";
import { CatalogPage } from "../presentation/pages/catalog/CatalogPage";

export const AppRouter = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="container mx-auto py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </main>
    </div>
  );
};
