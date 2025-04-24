 🚀 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit web app that tracks real-time crypto prices, mimicking a CoinMarketCap-like experience using simulated WebSocket updates.

📸 Demo

![Demo GIF]("C:\Users\NIVEDITA\Videos\Captures\Crypto Tracker - Personal - Microsoft​ Edge 2025-04-24 15-28-41.mp4" )



---

📦 Tech Stack

- **Frontend:** React, Tailwind CSS  
- **State Management:** Redux Toolkit  
- **Simulated Real-Time:** setInterval-based price mutation  
- **Charting:** Static chart images (can upgrade to chart libraries)  
- **Deployment:** GitHub Pages / Vercel / Netlify (optional)  

---

 🧱 Architecture

/crypto-tracker ├── /components │ └── CryptoTable.js ├── /store │ └── cryptoSlice.js ├── App.js ├── index.js ├── tailwind.config.js └── README.md

---

🛠️ Setup Instructions

- git clone https://github.com/niveditatripathi986/crypto-price-tracker.git
- cd crypto-price-tracker

Install dependencies:
- npm install
Start the development server:
- npm start
The app will run at http://localhost:3000
