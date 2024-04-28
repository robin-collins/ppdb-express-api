## 🦒 Animal API 🦒

### Table of Contents

- [Overview](#overview)
- [Endpoints](#endpoints)
    - [GET /animals](#get-animals)
    - [GET /animals/:id](#get-animal-by-id)
    - [GET /animals/customer/:customerid](#get-animals-for-customer)
    - [POST /animals](#create-animal)
    - [PUT /animals/:id](#update-animal)
    - [DELETE /animals/:id](#delete-animal)

### Overview

The Animal API provides endpoints for managing animals in a database. Animals can be created, retrieved, updated, and deleted.

### Endpoints

#### GET /animals

**Description:** Retrieves all animals in the database.

**Example Usage:**

```
fetch('/animals')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### GET /animals/:id

**Description:** Retrieves an animal by its ID.

**Example Usage:**

```
fetch('/animals/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### GET /animals/customer/:customerid

**Description:** Retrieves all animals for a specific customer.

**Example Usage:**

```
fetch('/animals/customer/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### POST /animals

**Description:** Creates a new animal.

**Example Usage:**

```
fetch('/animals', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Spot',
    type: 'Dog',
    customerId: 1,
  }),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### PUT /animals/:id

**Description:** Updates an existing animal.

**Example Usage:**

```
fetch('/animals/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Spot',
    type: 'Dog',
    customerId: 2,
  }),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### DELETE /animals/:id

**Description:** Deletes an existing animal.

**Example Usage:**

```
fetch('/animals/1', {
  method: 'DELETE',
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```