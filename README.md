# Case Study: Rick and Morty Character Table

This was a time-bound assignment (3–4 hours) for DCI. The task was to build a responsive character table using the Rick and Morty API—with sorting, filtering, pagination, and a clean UI. The goal for me was simple: deliver a solid MVP that feels smooth, looks clean, and shows how I approach building things under pressure.

# Tech Stack

Vite – for fast setup and dev experience
React + TypeScript – for component-based dev with type safety
Tailwind CSS – to move quickly on the UI side
Rick and Morty API – free, structured data source
Vercel – for instant deployment

# What It Does

Fetches character data from the API
Displays info in a responsive, scrollable table
Users can sort by name, status, and species
Search and filter in real-time
Handles pagination through API's next/prev
Fully responsive UI that works across devices

# Challenges & Approach

Sorting & Filtering Logic:
Built dynamic filter/sort functions that could easily scale. Managing local state while keeping UI snappy was key, so I leaned into clean state flows and smart re-renders.

Handling the API Smartly:
The API pagination and filtering needed to sync perfectly. I avoided redundant calls and used the info object (next, prev, count) for better control over requests.

Design on a Clock:
Focused on mobile-first and scrollable layouts. Tailwind made it easier to test and polish spacing, responsiveness, and dark/light compatibility quickly.

TypeScript in Real Time:
Still climbing the TypeScript hill—but this project helped a ton. Got more hands-on with defining API types, props, and improving error handling across components.

# Key Takeaways

Built a full MVP in under 4 hours with real API integration
Improved my handling of UI logic for tables (filters, sorts, pagination)
Gained more confidence using TypeScript in a realistic setup
Used Tailwind CSS to quickly ship a solid, responsive design
Practiced writing clean, component-based logic that’s easy to scale

# Live App & Repo
Live Demo: [character-table.vercel.app](https://character-table.vercel.app/)

# Local Setup Instructions
To set up and run the project locally, follow these steps:

1. Clone the Repository:
[ git clone https://github.com/amoditjha/character-table.git
cd character-table] 

2. Install Dependencies:
[ npm install ]
Ensure you have Node.js installed. Then, install the project dependencies

3. Start the Development Server:
 [npm run dev]


