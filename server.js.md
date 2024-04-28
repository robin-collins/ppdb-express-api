## ppdb-api-v6_ Internal Code Documentation 📚

### Table of Contents

- [Introduction](#introduction)
- [Application Setup](#application-setup)
- [Middleware](#middleware)
  - [Authentication](#authentication)
  - [Request Logging](#request-logging)
- [Routes](#routes)
  - [Customer Routes](#customer-routes)
  - [Animal Routes](#animal-routes)
  - [Breed Routes](#breed-routes)
  - [Note Routes](#note-routes)
  - [Search Routes](#search-routes) 🔍
- [Error Handling](#error-handling)

## Introduction

This document provides a comprehensive guide to the codebase of ppdb-api-v6_.

## Application Setup

- **Node.js Version:** Node.js v18.x or higher is required.
- **Database:** MongoDB is used as the database.
- **Express Framework:** Express.js is used for routing and middleware.

## Middleware

### Authentication 🛡️

- All routes except `/health` and `/` are protected by authentication.
- A custom authentication middleware is implemented using Passport.js.
- The middleware checks for a valid authorization token in the request headers.

### Request Logging 📝

- A custom middleware logs each incoming request to the console.
- This middleware is applied to all routes.

## Routes

### Customer Routes

| Method | Path | Description |
|---|---|---|
| GET | /customers | Retrieve all customers |
| GET | /customers/:id | Retrieve a specific customer |
| POST | /customers | Create a new customer |
| PUT | /customers/:id | Update a customer |
| DELETE | /customers/:id | Delete a customer |

### Animal Routes

| Method | Path | Description |
|---|---|---|
| GET | /animals | Retrieve all animals |
| GET | /animals/:id | Retrieve a specific animal |
| POST | /animals | Create a new animal |
| PUT | /animals/:id | Update an animal |
| DELETE | /animals/:id | Delete an animal |

### Breed Routes

| Method | Path | Description |
|---|---|---|
| GET | /breeds | Retrieve all breeds |
| GET | /breeds/:id | Retrieve a specific breed |
| POST | /breeds | Create a new breed |
| PUT | /breeds/:id | Update a breed |
| DELETE | /breeds/:id | Delete a breed |

### Note Routes

| Method | Path | Description |
|---|---|---|
| GET | /notes | Retrieve all notes |
| GET | /notes/:id | Retrieve a specific note |
| POST | /notes | Create a new note |
| PUT | /notes/:id | Update a note |
| DELETE | /notes/:id | Delete a note |

### Search Routes 🔍

| Method | Path | Description |
|---|---|---|
| GET | /search | Search across multiple fields (e.g., name, description) |

## Error Handling

A custom error handling middleware is implemented to catch any unhandled errors in the application.

- Errors are logged to the console with the full error message and stack trace.
- A generic error response is sent to the client with a status code of 500.

## Example Usage Code

```javascript
// Retrieve all customers
const { Customer } = require('./models/customer'); // assuming you have a Customer model

Customer.find({}, (err, customers) => {
  if (err) {
    // Handle error
  }
  // Do something with the customers
});

// Create a new customer
const newCustomer = new Customer({
  name: 'John Doe',
  email: 'john.doe@example.com'
});

newCustomer.save((err) => {
  if (err) {
    // Handle error
  }
  // Do something with the new customer
});
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.