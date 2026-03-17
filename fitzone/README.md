# FitZone - Full Stack Gym and Fitness Website

FitZone is a production-ready full-stack gym and fitness center web application with a modern dark UI, animated interactions, and backend form handling with MongoDB.

## Tech Stack

- Frontend: React, React Router v6, Tailwind CSS, Framer Motion, Vite
- Backend: Node.js, Express
- Database: MongoDB with Mongoose

## Project Structure

```text
fitzone/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProgramCard.jsx
│   │   │   ├── TrainerCard.jsx
│   │   │   ├── PricingCard.jsx
│   │   │   └── ImageLightbox.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── Trainers.jsx
│   │   │   ├── Membership.jsx
│   │   │   ├── Gallery.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   └── package.json
├── server/
│   ├── models/
│   │   ├── Contact.js
│   │   └── Membership.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── membership.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js 18+
- npm 9+
- MongoDB local instance or MongoDB Atlas connection string

## Environment Variables

### Server

Create `server/.env` from `server/.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/fitzone
CLIENT_ORIGIN=http://localhost:5173
```

### Client

Create `client/.env` from `client/.env.example`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## Installation

### 1. Install Server Dependencies

```bash
cd server
npm install
```

### 2. Install Client Dependencies

```bash
cd ../client
npm install
```

## Run in Development

### Start Backend API

```bash
cd server
npm run dev
```

Backend starts on `http://localhost:5000`.

### Start Frontend App

```bash
cd client
npm run dev
```

Frontend starts on `http://localhost:5173`.

## API Endpoints

### POST `/api/contact`

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 000-0000",
  "message": "I want to book a consultation."
}
```

Response:

- `201` on success
- `400` for validation errors
- `500` for server errors

### POST `/api/membership`

Request body:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 000-0000",
  "plan": "Quarterly"
}
```

Accepted plans:

- `Monthly`
- `Quarterly`
- `Yearly`

## Production Build

```bash
cd client
npm run build
npm run preview
```

## Notes

- The app uses Framer Motion route transitions and section reveal animations.
- Gallery lightbox supports close, previous, and next navigation.
- Contact and membership forms submit to Express endpoints and are stored in MongoDB.
