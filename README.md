# 🛒 Mongo Products App



A lightweight full-stack e-commerce simulation designed to demonstrate native MongoDB integration, connection pooling, and precision decimal storage.



## ✨ Features



* **Native MongoDB Driver**: Interacts directly with the database without an ORM/ODM (like Mongoose) for absolute control over queries.

* **Connection Pooling**: Implements a centralized database connection pool shared across the entire application.

* **Decimal Precision**: Utilizes the `Decimal128` data type to handle monetary values safely without floating-point binary errors.

* **Docker Environment**: Includes a pre-configured orchestration file to spin up an isolated local database instantly.



## 🛠️ Tech Stack



* **Backend**: Node.js, Express.js, MongoDB Native Driver (`v3.1.6`).

* **Frontend**: React, Axios, React Router DOM.

* **Infrastructure**: Docker, Docker Compose.



## ⚙️ Quick Start



### 1. Install Dependencies



```bash

npm install



```



### 2. Run Database (Docker)



```bash

docker compose up -d



```



### 3. Start Backend Server



```bash

npm run start:server



```



### 4. Start Frontend Client



```bash

npm start



```



The application will automatically open in your default browser at `http://localhost:3000`.



## 📡 API Endpoints



* `GET /products` — Fetch all inventory items.

* `GET /products/:id` — Fetch details for a single item by ID.

* `POST /products` — Insert a new product into the database.

* `PATCH /products/:id` — Update an existing product.

* `DELETE /products/:id` — Remove a product from the database.
