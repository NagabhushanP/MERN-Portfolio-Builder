const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Portfolio = require('./models/Portfolio.model');

dotenv.config();

const samplePortfolios = [
  {
    name: 'Sarah Chen',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with 5 years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies.',
    email: 'sarah.chen@email.com',
    github: 'https://github.com/sarahchen',
    linkedin: 'https://linkedin.com/in/sarahchen',
    projects: [
      {
        name: 'E-Commerce Platform',
        description: 'Built a full-featured online store with payment integration, inventory management, and admin dashboard.',
        url: 'https://example.com/ecommerce'
      },
      {
        name: 'Task Management App',
        description: 'Collaborative task manager with real-time updates using WebSockets and MongoDB.',
        url: 'https://example.com/tasks'
      }
    ],
    template: 'modern',
    isPublished: true
  },
  {
    name: 'Alex Kumar',
    title: 'UI/UX Designer',
    bio: 'Creative designer and developer focused on crafting beautiful, accessible digital experiences.',
    email: 'alex.kumar@email.com',
    github: 'https://github.com/alexkumar',
    linkedin: 'https://linkedin.com/in/alexkumar',
    projects: [
      {
        name: 'Design System',
        description: 'Comprehensive component library used across multiple products.',
        url: 'https://example.com/design-system'
      }
    ],
    template: 'creative',
    isPublished: true
  }
];

// Helper function to generate slug from name
const generateSlug = (name) =>
  name.toLowerCase().replace(/\s+/g, '-');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📦 Connected to MongoDB');

    // Clear existing portfolios
    await Portfolio.deleteMany({});
    console.log('🗑️  Cleared existing portfolios');

    // Add slugs automatically if missing
    const portfoliosWithSlugs = samplePortfolios.map(portfolio => ({
      ...portfolio,
      slug: portfolio.slug || generateSlug(portfolio.name)
    }));

    // Insert sample portfolios
    await Portfolio.insertMany(portfoliosWithSlugs);
    console.log('✅ Sample portfolios inserted successfully');

    // Disconnect
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
