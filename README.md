# 🚀 SESD-Workshop-1: Modern CRUD API

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A high-performance, scalable, and type-safe **RESTful API** built during the SESD Workshop. This project demonstrates best practices in backend development using **Object-Oriented Programming (OOP)** principles in TypeScript.

---

## ✨ Key Features

- **🛡️ Type-Safe Development**: Leverages TypeScript for robust code and early error detection.
- **🏗️ Architectural Excellence**: Organized using OOP principles (Controllers, Services, Routes).
- **💾 Database Integration**: Seamless connectivity with **MongoDB** using Mongoose ODM.
- **⚡ Hot Reloading**: Rapid development cycle with `nodemon` and `ts-node`.
- **⚙️ Configurable Environment**: Clean management of secrets and configurations via `.env`.

---

## 🛠️ Tech Stack

| Tool | Purpose |
| :--- | :--- |
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Language** | TypeScript |
| **Database** | MongoDB |
| **ORM/ODM** | Mongoose |
| **Styles** | ESLint & Prettier |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Gautam-Bharadwaj/SESD-Workshop-1.git
cd SESD-Workshop-1
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Setup
Create a `.env` file in the root directory and add your configurations (refer to `.env.example` if available).
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### 4️⃣ Run the Application
**Development Mode:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
npm start
```

---

## 📁 Project Structure
```text
src/
├── controllers/    # Request handlers
├── services/       # Business logic
├── routes/         # API endpoint definitions
├── schema/         # Database models & validation
├── app.ts          # Express app configuration
└── server.ts       # Entry point
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the project.

---

## 👤 Author

**Gautam Bharadwaj**
- GitHub: [@Gautam-Bharadwaj](https://github.com/Gautam-Bharadwaj)

---

> Built with ❤️ for the SESD Workshop.
