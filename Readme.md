# Health Information System

A simple Full Stack Health Information System where you can register clients, create programs, and enroll clients into programs.

## Demo

- [Demo Video Link](https://drive.google.com/file/d/1SQ7Nt-n9jK0jDEPr8P6dErS34XfdBSJr/view)
- [Presentation Link](https://docs.google.com/presentation/d/1wjmkO_MHRMUBm-E_d21G3djqR_pIw_wy/edit?usp=drive_web&ouid=109325451512619244936&rtpof=true)

---

## Features

- Register a new client
- Create a new program
- Enroll a client in a program
- View a client's profile including their enrolled programs
- RESTful API backend built with Express and Knex.js
- Frontend built with React (using inline CSS)

---

## Technologies Used

- Node.js
- Express.js
- Knex.js
- SQLite3
- React.js
- Vite (React setup)
- Inline CSS Styling

---

## Setup Instructions

### Backend (Server)

1.  Navigate to the server folder:
    ```bash
    cd health-info-backend
    ```
2.  Install dependencies:

    ```bash
    npm install

    ```

3.  Create a .env file:

    ```ini
    PORT=4000
    ```

4.  Run database migrations:

    ```bash
    npx knex migrate:latest
    ```

5.  Start the backend server:

        npm run dev

The server will run on http://localhost:4000.

### Frontend (Client)

#### Navigate to the frontend folder:

    cd health-info-frontend

#### Install dependencies:

    npm install

#### Start the frontend application:

    npm run dev

The app will run typically on http://localhost:5173.

### Project Structure

```pgsql
server/
├── migrations/
│   ├── create_clients_table.js
│   ├── create_programs_table.js
│   └── create_enrollments_table.js
├── index.js
├── knexfile.js
├── .env

client/
├── src/
│   ├── components/
│   │   ├── RegisterClient.jsx
│   │   ├── CreateProgram.jsx
│   │   ├── EnrollClient.jsx
│   │   └── ViewClientProfile.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
```

### Notes

- Make sure the backend server (http://localhost:4000) is running before interacting with the frontend.

- Ensure CORS is properly set up (already handled in the server setup).

- Use environment variables carefully and do not expose sensitive information.

- Both frontend and backend must be running for full functionality.
