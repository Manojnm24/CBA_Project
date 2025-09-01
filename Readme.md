***🍴Food Delivery System***<br>
A full-stack food ordering app with a public storefront (browse menu, cart, checkout UX) and an **Admin Panel** (add/list/remove items). Built with **React (Vite)**, **Node.js/Express**, and **MongoDB (Mongoose)**. Includes **JWT auth**, **cart APIs**, **image upload via Multer**, **dark/light theme toggle**, and **Toast** notifications.

---

## 👥 Contributors
- **Prajwal P Bailkeri**
- **Davis Sebastian**
- **Manoj N M**
- **Dhanya S S**
- **Nikhil A Magaji**

---

## 🛠️ Tech Stack
**Frontend:** React, CSS, JavaScript  
**Backend:** Node.js, Express  
**Database:** PostgreSQL (Neon)  
**Caching/Secondary DB:** Redis  
**Authentication:** Clerk  
**Hosting:** Render (Backend), Vercel/Netlify (Frontend)

---

## 🧩 Features

### Frontend (User App)
- Browse food by category with images, descriptions, rating art, and pricing
- **Cart** with quantity counter, subtotal, and delivery fee UI
- **Context API** state (StoreContext) for cart & menu
- **Light/Dark Theme** via ThemeContext + CSS variables
- **React Router** navigation
- **Toast** notifications (react-toastify)
- Responsive CSS

### Admin Panel
- **Add** food (name, description, category, price, image)
- **List** all foods, remove items
- Toast feedback on API success/failure
- Navbar + Sidebar layout

### Backend API
- **Auth**: register/login with **JWT**, **bcrypt**, **validator**
- **Food**: add/list/remove with **Multer** image uploads
- **Cart**: add/remove/get for authenticated users
- **Static** serving for `/images` (uploaded files)
- **Security**: Helmet + CORS

---


