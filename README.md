# IDEA Dashboard Refactor

This project is part of a technical assessment for the FAO IDEA Software Developer position (Frontend – React).
The goal was to refactor an existing `Dashboard` component to improve code quality, maintainability, and performance, while following best practices in modern React development.

---

## Objectives

The task involved:
- Cleaning up an unstructured React component
- Introducing state management through React Query
- Reducing unnecessary re-renders with memoization
- Encapsulating API logic into reusable modules
- Adding basic error handling and mocking data locally for testing

---

## Tech Stack

- **React** (with Vite)
- **@tanstack/react-query v5** – for data fetching and caching
- **JavaScript (ES6+)**
- Mock APIs using local simulation (`setTimeout`, random error generation)

---

## How to Run

1. Install dependencies  
   ```bash
   npm install
2. Start the development server
    ```bash
    npm run dev
3. Open your browser and go to
    ```bash
    http://localhost:5173
You should see mock users and projects loaded after a short delay.

## Notes
No backend is required — the API calls are simulated using static data and delay.

I used React Query’s object-based syntax (queryKey, queryFn) to be compatible with version 5.

The goal here was not just to "make it work," but to structure the project in a way that would be easy for a team to pick up, understand, and extend.

## Author
Andrea Giovanni Perozziello

[github.com/peroza](https://github.com/peroza)