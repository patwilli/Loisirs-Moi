
## Setup Instructions for Loisirs & Moi

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend/
   ```

2. Install Node.js dependencies:
   ```bash
    npm install
   ```

3. Ensure Docker is installed. Then, start the Docker containers:
   ```bash
   docker compose up -d
   ```

4. Access MySQL:
   ```bash
   mysql -u root -p -h 127.0.0.1 -P 3306
   ```
   Enter the password: `rootpassword`.

5. Create the database:
   ```sql
   CREATE DATABASE loisirs;
   ```

6. Import the SQL file to the newly created database:
   ```bash
   mysql -u root -p -h 127.0.0.1 -P 3306 loisirs < loisirs.sql
   ```

7. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend/
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```
