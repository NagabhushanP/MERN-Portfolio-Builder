MERN Port polio Builder 

A full-stack web application that allows users to create, preview, and publish personal portfolio websites using pre-built React templates.

 **MERN stack (MongoDB Atlas, Express, React, Node.js)**.

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

- 👀 Live preview of the portfolio after creation  
- 🌐 Public portfolio URL using slug-based routing  
- 🗄️ **MongoDB Atlas used for cloud-based database storage**  
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

- **MongoDB Atlas (Cloud Database)**
- Mongoose (ODM for MongoDB)

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
│ │
│ └── .env
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── config/
│ └── db.js
│
└── README.md


---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/portfolio-website-builder.git
cd portfolio-website-builder

2️⃣ Backend Setup (Node.js + MongoDB Atlas)
cd backend
npm install
npm start
Backend runs on:

http://localhost:5000
Portfolio data is stored in MongoDB Atlas (cloud-based MongoDB service)

Database connection is handled using Mongoose

3️⃣ Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

4️⃣ Environment Variables
Frontend (frontend/.env)
REACT_APP_API_URL=http://localhost:5000

Backend (MongoDB Atlas URI)
MongoDB Atlas connection string is configured using environment variables:

MONGODB_URI=your_mongodb_atlas_connection_string
🔗 Usage
Open the application in the browser.

Click Create Portfolio from the gallery.

Enter personal details, project details, and contact information.

Select one of the available templates.

Submit the form to preview the portfolio.

Access the public portfolio at:

/portfolio/:slug
All portfolio data is persisted securely in MongoDB Atlas.

🧪 API Testing with Postman
All backend REST APIs were tested using Postman to ensure correct request handling and MongoDB Atlas data persistence before frontend integration.

Tested Endpoints
POST /api/portfolios
Create and store a new portfolio in MongoDB Atlas

GET /api/portfolios
Retrieve all published portfolios from MongoDB Atlas

GET /api/portfolios/:slug
Fetch portfolio data by slug from MongoDB Atlas

PATCH /api/portfolios/:slug/view
Update portfolio view count in MongoDB Atlas

🧠 Key Learning Outcomes
Designing RESTful APIs with Express.js

Working with MongoDB Atlas (cloud MongoDB)

MongoDB schema modeling using Mongoose

CRUD operations with MongoDB

Dynamic template rendering in React

Frontend and backend integration

API testing using Postman

Professional project structuring

👤 Author
Nagabhooshan P Acharya


GitHub: https://github.com/NagabhushanP

LinkedIn: https://www.linkedin.com/in/nagabhooshan-p-acharya


📄 License
This project was developed for educational purposes.
 



