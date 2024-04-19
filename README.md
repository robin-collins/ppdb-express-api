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

- Node.js version 14+
- PostgreSQL version 12+
- Sequelize CLI

### Quickstart

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up the PostgreSQL database and update the `.env` file with your database credentials.
4. Run migrations: `npm run migrate`
5. Start the server: `npm start`

### License

Copyright (c) 2024.