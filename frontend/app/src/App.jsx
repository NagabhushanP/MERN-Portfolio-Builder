import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./services/api";

import PortfolioPage from "./pages/PortfolioPage";
import CreatePortfolio from "./pages/CreatePortfolio";

function App() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const data = await api.getAllPortfolios();
      setPortfolios(data);
      setError(null);
    } catch (err) {
      setError("Backend not reachable");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-10">Loading...</div>;
  if (error) return <div className="p-10 text-red-600">{error}</div>;

  return (
    <Routes>
      {/* ================= PORTFOLIO GALLERY ================= */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold mb-6">Portfolio Gallery</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolios.map((p) => (
                <a
                  key={p._id}
                  href={`/portfolio/${p.slug}`}
                  className="bg-white p-4 rounded shadow hover:shadow-lg transition block"
                >
                  <h2 className="text-xl font-semibold">{p.name}</h2>
                  <p className="text-gray-600">{p.title}</p>
                </a>
              ))}
            </div>

            <a
              href="/create"
              className="inline-block mt-8 bg-purple-600 text-white px-6 py-2 rounded"
            >
              Create Portfolio
            </a>
          </div>
        }
      />

      {/* ================= CREATE PORTFOLIO ================= */}
      <Route path="/create" element={<CreatePortfolio />} />

      {/* ================= PUBLIC PORTFOLIO ================= */}
      <Route path="/portfolio/:slug" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
