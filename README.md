# 🎮 Ludo King - Multiplayer Game

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

A modern, real-time multiplayer Ludo game built with the MERN stack (MongoDB, Express.js, React, Node.js). Play Ludo with your friends online with a beautiful, responsive UI and smooth gameplay experience.

## 🚀 Features

- 🔄 Real-time multiplayer gameplay
- 👥 Player vs Player (PvP) mode
- 🎨 Responsive design for all devices
- 🔒 User authentication and profiles
- 💬 In-game chat
- 🏆 Game history and statistics
- 🎲 Fair dice rolling system
- 🎉 Interactive game board with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **Vite** - Next Generation Frontend Tooling
- **React Context API** - For state management
- **Socket.IO Client** - For real-time communication
- **Tailwind CSS** - For styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.IO** - Real-time bidirectional event-based communication
- **JWT** - For authentication

## 📦 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or yarn
- MongoDB Atlas account or local MongoDB instance

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/Ludo-king-.git
cd Ludo-king-
```

### Backend Setup

1. Navigate to the backend directory and install dependencies:
   ```bash
   cd Backend
   npm install
   ```

2. Create a `.env` file in the Backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../Frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 🎮 How to Play

1. **Start a New Game**: Create a new game room and share the room code with friends.
2. **Join a Game**: Enter a room code to join an existing game.
3. **Game Rules**:
   - Each player gets 4 tokens of the same color.
   - Roll the dice to move your tokens.
   - Get a 6 to release a token from the home area.
   - Move tokens around the board to reach the home column.
   - The first player to get all tokens home wins!

## 📂 Project Structure

```
Ludo-king-/
├── Backend/               # Backend server code
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── socket/       # Socket.io event handlers
│   │   └── index.js      # Server entry point
│   └── package.json
│
└── Frontend/             # Frontend React application
    ├── public/           # Static files
    └── src/
        ├── assets/       # Images, fonts, etc.
        ├── components/   # Reusable UI components
        ├── context/      # React context providers
        ├── hooks/        # Custom React hooks
        ├── pages/        # Page components
        ├── services/     # API services
        ├── styles/       # Global styles
        ├── utils/        # Utility functions
        ├── App.jsx       # Main App component
        └── main.jsx      # Application entry point
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the classic Ludo board game
- Built with the MERN stack
- Special thanks to all contributors

## 📧 Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com)
