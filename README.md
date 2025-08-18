🛒 Full-Stack eCommerce Platform

Hi! 👋 I’m Abhay, and this is my Full-Stack eCommerce Platform built using the MERN stack.
I built it to learn how real-world eCommerce systems handle products, authentication, and dashboards for both buyers and sellers.

📌 Features

👤 JWT Authentication – Secure login & signup for buyers and sellers

🛍️ Product Management – Sellers can add, update, and delete products

🛒 Shopping Cart & Checkout – Buyers can add items to cart and place orders

📦 Order Management – Sellers can track orders, buyers can view purchase history

🏪 Seller Dashboard – Manage inventory & sales

🛡 Role-Based Access – Separate views for buyers and sellers

🎨 Responsive UI – Built with Tailwind CSS for a modern, clean design

🛠 Tech Stack

MongoDB – Database for products, users & orders

Express.js – Backend server & API routes

React.js – Frontend user interface

Node.js – Backend runtime environment

JWT (JSON Web Tokens) – Authentication & authorization

Tailwind CSS – Styling for responsive UI

💡 How it Works

Users (buyers/sellers) register & log in with JWT authentication.

Sellers → Add/manage products and track orders via dashboard.

Buyers → Browse products, add to cart, checkout, and track orders.

Database stores all users, products, and transactions securely in MongoDB.

🚀 How to Run Locally
1️⃣ Clone the repo
git clone https://github.com/abhaysingh200/Ecommerce-MERN.git
cd Ecommerce-MERN

2️⃣ Install dependencies
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

3️⃣ Setup environment variables

Create a .env file inside backend/ with:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run the application
# Run backend
cd backend
npm start

# Run frontend (in a new terminal)
cd frontend
npm start


The app will be live at:
👉 Frontend: http://localhost:3000
👉 Backend API: http://localhost:5000
