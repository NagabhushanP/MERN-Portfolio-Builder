import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/portfolios`,
  headers: { "Content-Type": "application/json" },
});

const api = {
  createPortfolio: async (data) => {
    const res = await apiClient.post("/", data);
    return res.data.data;
  },

  getAllPortfolios: async () => {
    const res = await apiClient.get("/");
    return res.data.data;
  },

  getPortfolioBySlug: async (slug) => {
    const res = await apiClient.get(`/${slug}`);
    return res.data.data;
  },

  incrementViews: async (slug) => {
    await apiClient.patch(`/${slug}/view`);
  },
};

export default api;
