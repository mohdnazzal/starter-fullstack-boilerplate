# Starter Full Stack Boilerplate

This repository is a beginner-friendly full stack boilerplate/template using **ReactJS**, **CSS**, **Bootstrap**, and **HTML** on the frontend, and **NodeJS** with **ExpressJS** on the backend. Both the frontend and backend are linked together.

The purpose of this boilerplate is for learners who are new to full stack development. It is designed to help understand how a React frontend communicates with a Node/Express backend. There is nothing special about it—just a simple learner boilerplate.

To make it work, **both the frontend and backend servers need to be running simultaneously**.

---

## Technologies Used

### Frontend Libraries

- **Redux**: For state management.
- **React Router DOM**: For routing between different pages.
- **Axios**: For making HTTP requests.
- **React DOM**: For rendering React components.
- **React Helmet**: For managing changes to the document head (e.g., meta tags).

### Backend Libraries

- **Serve-favicon**: Middleware to serve a favicon.
- **ExpressJS**: Web framework for NodeJS.

---

## Folder Structure

### Frontend (`client`)

```plaintext
client/
│
├── node_modules/         # Installed npm packages
├── public/
│   ├── favicon.ico       # Favicon file
│
├── src/
│   ├── assets/           # Static assets like images, stylesheets
│   ├── components/       # Reusable React components
│   ├── common/
│   │   └── technology.jsx# Shared logic for technology component
│   ├── layout/
│   │   ├── index.js      # Main layout logic
│   │   └── layout.jsx    # Layout JSX for consistent page structure
│   ├── pages/            
│   │   ├── About.jsx     # About page component
│   │   └── MainPage.jsx  # Main landing page component
│   ├── routes/
│   │   ├── Routing.jsx   # Routing logic for navigation
│   │   ├── App.jsx       # Main app file with routes and app logic
│   │   └── main.jsx      # Root file for rendering the app
│
├── .gitignore            # Git ignore file to prevent unwanted files from being pushed
├── eslint.config.js      # ESLint configuration for code quality
├── index.html            # Main HTML file that gets served by the client
├── package-lock.json     # Lock file for npm dependencies
├── package.json          # Dependencies and scripts for the frontend
├── README.md             # Documentation file (this one!)
├── vite.config.js        # Vite configuration for fast builds and hot reloads


server/
│
├── node_modules/             # Installed npm packages
├── public/
│   ├── favicon.ico           # Favicon served by the backend
│
├── src/
│   ├── data/
│   │   └── technologies.js   # Data source for technologies API
│   ├── routes/
│   │   └── technologies.js   # API routes for technologies
│
├── package-lock.json         # Lock file for npm dependencies
├── package.json              # Dependencies and scripts for the backend
├── server.js                 # Main backend server file with ExpressJS setup



##Make sure both servers are running for the full stack application to work.

##Note for Users
###This is a simple learner boilerplate to help beginners get started with full stack development. Both the frontend and backend must be running simultaneously to see the application working properly.

Happy coding!
