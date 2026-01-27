import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

import ModernTemplate from "../components/templates/ModernTemplate";
import MinimalTemplate from "../components/templates/MinimalTemplate";
import CreativeTemplate from "../components/templates/CreativeTemplate";

const PortfolioPage = () => {
  const { slug } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await api.getPortfolioBySlug(slug);
        setPortfolio(data);
        await api.incrementViews(slug);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, [slug]);

  if (loading) return <div className="p-10">Loading...</div>;
  if (!portfolio) return <div className="p-10">Portfolio not found</div>;

  switch (portfolio.template) {
    case "minimal":
      return <MinimalTemplate data={portfolio} />;
    case "creative":
      return <CreativeTemplate data={portfolio} />;
    default:
      return <ModernTemplate data={portfolio} />;
  }
};

export default PortfolioPage;
