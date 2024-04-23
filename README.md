# ppdb-api-v6_

A RESTful API designed for managing customer, animal, breed, and note data specifically tailored for pet care applications. It allows developers to perform CRUD operations and search functionalities to enhance backend data management for pet care platforms.

## Overview

The application is built using Node.js and Express.js, leveraging PostgreSQL for data persistence and Sequelize ORM for database interaction. The architecture is set up to handle requests through various endpoints with middleware for authentication, error handling, and request logging.

## Features

- User authentication via API keys.
- CRUD operations for customers, animals, breeds, and notes.
- Data retrieval for related entities like animals for a specific customer or notes for a specific animal.
- Search functionality across customer surnames, animal names, and phone numbers.
- Optional pagination and advanced filtering for data retrieval.

## Getting Started

### Requirements

- Node.js version 16.x (as specified in package.json "engines")
- PostgreSQL version 12+
- Sequelize CLI

### Quickstart

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root and add your configuration values:
   ```sh
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=your_database
   DB_USER=your_username 
   DB_PASSWORD=your_password
   ```
   Adjust the configuration variables based on your environment.
4. Set up the PostgreSQL database and update the `.env` file with your database credentials.
5. Run database migrations:
   ```sh
   npm run db:migrate
   ```
6. Start the server:
   ```sh
   npm run start:dev
   ```

### License

Copyright (c) 2024.