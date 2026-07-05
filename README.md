# SellerHub - MERN Seller Dashboard

A full-stack Seller Dashboard inspired by Flipkart Seller Hub, built using the MERN stack. SellerHub helps sellers manage products, monitor inventory, analyze sales, and manage orders through a modern and responsive dashboard.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Material UI](https://img.shields.io/badge/Material_UI-Frontend-007FFF?logo=mui)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## Features

### Authentication
- User Signup
- User Login
- JWT Authentication
- Password Encryption using bcrypt
- Protected Routes

### Product Management
- Add Products
- Edit Products
- Delete Products
- Search Products
- Inventory Tracking

### Dashboard
- Revenue Overview
- Product Statistics
- Orders Statistics
- Customer Statistics
- Analytics Charts

### UI
- Responsive Design
- Material UI Components
- Interactive Data Tables
- Modern Dashboard Layout

---

## Tech Stack

### Frontend

- React
- React Router DOM
- Material UI
- Axios
- MUI DataGrid

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

## Project Structure

```
SellerHub
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── uploads
│   └── server.js
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/harshsinghh0412-crypto/Seller_Hub.git
```

Move into the project

```bash
cd Seller_Hub
```

---

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the server folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend

```bash
node server.js
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Open

```
http://localhost:5173
```

---

## Screenshots

### Login

> Add screenshot here

---

### Dashboard

> Add screenshot here

---

### Products

> Add screenshot here

---

### Analytics

> Add screenshot here

---

## API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/signup |
| POST | /api/auth/login |

---

### Products

| Method | Endpoint |
|---------|----------|
| GET | /api/products |
| POST | /api/products |
| PUT | /api/products/:id |
| DELETE | /api/products/:id |

---

### Dashboard

| Method | Endpoint |
|---------|----------|
| GET | /api/dashboard |

---

### Analytics

| Method | Endpoint |
|---------|----------|
| GET | /api/analytics/category |

---

## Upcoming Features

- Order Management
- Customer Management
- Product Images
- Excel Export
- PDF Reports
- Dark Mode
- Notifications
- Cloudinary Integration
- Deployment on Vercel & Render

---

## Learning Outcomes

This project helped me gain hands-on experience with:

- Full Stack MERN Development
- REST API Design
- JWT Authentication
- MongoDB CRUD Operations
- Material UI
- React Routing
- Protected Routes
- State Management
- Responsive UI Design
- Git & GitHub

---

## Author

**Harsh Singh**

- GitHub: https://github.com/harshsinghh0412-crypto

---

## License

This project is licensed under the MIT License.
