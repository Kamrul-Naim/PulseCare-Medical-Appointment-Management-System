# PulseCare - Medical Appointment Management System

## 🌐 Live Demo

- **User Website:** https://pulse-care-medical-appointment-mana.vercel.app
- **Admin Dashboard:** https://pulse-care-medical-appointment-mana-pi.vercel.app

**PulseCare** is a full-stack medical appointment management system designed to simplify the process of finding doctors, booking appointments, and managing healthcare services online. The platform provides separate interfaces for **Patients, Doctors, and Admins**, with role-based authentication and functionality tailored to each user type.

Built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**, PulseCare provides an organized and user-friendly experience for patients and healthcare providers. Unlike systems that integrate online payment gateways, PulseCare focuses on the complete appointment management workflow without implementing payment functionality.

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JSON Web Token (JWT)
* **Password Security:** bcryptjs
* **API:** RESTful APIs
* **Development Tool:** Vite

## 🔑 Key Features

### 1. Three-Level Authentication

PulseCare provides separate authentication and dashboards for three types of users:

#### 👤 Patient

* Register and log in securely.
* Browse available doctors.
* Search and filter doctors by specialty.
* View detailed doctor profiles.
* Book appointments by selecting available dates and time slots.
* View upcoming and previous appointments.
* Cancel appointments.
* Update personal profile information.
* Upload and update profile picture.
* Logout securely.

#### 🩺 Doctor

* Secure doctor login.
* View a personalized dashboard.
* View total appointments and patients.
* View appointment details.
* Manage appointment status.
* Mark appointments as completed.
* Cancel appointments.
* Update doctor profile information.
* Update consultation fees, address, description, and other details.
* Toggle doctor availability.

#### 🛠️ Admin

* Secure admin authentication.
* View overall system statistics.
* Manage doctor profiles.
* Add new doctors.
* View all registered doctors.
* Update doctor information.
* Delete doctor profiles.
* View and manage all appointments.
* Cancel appointments.
* Mark appointments as completed.
* Monitor recent bookings and system activity.

## 🏠 Home Page

The home page provides an accessible starting point for patients and includes:

* Search functionality for finding doctors.
* Doctor specialty categories.
* Top doctors section.
* Quick navigation to important sections.
* Call-to-action sections for booking appointments.
* Responsive design for different screen sizes.

The footer provides navigation links to pages such as:

* Home
* About Us
* Contact Us
* Privacy Policy

## 🩺 All Doctors Page

The **All Doctors** page displays the available doctors registered in the system.

Users can:

* Browse all available doctors.
* Filter doctors based on specialty.
* View doctor information.
* Select a doctor to view their detailed profile.
* Proceed to the appointment booking page.

## 📄 About Page

The **About** page provides information about PulseCare and its purpose.

It highlights the platform's focus on:

* **Efficiency:** Simplifying the doctor appointment process.
* **Convenience:** Allowing patients to book appointments online.
* **Accessibility:** Making doctor information and availability easier to access.
* **Personalization:** Providing dedicated experiences for patients, doctors, and administrators.

## 📞 Contact Page

The **Contact** page provides users with relevant contact information and allows them to learn more about the organization.

It includes:

* Contact information.
* Office information.
* Navigation links.
* Additional sections for users who want to get in touch.

## 📅 Doctor Appointment Page

The Doctor Appointment page displays detailed information about the selected doctor.

Users can view:

* Doctor profile picture.
* Doctor's name.
* Specialty.
* Qualification.
* Years of experience.
* Consultation fees.
* Address.
* Doctor's description.
* Availability status.
* Available appointment dates.
* Available time slots.

Patients can select an available date and time slot to book an appointment.

> **Note:** PulseCare does not currently include online payment gateway integration. Appointment booking is handled without Stripe, Razorpay, or other online payment services.

## 👤 User Profile

After logging in, patients can access their profile and manage their personal information.

Features include:

* View profile information.
* Edit name.
* Edit email.
* Update address.
* Update gender.
* Update date of birth.
* Upload profile picture.
* View upcoming appointments.
* View previous appointments.
* Cancel appointments.
* Logout.

## 🗄️ Admin Panel

The admin panel provides administrators with complete control over doctors and appointments.

### 📊 Dashboard

The dashboard displays important statistics such as:

* Total number of doctors.
* Total number of appointments.
* Total number of patients.
* Latest bookings.

### ➕ Add Doctor

Admins can add new doctors by providing information such as:

* Doctor image.
* Name.
* Email.
* Password.
* Specialty.
* Degree.
* Experience.
* Address.
* Consultation fees.
* Description.

### 👨‍⚕️ Doctor List

Admins can:

