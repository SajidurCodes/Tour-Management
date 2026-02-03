# 🧳 Tour Management System

A scalable, secure, and production-ready **Tour Management System** that allows users to browse and book tours across Bangladesh, make online payments via **SSLCommerz**, and enables admins to manage tours, users, bookings, guides, and payments using **role-based access control (RBAC)**.

---

## 🚀 Features

### 👤 User Features
- User registration with Email / Google
- OTP-based account verification
- Secure login with JWT (access & refresh tokens)
- Browse, search, and filter tours
- View detailed tour information
- Book tours with selected dates
- Online payment via SSLCommerz
- View booking history and payment status
- Manage user profile

### 🛠️ Admin Features
- Manage users (activate, deactivate, verify)
- Create, update, delete tours
- Manage tour types and divisions
- Approve and manage tour guides
- View and update booking statuses
- Monitor payments and system statistics

---

## 🧱 Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)

**Payment**
- SSLCommerz Payment Gateway

**Frontend**
- React

**Deployment**
- Vercel 
- Firebase

---

## 🏗️ System Architecture

- Modular MVC-based backend
- Stateless REST APIs
- JWT-based authentication
- Role-Based Access Control (RBAC)

---

## 📊 Entity Relationship Diagram (ERD)

![Tour Management ERD](./Tour%20Management%20ERD.drawio.png)

---

## 🗂️ Core Entities

### User
- name
- email (unique)
- password
- role (Admin, User, Guide)
- phone
- address
- isActive
- isVerified
- authProviders

### Tour
- slug (unique)
- title
- description
- images
- location
- costFrom
- startDate
- endDate
- tourType
- included
- excluded
- amenities
- tourPlan

### Booking
- user
- tour
- guestCount
- phone
- address
- status (PENDING, CONFIRMED, CANCELLED)
- payment

### Payment
- booking
- transactionId
- status (PAID, UNPAID, REFUNDED)
- amount
- paymentGatewayData
- invoiceUrl

---

## 🔐 Authentication & Security

- JWT access & refresh tokens
- OTP verification using Redis
- Password hashing with bcrypt
- Role-based route protection
- Secure HTTPS payment processing
- Rate limiting on auth & OTP APIs

---


