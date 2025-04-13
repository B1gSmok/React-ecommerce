# 🛒 React E-Commerce Website

A full-stack e-commerce web application built using **React**, **Vite**, and **Tailwind CSS**. This project demonstrates modern frontend development practices and UI design principles.

## 🚀 Features

- 🔍 Dynamic product listings
- 🛒 Add to cart & quantity update
- 📦 Checkout with address and payment input
- 🗺️ Map-based shipping location using Leaflet
- 💻 Responsive UI for desktop and mobile

## 🔧 Tech Stack

- React
- Vite
- Tailwind CSS
- Leaflet (for maps)
- React Router
- Context API or Redux (if you're using one)

## 📸 Screenshots
🛍️ Home Page

Landing page showcasing featured products, a sleek navbar, and intuitive navigation.

![image](https://github.com/user-attachments/assets/305e80b6-f37e-45ed-b698-740ec19623da)

🔍 Product Listings

Displays available products with filters and category-based sorting.

![image](https://github.com/user-attachments/assets/c5622852-de76-4c7a-a57a-15442b1cf2a1)

![image](https://github.com/user-attachments/assets/fec52688-74cd-4adb-a963-e2c909e07ab6)

🛒 Cart Page

Overview of selected items, quantity management, and total price calculation.
![image](https://github.com/user-attachments/assets/ce456602-6cf5-44f8-ba74-aca46b98d1c6)

🧾 Checkout Page

Final step where users provide their address, choose a payment method, and confirm the order.
![image](https://github.com/user-attachments/assets/d9c6cc8d-4234-4c33-9651-1b78dbdb6e4b)
📍 Map-Based Location Picker

Users can pin their exact location using an interactive map for accurate delivery.

![image](https://github.com/user-attachments/assets/25d06e3e-cd48-45fc-8c0e-dbc0643f52b4)

👤 Profile Page

Users can view and manage their personal details including name, email, and address. This page also allows updates to profile information, enhancing user experience and personalization.

![image](https://github.com/user-attachments/assets/bdc19b67-68d7-4c30-85fc-c2bf9863d156)

📝 Sign Up Page

New users can create an account by providing their name, email, and password. Form includes validation and error handling.
![image](https://github.com/user-attachments/assets/79a2c606-51e7-4dbe-97f2-a78ade5ca5cb)
🔑 Sign In Page

Existing users can securely log in using their credentials. Includes “Forgot Password” link and validation feedback.

![image](https://github.com/user-attachments/assets/b81ca66f-3321-4908-b407-fe007b39ef4f)
📧 Email Verification Page

After registration, users are prompted to verify their email address to activate their account. This ensures security and prevents fake sign-ups.
![image](https://github.com/user-attachments/assets/e39156e0-78f5-4246-a228-8816dd615641)



## 📁 Folder Structure
Online-Store
├── node_modules
├── public
├── src
│   ├── assets
│   ├── Features
│   │   ├── Auth
│   │   ├── CatagoryPopup
│   │   ├── Categories
│   │   ├── CategoryFilter
│   │   ├── Footer
│   │   ├── NavBar
│   │   ├── PreviousOrders
│   │   ├── ProductList
│   │   └── ProductView
│   ├── Pages
│   │   ├── Auth
│   │   │   ├── SignInPage.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   └── Verify.jsx
│   │   ├── Payments
│   │   │   └── CheakOutPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── PreviousOrdersPage.jsx
│   │   ├── PrevOderViewPage.jsx
│   │   ├── ProductViewPage.jsx
│   │   └── ProfilePage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js


