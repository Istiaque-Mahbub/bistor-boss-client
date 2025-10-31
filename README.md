# 🍽️ Restaurant Online Platform

An online food ordering web application where users can browse menus, order food, and make secure payments using **Stripe**.  
The app uses **Firebase Authentication** for login/signup and **Firebase Hosting** for deployment.

---

## 🚀 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React (Vite) |
| Authentication | Firebase Auth |
| Hosting | Firebase Hosting |
| Payments | Stripe |
| State Management | Redux Toolkit / Zustand (optional) |
| Styling | Tailwind CSS / ShadCN / Custom CSS |
| API / Backend | Node.js + Express (optional, for advanced features) |

---

## ✨ Features

### 👨‍🍳 User Features
- 🔐 Firebase authentication (Google / Email login)
- 🍕 Browse available restaurant menus
- 🛒 Add items to cart
- 💳 Pay securely with Stripe Checkout
- 📦 View order status & history
- 🧾 Get payment confirmation

### 🛠️ Admin Features
- ➕ Add / Update / Remove menu items
- 📊 View all orders & manage statuses
- 💰 Track revenue via Stripe Dashboard
- 🧑‍💼 Manage users (optional)

---

## ⚙️ Project Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Istiaque-Mahbub/bistor-boss-client
cd bistor-boss-client
```
### Setup Firebase

Go to Firebase Console

Create a new project

Enable:

Authentication → Sign-in method → Email/Password + Google


Hosting

Copy your Firebase config and create a .env file in your project root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

```
// src/firebase/config.js
import { initializeApp } from "firebase/app";
const firebaseConfig = { /* your config here */ };
export const app = initializeApp(firebaseConfig);


### Setup Stripe

Create a Stripe account

Get your Publishable Key and Secret Key

Add them to .env:

### Backend Repo: https://github.com/Istiaque-Mahbub/bistro-boss-client

### Live  Link: https://bistro-boss-38128.web.app
