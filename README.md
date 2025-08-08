# 🐾 Pawprint – Pet Adoption and Management Application

An Automated Web Platform for Pet Adoption and Petcare

---

## 📚 Table of Contents
- [📌 Description](#description)
- [🔑 Key Features (Role-Based Panels)](#key-features-role-based-panels)
- [🧪 Postman Collection & API Testing](#postman-collection--api-testing)
- [🛠️ Technologies Used](#technologies-used)
- [🚀 Installation](#installation)
- [👩‍💻 Usage](#usage-overview)
- [📈 Future Enhancements](#future-enhancements)
- [📬 Contact](#contact)

---

## 📌 Description

**Pawprint** is a comprehensive full-stack web application built to connect pet adopters, distributors, daycares, and veterinarians on a centralized platform. It allows users to adopt pets, manage daycare bookings, handle veterinary appointments, and access health records. With role-based access and a modern tech stack, Pawprint offers a responsive and intuitive user experience.

---

## 🔑 Key Features (Role-Based Panels)

### 🛠️ Admin Panel
- View, update, and manage all user types: **adopters**, **distributors**, **veterinarians**, **daycares**, and **pets**
- Full system control through centralized access

### 🐾 Adopter Panel
- Register as an adopter
- Browse available pets
- Send adoption requests and track request status

### 📦 Distributor Panel
- Register and manage distributor profile
- Add new pets for adoption
- Track adoption requests from adopters
- Book daycare and vet services
- Monitor pet-related vet and daycare bookings

### 👨‍⚕️ Vet Panel
- Create and manage vet profiles
- View and respond to appointment requests
- Manage pet health cards and vaccination records

### 🏠 Daycare Panel
- Manage daycare center profile
- Track and respond to incoming daycare bookings
- Accept or reject service requests

### 🔐 Secure Authentication
- JWT-based secure login and registration
- Role-based route protection for sensitive areas

---

## 🧪 Postman Collection & API Testing

Comprehensive API testing was done using **Postman**, with complete coverage of all backend endpoints.

### 🔍 API Test Coverage
- **All Modules Covered**: Auth, Admin, Adopter, Vet, Pet, Distributor, Daycare, Adoption & Bookings
- **Folder-wise Structured Collection** for better clarity and organization
- **Test Assertions Included**:
  - Status code validation
  - JSON response structure checks
  - Field-level validation
  - Flow testing (e.g., approve/reject adoption & booking requests)

### 📂 Collection Location
- Postman collection is available in:  
  `postman-tests/Pawprint_API_Test_Collection.json`

---

## 🛠️ Technologies Used

| Layer        | Tech Stack              |
|--------------|--------------------------|
| Frontend     | React, JavaScript, CSS   |
| Backend      | Node.js, Express.js      |
| Database     | MySQL                    |
| Auth         | JSON Web Tokens (JWT)    |
| API Testing  | Postman                  |
| Env Config   | `.env` file              |

---

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dilushisewwandi/Pawprint.git
