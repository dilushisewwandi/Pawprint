# 🐾 Pawprint – Pet Adoption and Management Application

An Automated Web Platform for Pet Adoption and Petcare

---

## Table of Contents
- [Description](#description)
- [Key Features (Role-Based Panels)](#key-features-role-based-panels)
- [Postman Collection & API Testing](#postman-collection--api-testing)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage Overview](#usage-overview)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

---

## Description

**Pawprint** is a comprehensive full-stack web application built to connect pet adopters, distributors, daycares, and veterinarians on a centralized platform. It allows users to adopt pets, manage daycare bookings, handle veterinary appointments, and access health records. With role-based access and a modern tech stack, Pawprint offers a responsive and intuitive user experience.

---

## Key Features (Role-Based Panels)

### Admin Panel
- Manage all users: adopters, distributors, veterinarians, daycares
- View, update, and delete pets
- Monitor adoption, vet, and daycare workflows
- Full system control via a centralized dashboard

### Adopter Panel
- Register as an adopter
- View and search pet profiles
- Send adoption requests
- Track request statuses

### Distributor Panel
- Register and manage distributor profile
- Add and update pet details
- View and respond to adoption requests
- Track vet and daycare bookings related to listed pets

### Vet Panel
- Register as a veterinarian
- View and manage appointment requests
- Create and update pet health cards
- Record vaccination and treatment history

### Daycare Panel
- Register daycare center
- Track and manage daycare bookings
- Accept or reject user requests
- Maintain booking schedules

### Authentication
- Role-based login system
- JWT-secured registration and login
- Protected routes based on user roles

---

## Postman Collection & API Testing

The entire backend of the Pawprint application has been tested and validated using a structured Postman collection.

### API Test Coverage:
- **All major modules tested**:
  - Auth
  - Admin
  - Adopter
  - Distributor
  - Vet
  - Daycare
  - Pet
  - Adoption & Bookings
- **Test assertions included**:
  - HTTP status code validation
  - JSON structure and field validation

   ```bash
   git clone https://github.com/dilushisewwandi/Pawprint.git
