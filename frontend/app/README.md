# Portfolio Website Builder (MERN Stack)

A full-stack web application that allows users to create, preview, and publish personal portfolio websites using pre-built React templates.

This project was developed as part of a hiring assignment and demonstrates complete end-to-end full-stack development using the MERN stack.

---

## 🚀 Features

- 🎨 Multiple pre-built portfolio templates
  - Modern
  - Minimal
  - Creative
- ✍️ Content editor for:
  - Bio
  - Projects
  - Contact information (Email, GitHub, LinkedIn)
- 👀 Live preview of portfolio after creation
- 🌐 Public portfolio URL using slug-based routing
- 🗄️ MongoDB database storage
- 📊 Portfolio view count tracking
- 🧪 Backend API testing using Postman

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Tools
- Postman (API testing)
- Git & GitHub (version control)

---

## 📁 Project Structure

portfolio-website-builder/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── templates/
│ │ │ ├── ModernTemplate.jsx
│ │ │ ├── MinimalTemplate.jsx
│ │ │ └── CreativeTemplate.jsx
│ │ ├── pages/
│ │ │ ├── CreatePortfolio.jsx
│ │ │ └── PortfolioPage.jsx
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── App.jsx
│ │ └── index.js
│ └── .env
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
│
└── README.md

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/portfolio-website-builder.git
cd portfolio-website-builder

2️⃣ Backend Setup
cd backend
npm install
npm start

Backend will run on:

http://localhost:5000
3️⃣ Frontend Setup
cd frontend
npm install
npm start

Frontend will run on:

http://localhost:3000
4️⃣ Environment Variables
Create a .env file inside the frontend folder:

REACT_APP_API_URL=http://localhost:5000
🔗 Usage
Open the application in the browser.

Click Create Portfolio from the gallery.

Enter personal details, project details, and contact information.

Select one of the available templates.

Submit the form to preview the portfolio.

Share the public portfolio URL:

/portfolio/:slug

🧪 API Testing with Postman
All backend REST APIs were tested using Postman to ensure correct request handling and data persistence before frontend integration.

Tested Endpoints
POST /api/portfolios
Create a new portfolio

GET /api/portfolios
Retrieve all published portfolios

GET /api/portfolios/:slug
Fetch portfolio data using public slug

PATCH /api/portfolios/:slug/view
Increment portfolio view count

Postman Validation
Verified request payloads

Checked HTTP status codes (200, 201, 400)

Validated MongoDB data storage

Used Postman for debugging during development


🧠 Key Learning Outcomes:

Designing RESTful APIs with Express.js
MongoDB schema modeling using Mongoose
Dynamic template rendering in React
Managing form state and validation
Frontend and backend integration
API testing using Postman
Professional project structuring


📄 License

This project was developed for educational and evaluation purposes as part of a hiring process.


## 👤 Author

**Nagabhushan P Acharya**  
-Github : https://github.com/NagabhushanP
-Linkedin : https://www.linkedin.com/in/nagabhooshan-p-acharya


