# 💼 JobPortal

> A modern full-stack job portal connecting students with recruiters — built with React, Node.js, Express, and MongoDB.

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📖 Table of Contents

- [💼 JobPortal](#-jobportal)
  - [📖 Table of Contents](#-table-of-contents)
  - [🧾 About the Project](#-about-the-project)
  - [✨ Features](#-features)
    - [👩‍🎓 For Students](#-for-students)
    - [🏢 For Recruiters](#-for-recruiters)
    - [🔐 Authentication \& Security](#-authentication--security)
    - [🎨 UI/UX](#-uiux)
  - [🛠 Tech Stack](#-tech-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [🔑 Environment Variables](#-environment-variables)
  - [📡 API Reference](#-api-reference)
    - [User Routes — `/api/v1/user`](#user-routes--apiv1user)
    - [Job Routes — `/api/v1/job`](#job-routes--apiv1job)
    - [Company Routes — `/api/v1/company`](#company-routes--apiv1company)
    - [Application Routes — `/api/v1/application`](#application-routes--apiv1application)
  - [📸 Screenshots](#-screenshots)
  - [📦 What's Included](#-whats-included)
    - [Backend](#backend-1)
    - [Frontend](#frontend-1)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)
  - [👨‍💻 Author](#-author)

---

## 🧾 About the Project

**JobPortal** is a dynamic, full-stack web application that bridges the gap between job seekers (students) and employers (recruiters). It provides a seamless experience for posting jobs, applying to positions, managing company profiles, and tracking applications — all within a single platform.

> ⚠️ **Note:** This project is currently under active development. Features are being added progressively.

---

## ✨ Features

### 👩‍🎓 For Students
- Browse and search job listings
- Apply to jobs with resume upload
- Manage profile with avatar and bio
- Track application status

### 🏢 For Recruiters
- Post and manage job listings
- Create and manage company profiles
- Review incoming applications
- Role-based access control

### 🔐 Authentication & Security
- JWT-based authentication via secure HTTP-only cookies
- Role-based access (student / recruiter)
- Password hashing with Bcryptjs

### 🎨 UI/UX
- Responsive design (mobile-first with Tailwind CSS)
- Dark / Light theme support
- Toast notifications (Sonner)
- Carousel, popovers, avatars via Radix UI
- SPA navigation with React Router DOM

---

## 🛠 Tech Stack

> See `frontend/package.json` and `backend/package.json` for exact dependency versions.

### Frontend

| Technology | Purpose |
|---|---|
| React | UI library |
| React Router DOM | Client-side routing |
| Redux Toolkit + React-Redux | State management |
| Tailwind CSS | Utility-first styling |
| Radix UI | Headless UI components |
| Lucide React | Icon library |
| Axios | HTTP client |
| Sonner | Toast notifications |
| Embla Carousel | Carousel component |
| next-themes | Dark/light theme switching |
| Vite | Build tool & dev server |

### Backend

| Technology | Purpose |
|---|---|
| Node.js + Express.js | REST API framework |
| MongoDB + Mongoose | Database & ODM |
| JSON Web Token (JWT) | Token-based authentication |
| Bcryptjs | Password hashing |
| Multer | File uploads (resume / profile photo) |
| cookie-parser | Cookie middleware |
| CORS | Cross-origin request handling |
| dotenv | Environment variable management |
| Nodemon | Dev auto-restart |

---

## 📁 Project Structure

```
JobPortal/
├── frontend/                   # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/             # Static files, images
│   │   ├── components/
│   │   │   ├── auth/           # Login, Register components
│   │   │   ├── pages/          # Page-level components
│   │   │   ├── shared/         # Navbar, Footer, etc.
│   │   │   └── ui/             # Reusable UI primitives
│   │   ├── redux/
│   │   │   ├── store.js        # Redux store configuration
│   │   │   └── slices/
│   │   │       └── authSlice.js
│   │   ├── routes/             # React Router configuration
│   │   ├── utils/              # Helper functions & constants
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                    # Node.js + Express backend
│   ├── controllers/            # Business logic
│   │   ├── user.controller.js
│   │   ├── job.controller.js
│   │   ├── company.controller.js
│   │   └── application.controller.js
│   ├── models/                 # Mongoose schemas
│   │   ├── user.model.js
│   │   ├── job.model.js
│   │   ├── company.model.js
│   │   └── application.model.js
│   ├── routes/                 # API route definitions
│   │   ├── user.route.js
│   │   ├── job.route.js
│   │   ├── company.route.js
│   │   └── application.route.js
│   ├── middlewares/
│   │   ├── isAuthenticated.js  # JWT auth middleware
│   │   └── multer.js           # File upload middleware
│   ├── utils/
│   │   └── db.js               # MongoDB connection
│   ├── .env
│   ├── index.js                # Entry point
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/JobPortal.git
cd JobPortal
```

**2. Setup the Backend**

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory (see [Environment Variables](#-environment-variables)).

```bash
npm run dev       # Start backend with Nodemon (port 8000)
```

**3. Setup the Frontend**

Open a new terminal:

```bash
cd frontend
npm install
npm run dev       # Start Vite dev server (port 5173)
```

**4. Open in browser**

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend/` directory with the following variables:

```env
# Server
PORT=8000

# MongoDB
MONGO_URI=mongodb://localhost:27017/jobportal
# or MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/jobportal

# JWT
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d

# CORS
CLIENT_URL=http://localhost:5173
```

> ⚠️ Never commit your `.env` file. Make sure it's listed in `.gitignore`.

---

## 📡 API Reference

All API routes are prefixed with `/api/v1/`

### User Routes — `/api/v1/user`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/register` | No | Register a new user (with file upload) |
| POST | `/login` | No | Login and receive JWT cookie |
| GET | `/logout` | No | Logout and clear cookie |
| POST | `/profile/update` | Yes | Update profile (with file upload) |

### Job Routes — `/api/v1/job`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/post` | Yes | Post a new job |
| GET | `/get` | Yes | Get all jobs |
| GET | `/get/:id` | Yes | Get a job by ID |
| GET | `/admin/jobs` | Yes | Get jobs posted by the logged-in recruiter |

### Company Routes — `/api/v1/company`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/register` | Yes | Register a new company |
| GET | `/get` | Yes | Get all companies for the logged-in recruiter |
| GET | `/get/:id` | Yes | Get a company by ID |
| PUT | `/update/:id` | Yes | Update company details |

### Application Routes — `/api/v1/application`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/apply/:id` | Yes | Apply to a job by ID |
| GET | `/applied-jobs` | Yes | Get all jobs the current user applied to |
| GET | `/:id/applicants` | Yes | Get all applicants for a specific job |
| PUT | `/status/:id/update` | Yes | Update the status of an application |

---

## 📸 Screenshots

> 🚧 Screenshots will be added as the UI is finalized.

---

## 📦 What's Included

### Backend
- JWT authentication with HTTP-only cookies
- Role-based access control (student / recruiter)
- User registration & login with password hashing
- Profile management with file upload (resume / photo)
- Job posting and retrieval (all jobs + recruiter-specific)
- Company registration and management
- Job application system with status tracking
- RESTful API with versioning (`/api/v1/`)
- MVC architecture (Models, Controllers, Routes, Middlewares)
- Environment-based configuration with dotenv

### Frontend
- Single Page Application with client-side routing
- Global auth state management via Redux Toolkit
- Axios-based API integration
- Reusable component library (Radix UI + Tailwind CSS)
- Dark / Light theme support
- Toast notification system
- Responsive layout for all screen sizes
- Avatar, popover, radio group, and carousel components

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) standard for commit messages.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Built by **[Muhammad Affan](https://github.com/Affan402)**

---

> ⭐ If you find this project useful, consider giving it a star on GitHub!
