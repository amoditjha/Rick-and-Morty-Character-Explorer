# Case Study: Rick and Morty Character Table

This project was a time-bound assignment (3–4 hours) for DCI. The task was to build a responsive character table using the Rick and Morty API, featuring sorting, filtering, pagination, and a clean UI. The goal was to deliver a solid MVP that feels smooth, looks clean, and demonstrates my approach to building under pressure.

---

## Tech Stack

- **Vite**: For fast setup and development experience.
- **React + TypeScript**: For component-based development with type safety.
- **Tailwind CSS**: To quickly design and implement the UI.
- **Rick and Morty API**: A free, structured data source.
- **Vercel**: For instant deployment.

---

## Features

- Fetches character data from the Rick and Morty API.
- Displays information in a responsive, scrollable table.
- Allows users to:
    - Sort by name.
    - Search and filter in real-time.
- Handles pagination using the API's `next` and `prev` endpoints.
- Fully responsive UI that works seamlessly across devices.

---

## Challenges & Approach

### Sorting & Filtering Logic
- Built dynamic filter and sort functions that are scalable.
- Managed local state efficiently to ensure a snappy UI.
- Focused on clean state flows and optimized re-renders.

### API Handling
- Synchronized API pagination and filtering to avoid redundant calls.
- Leveraged the API's `info` object (e.g., `next`, `prev`, `count`) for better request control.

### Design Under Time Constraints
- Adopted a mobile-first approach with scrollable layouts.
- Used Tailwind CSS to quickly test and refine spacing, responsiveness, and dark/light mode compatibility.

### TypeScript Integration
- Improved my understanding of TypeScript by defining API types, props, and enhancing error handling.
- Gained hands-on experience in a real-world project setup.

---

## Key Takeaways

- Delivered a full MVP with real API integration in under 4 hours.
- Enhanced my skills in handling UI logic for tables (filters, sorts, pagination).
- Gained confidence in using TypeScript effectively.
- Leveraged Tailwind CSS to ship a responsive and polished design quickly.
- Practiced writing clean, scalable, and component-based logic.

---

## Live App & Repository

- **Live Demo**: [character-table.vercel.app](https://character-table.vercel.app/)
- **GitHub Repository**: [amoditjha/character-table](https://github.com/amoditjha/character-table)

---

## Local Setup Instructions

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:
     ```bash
     git clone https://github.com/amoditjha/character-table.git
     cd character-table
     ```

2. **Install Dependencies**:
     ```bash
     npm install
     ```
     Ensure you have Node.js installed before running this command.

3. **Start the Development Server**:
     ```bash
     npm run dev
     ```

---

Feel free to explore the codebase and provide feedback!
