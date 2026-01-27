const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolio.controller');

router.post('/', portfolioController.createPortfolio);
router.get('/', portfolioController.getAllPortfolios);
router.get('/:slug', portfolioController.getPortfolioBySlug);
router.put('/:id', portfolioController.updatePortfolio);
router.delete('/:id', portfolioController.deletePortfolio);
router.patch('/:id/publish', portfolioController.togglePublish);
router.patch('/:slug/view', portfolioController.incrementViews);

module.exports = router;