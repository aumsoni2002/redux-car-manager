# Car Manager 🚗💼

A streamlined, responsive, and fully functional Car Management application built in just 2 hours! This project leverages **React** and **Redux Toolkit** to provide a robust state management solution, allowing users to add, search, list, and remove cars. Ideal for demonstrating my skills in Redux and React, and my ability to create a full application with clean architecture in a short amount of time.

---

## Project Overview

This project was created to practice and enhance my proficiency with Redux Toolkit. The application demonstrates essential CRUD operations with a seamless state management approach.

---

## Features

- **Add Car**: Input a car name and its cost, then add it to the list with a simple form submission.
- **Search Filter**: Filter through your car list by name, enabling quick access to specific entries.
- **Remove Car**: Delete any car from the list with ease.
- **Total Cost Calculation**: Displays the total cost of all listed cars, updating dynamically with the list changes.

---

## Technologies Used

- **React**: For building UI components and managing component-level state.
- **Redux Toolkit**: For efficient and scalable global state management.
- **Redux Slice API**: To create `carsSlice` and `formSlice` with reducer logic to handle car data and form input.
- **CSS (Bulma)**: Bulma is used for a quick and responsive layout.

---

## Folder Structure

```plaintext
.
├── components
│   ├── CarForm.js        # Form component for adding new cars
│   ├── CarList.js        # Lists all added cars with delete functionality
│   ├── CarSearch.js      # Search bar to filter cars by name
│   └── CarValue.js       # Displays the total cost of listed cars
├── store
│   ├── index.js          # Redux store configuration
│   ├── slices
│   │   ├── carsSlice.js  # Slice to manage cars data
│   │   └── formSlice.js  # Slice to manage form input
├── App.js                # Main application component
└── index.js              # Entry point to the app
```