* View all doctors.
* View doctor information.
* Manage doctor profiles.
* Delete doctors.

### 📋 Appointments

Admins can view and manage all appointments, including:

* Patient name.
* Patient information.
* Doctor name.
* Appointment date.
* Appointment time.
* Consultation fees.
* Appointment status.

Available admin actions include:

* Cancel appointment.
* Mark appointment as completed.

## 🩺 Doctor Dashboard

Doctors have access to a dedicated dashboard for managing their appointments and profile.

### 📊 Dashboard Overview

The dashboard provides an overview of:

* Total appointments.
* Total patients.
* Earnings information.
* Recent appointment bookings.

### 📋 Appointment Management

Doctors can:

* View patient appointments.
* View patient information.
* View appointment date and time.
* Check appointment status.
* Mark appointments as completed.
* Cancel appointments.

### 👤 Profile Management

Doctors can update:

* Profile image.
* Description.
* Consultation fees.
* Address.
* Availability status.
* Other professional information.

## 🔐 Authentication & Security

PulseCare uses authentication and security mechanisms to protect user accounts and APIs.

* **JWT-based authentication** for protected routes.
* **bcryptjs** for password hashing.
* Role-based access for Patients, Doctors, and Admins.
* Protected backend API endpoints.
* Environment variables for sensitive configuration.
* CORS configuration for frontend-backend communication.

## 🌐 Project Setup

Follow the steps below to run PulseCare locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Kamrul-Naim/PulseCare-Medical-Appointment-Management-System.git
cd PulseCare-Medical-Appointment-Management-System
```

### 2. Install Dependencies

If the project contains separate frontend, admin, and backend applications:

```bash
cd frontend
npm install

cd ../admin
npm install

cd ../backend
npm install
```

### 3. Configure Environment Variables

Create `.env` files according to the requirements of each application.

For example, the backend may contain:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

The frontend may contain:

```env
VITE_BACKEND_URL=your_backend_url
VITE_CURRENCY=your_currency
```

The admin panel may contain:

```env
VITE_BACKEND_URL=your_backend_url
```

> **Important:** Never commit `.env` files or other files containing sensitive credentials to GitHub. Add them to `.gitignore`.

### 4. Run the Backend

```bash
cd backend
npm run dev
```

### 5. Run the Frontend

Open a new terminal:

```bash
cd frontend
npm run dev
```

### 6. Run the Admin Panel

Open another terminal:

```bash
cd admin
npm run dev
```

The frontend, admin panel, and backend can run independently during development.

## 📦 Folder Structure

```text
PulseCare-Medical-Appointment-Management-System/
│
├── frontend/                  # Patient-facing React application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── admin/                     # Admin dashboard React application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/                   # Node.js + Express backend
│   ├── config/                # Database and configuration
│   ├── controllers/           # Request controllers
│   ├── middleware/            # Authentication and middleware
│   ├── models/                # MongoDB/Mongoose models
│   ├── routes/                # API routes
│   ├── uploads/               # Uploaded files
│   ├── server.js              # Backend entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

> The exact folder structure may vary depending on the current project implementation.

## 🔄 Appointment Workflow

The basic appointment workflow is:

```text
Patient
   │
   ▼
Browse Doctors
   │
   ▼
Select Doctor
   │
   ▼
Choose Date & Time
   │
   ▼
Book Appointment
   │
   ▼
Appointment Created
   │
   ▼
Doctor/Admin Manages Appointment
   │
   ├──► Completed
   │
   └──► Cancelled
```

## 🚫 Payment Integration

PulseCare currently **does not implement online payment functionality**.

Unlike systems that use payment gateways such as Stripe or Razorpay, this project focuses on:

* Doctor discovery.
* Appointment scheduling.
* Appointment management.
* Patient profile management.
* Doctor profile management.
* Admin management.
* Appointment status tracking.

Payment gateway integration can be added as a future enhancement.

## 🚀 Future Improvements

Potential future improvements include:

* Online payment integration using Stripe or sslcommerz.
* Email/SMS appointment notifications.
* Doctor and patient reviews.
* Prescription management.
* Medical history management.
* Appointment reminders.
* Advanced analytics for administrators.
* Video consultation functionality.
* Improved search and filtering.
* Cloud-based image storage.
* Deployment with production-grade infrastructure.

## 🤝 Contributing

Contributions are welcome!

If you would like to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push the branch to GitHub.
6. Open a Pull Request.

## 🌟 Acknowledgements

This project was built using the following technologies and tools:

* MongoDB
* Express.js
* React.js
* Node.js
* Tailwind CSS
* Vite
* JWT
* Mongoose

---

**PulseCare - Making Doctor Appointment Management Simpler and More Accessible.**

