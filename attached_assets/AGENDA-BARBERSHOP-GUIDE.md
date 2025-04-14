
# 💈 Agenda Barbershop - Development Guide

This document is a step-by-step checklist for building the frontend of the Agenda Barbershop project using Vue 3 in Replit. It includes what has been done and what needs to be completed.

---

## ✅ Project Overview

The application allows:
- Social login with Google or Meta
- Clients to book appointments
- Barbers to manage their availability and view appointments

---

## 🗂 Project Structure

**Current folders and views:**
- `/views/Login.vue`
- `/views/Home.vue`
- `/views/MisCitas.vue` (Client appointments)
- `/views/PanelBarbero.vue` (Barber dashboard)
- `Navbar.vue`, `App.vue`, `firebase.js`, `router/index.js`

**To be created:**
- [ ] `AgendarCita.vue` – Appointment booking flow
- [ ] `Servicios.vue` – List of services
- [ ] `MiCuenta.vue` – User profile
- [ ] Modal for first-time login (role + phone)

---

## 🔐 Social Login (Firebase Auth)

**Login.vue** implements partial login.

**Steps to complete:**
- [ ] Check if user exists in the backend (by email)
- [ ] If user does not exist:
  - Ask for phone number
  - Ask for user role (client or barber)
  - Create user in the backend
- [ ] If user exists, redirect to corresponding home page

---

## 📅 Client Panel (MisCitas.vue)

**To Do:**
- [ ] Display client's appointments
- [ ] Include date, barber name, service, and status
- [ ] Button to cancel appointment

---

## ✂️ Appointment Booking (AgendarCita.vue)

**To Do:**
- [ ] Step 1: Select a barber
- [ ] Step 2: Select a service
- [ ] Step 3: Load available times for selected service and barber
- [ ] Step 4: Create appointment in backend

---

## 💈 Barber Panel (PanelBarbero.vue)

**To Do:**
- [ ] Show all scheduled appointments for the barber
- [ ] Confirm or cancel appointments

---

## 🕐 Availability Management (Optional)

**To Do:**
- [ ] View and add fixed or variable availability
- [ ] Submit availability to backend
- [ ] Delete availability entries

---

## 🎨 Navigation Bar

**Navbar.vue already exists**

**To Do:**
- [ ] Show different options depending on user role
- [ ] Logout functionality

---

## 🔧 API Integration

- [ ] Store API base URL as an input or constant in your code (not hardcoded with real URLs)
- [ ] Use `fetch` or a library such as `axios` for API requests

---

## 🧪 Route Protection and UX

- [ ] Redirect to login if user is not authenticated
- [ ] Block access to views based on user role
- [ ] Show friendly messages if no data is available (e.g., no appointments)

---

## 🧱 Suggested Component Extras

- [ ] `Loader.vue` – to show loading states
- [ ] `Alert.vue` or toast notifications for feedback
- [ ] `UserForm.vue` – reusable form for phone and role input

---

## 🧭 Suggested Development Path

1. Finish the full login flow with modal input (phone, role)
2. Complete the client dashboard (MisCitas.vue)
3. Build the appointment booking view step by step (AgendarCita.vue)
4. Complete the barber dashboard (PanelBarbero.vue)
5. Add styles and UI feedback
6. Implement validation and route protection
