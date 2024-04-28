## Customer API   🚧
### Table of Contents
- [Prerequisites](#Prerequisites)
- [Setup](#Setup)
- [Routes](#Routes)
  - [GET /customers](#GET--customers-)
  - [GET /customers/:id](#GET--customers--id-)
  - [POST /customers](#POST--customers-)
  - [PUT /customers/:id](#PUT--customers--id-)
  - [DELETE /customers/:id](#DELETE--customers--id-)
- [Examples](#Examples)
- [Versioning](#Versioning)
- [Security](#Security)

## Prerequisites
- Node.js v16 or higher
- Express framework
- PostgreSQL database

## Setup
1. Install dependencies:
  ```
  npm install express pg
  ```
2. Create a PostgreSQL database and table:
  ```
  CREATE TABLE customers (
    customerid SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zip VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(255) UNIQUE NOT NULL
  );
  ```
3. Configure the `.env` file with database connection details:
  ```
  DB_HOST=localhost
  DB_USER=postgres
  DB_PASSWORD=mypassword
  DB_NAME=customers
  DB_PORT=5432
  ```

## Routes

### GET /customers
- Fetches all customers from the database.
- Response:
  ```json
  [
    {
      "customerid": 1,
      "name": "John Doe",
      "address": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345",
      "email": "john.doe@example.com",
      "phone": "555-123-4567"
    },
    ...
  ]
  ```

### GET /customers/:id
- Fetches a specific customer by ID from the database.
- Path Parameter: `id`
- Response:
  ```json
  {
    "customerid": 1,
    "name": "John Doe",
    "address": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345",
    "email": "john.doe@example.com",
    "phone": "555-123-4567"
  }
  ```

### POST /customers
- Creates a new customer in the database.
- Request Body:
  ```json
  {
    "name": "Jane Doe",
    "address": "456 Elm St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345",
    "email": "jane.doe@example.com",
    "phone": "555-234-5678"
  }
  ```
- Response:
  ```json
  {
    "customerid": 2,
    "name": "Jane Doe",
    "address": "456 Elm St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345",
    "email": "jane.doe@example.com",
    "phone": "555-234-5678"
  }
  ```

### PUT /customers/:id
- Updates an existing customer in the database.
- Path Parameter: `id`
- Request Body:
  ```json
  {
    "name": "John Doe",
    "address": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345",
    "email": "john.doe@example.com",
    "phone": "555-123-4567"
  }
  ```
- Response:
  ```json
  {
    "message": "Customer updated"
  }
  ```

### DELETE /customers/:id
- Deletes an existing customer from the database.
- Path Parameter: `id`
- Response:
  ```json
  {
    "message": "Customer deleted"
  }
  ```

## Examples
```javascript
// Get all customers
const { Customer } = require('../models/Customer');
const customers = await Customer.findAll();
console.log(customers);

// Get a specific customer by ID
const customer = await Customer.findByPk(1);
console.log(customer);

// Create a new customer
const newCustomer = await Customer.create({
  name: 'Jane Doe',
  address: '456 Elm St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
  email: 'jane.doe@example.com',
  phone: '555-234-5678'
});
console.log(newCustomer);

// Update an existing customer
const updatedCustomer = await Customer.update({
  name: 'John Doe',
  address: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
  email: 'john.doe@example.com',
  phone: '555-123-4567'
}, {
  where: {
    customerid: 1
  }
});
console.log(updatedCustomer);

// Delete a customer
const deletedCustomer = await Customer.destroy({
  where: {
    customerid: 1
  }
});
console.log(deletedCustomer);
```

## Versioning
- v1.0.0: Initial release

## Security
- The API uses HTTPS for secure communication.
- The database is protected by a firewall and access control.
- The API routes are rate limited to prevent abuse.