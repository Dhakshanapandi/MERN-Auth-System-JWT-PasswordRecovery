# MERN Authentication System with JWT, Password Recovery, and Protected Routes

**Description:**

This repository hosts a full-stack web application built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. The project emphasizes a secure and user-friendly authentication system, featuring user registration, JWT-based login, password recovery via email, and protection of authenticated routes.

**Key Technologies and Libraries:**

- **MERN Stack:**
  - MongoDB: NoSQL database for user data storage.
  - Express.js: Backend framework for server-side logic and routing.
  - React.js: Frontend library for dynamic user interfaces.
  - Node.js: JavaScript runtime for server-side execution.

- **Authentication and Security:**
  - JSON Web Tokens (JWT): Ensures secure user authentication and authorization.
  - Bcrypt: Implements a secure password hashing algorithm.
  - Cookies: Used for session management and secure JWT storage.

- **Password Recovery:**
  - Nodemailer: Facilitates password recovery emails to users.
  - Axios: Manages HTTP requests for seamless frontend-backend communication.

**Key Features:**

1. **User Registration:**
   - Unique username and secure password registration.

2. **JWT-based Login:**
   - Secure login using JWT for token-based authentication.

3. **Password Recovery:**
   - Forgot password functionality with email-based recovery.
   - Users receive a password reset link via email.

4. **Protected Routes:**
   - Routes accessible only to authenticated users.
   - Unauthorized users redirected to the login page.

**How to Run the Project:**
1. Clone the repository.
2. Set up MongoDB, update the connection string in .env.
3. Install dependencies for frontend and backend using cmd npm install.
4. Start backend server with Node.js - $ npm start.
5. Start frontend application using React @ npm run dev.
6. Access the application in your web browser.

**Contributions:**
Contributions are welcome! Fork the repository, make improvements, and submit pull requests.



**Author:**
Dhakshanapandi
