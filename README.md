📊 Excel Analytics Platform
A powerful MERN stack-based web application that allows users to upload Excel files, analyze and visualize the data through interactive dashboards, and gain insights using rich charts and graphs.

🔥 Features
✅ User Authentication: Secure sign-up/login using JWT tokens.

📁 Excel Upload: Upload .xlsx or .csv files with drag-and-drop support.

📊 Dynamic Visualizations: Generate real-time charts (Bar, Pie, Line, etc.) using Chart.js/Recharts.

📂 Data Table View: Paginated and filterable Excel data table.

🧠 Analytics Dashboard: Summarized insights like total, average, count, etc.

📈 Multi-sheet Support: Analyze different sheets in a single Excel file.

🌓 Dark Mode: Toggle between light and dark themes.

🧭 User-Friendly UI: Clean and responsive UI built with TailwindCSS and shadcn/ui.

🚀 Deployed Version: Hosted on Render/Vercel (URLs listed below).

🛠️ Tech Stack
Frontend:

React.js + Vite

TailwindCSS + ShadCN UI

Zustand (for state management)

Axios for API calls

Recharts/Chart.js for visualization

Backend:

Node.js + Express.js

MongoDB + Mongoose

JWT for authentication

Multer (for file upload)

xlsx (for Excel parsing)

Deployment:

Frontend: Vercel

Backend: Render

MongoDB: MongoDB Atlas

🧪 Local Setup
📦 Prerequisites
Node.js (v18+)

MongoDB Atlas URI

Vite CLI or npm

🚀 Steps to Run Locally
1. Clone the repository:
bash
Copy code
git clone https://github.com/your-username/excel-analytics-platform.git
cd excel-analytics-platform
2. Set up the Backend
bash
Copy code
cd backend
npm install
# Add .env file with the following:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_secret_key
npm run dev
3. Set up the Frontend
bash
Copy code
cd ../frontend
npm install
npm run dev
4. Open in Browser
Visit http://localhost:5173

🔐 Environment Variables
Backend .env
env
Copy code
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
📸 Screenshots
(Add screenshots or screen recordings showing upload, charts, dashboards, and login page)

✨ Future Enhancements
PDF/PNG export of dashboards

Google Sheets integration

Role-based access (Admin/User)

AI-based insight suggestions (mean/median outliers, etc.)

🤝 Contributing
Contributions are welcome! Fork the repo, make your changes, and open a pull request.

📬 Contact
🔗 GitHub: abhisrivastav8604

📧 Email: abhisrivastav879@gmail.com
