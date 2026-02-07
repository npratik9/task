# Full-Stack JWT Authentication System

---

## 📂 Project Structure

This repository is divided into two main sections:
- **`backend/`**: Express.js server (managed with **pnpm**)
- **`frontend/`**: React application (managed with **npm**)

---

##  Installation & Setup

To get this project running on your local machine, follow these steps:

### 1. Clone the Repository
git clone git@github.com:npratik9/task.git

### 2. Navigate to backend
cd backend 

### 3. Install Dpendencies
pnpm install

### 4. Configure environment file(.env)
create a .env file in root directory of backend folder(i.e where index.js file is located) and copy the content of .env.example

### 5. Run the server
pnpm run dev

### 6. Navigate back to frontend
cd frontend

### 7. Install dependencies
npm install

### 8. Start react app
npm run dev


---
## This project includes
- JWT token for authentication
- Dashboard only accessed by logged in users
- Token stored in local storage
- Logout after token expiration 
