📘 Library Management System – React Project Documentation
🏢 Project Name
---
Library Management System – React Web Application
---
🎯 Project Objective

This system allows Users to Browse, Borrow & View Books, while Admin can Manage Books & Dashboard — all inside React (No backend required).

⭐ Core Features
---
👨‍💻 Admin Features

Admin Login (Static Authentication)

Add Books to List

Delete Books

Track Borrowed Books Count

Dashboard Analytics

👤 User Features

User Registration & Login (Local Storage)

View All Books

Borrow Books (Limit Validation)

My Borrowed Books Page

Responsive UI

🔐 Admin Credentials (React Static Auth)

Use these to login as Admin:

Email: admin@library.com

Password: admin123

ये values आपके React State / Local Storage में match करवानी होती हैं।
```
📂 React Folder Structure (Final Company Style)
src/
│
├── assets/
│   └── images/           # Banners, Sliders, Book Posters
│
├── components/
│   │
│   ├── Admin/
│   │   ├── Auth/
│   │   │   └── AdminLogin.jsx
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AddBook.jsx
│   │   │   ├── ViewBooks.jsx
│   │   │   └── BorrowedList.jsx
│   │   └── AdminLayout.jsx
│   │
│   ├── Users/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Books.jsx
│   │   │   └── MyBooks.jsx
│   │   └── UserLayout.jsx
│   │
│   ├── common/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   └── App.jsx
│
├── hooks/
│   └── useBook.js        # list[], borrow[], handleBorrow(), handleRemove()
│
├── styles/
│   ├── Home.css
│   ├── Auth.css
│   ├── Admin.css
│   └── Borrow.css
│
└── main.jsx

```

✔ This is company-standard folder structure

✔ All Admin, User View, Auth, Pages separated

✔ Styling separated

✔ Reusable hook for functions

🧪 Test User Credentials (Local Storage)

User Registration page Local Storage में डेटा save करेगा:

Example User:

Email: test@user.com

Password: 123456

User login भी same local storage से check होगा।
```
🛠 Tech Stack (React Only)

Purpose	Tech

UI Library	React.js
Router	react-router-dom
Styling	Bootstrap + CSS
State	useState + useEffect
Storage	Local Storage
UI Icons	react-icons
⚙️ Installation Steps
```
```
Install dependencies

npm install

```
```
Start development server

npm run dev
# React + Vite
```
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
