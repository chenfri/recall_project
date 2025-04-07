# Recall Project

A full-stack TypeScript application for visualizing recall data. This project consists of a Node.js Express backend with a React frontend.

## Project Structure

```
/recall-project
  /server                # TypeScript backend (Express server)
    /src
      /controllers        # Business logic
      /services          # Data services 
      /types             # Type definitions
      app.ts             # Express app setup
      server.ts          # Server entry point

  /client               # React frontend (Vite + TS)
    /src
      /api               # API client functions
      /components        # React components
      /hooks             # Custom React hooks
      /types             # Type definitions
      /utils             # Utility functions
      App.tsx            # Main App component
      main.tsx          # Entry point
```

## Prerequisites

- Node.js (v14 or higher)
- npm 

## Installation

You can install dependencies for both client and server at once, or separately:

### Option 1: Install Everything at Once

From the project root:
```bash
npm run install:all
```

### Option 2: Install Separately

For the server:
```bash
cd server
npm install
```

For the client:
```bash
cd client
npm install
```

## Running the Application

### Development Mode

Option 1: Run both client and server concurrently:
```bash
npm run dev
```

Option 2: Run separately:

Terminal 1 (Server):
```bash
cd server
npm run dev
```

Terminal 2 (Client):
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

### Production Build

Build both client and server:
```bash
npm run build
```

## Features

- Express.js backend with TypeScript
- React frontend with TypeScript and Vite
- Date range filtering for recall data
- Data visualization with Chart.js
- Responsive design

## API Endpoints

- `GET /api/recall` - Get all recall data
- `GET /api/recall?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Get recall data filtered by date range

## Technologies Used

- **Backend**: 
  - Node.js
  - Express
  - TypeScript
  - CSV parsing

- **Frontend**: 
  - React
  - TypeScript
  - Vite
  - Chart.js
  - Axios

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 