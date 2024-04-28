**Table of Contents**

* [Introduction](#introduction)
* [Routes](#routes)
    * [GET /](#get-)
    * [GET /:id](#get-id)
    * [GET /animal/:animalid](#get-animalanimalid)
    * [POST /](#post-)
    * [PUT /:id](#put-id)
    * [DELETE /:id](#delete-id)

## Introduction 

This document provides detailed information about the Note API routes defined in the Node.js Express application.


## Routes 

### GET / 
**Description:** Retrieve all notes from the database.

**Response:**
```json
[
  {
    "noteid": 1,
    "title": "Note 1",
    "content": "This is the first note.",
    "animalid": 1
  },
  {
    "noteid": 2,
    "title": "Note 2",
    "content": "This is the second note.",
    "animalid": 2
  }
]
```

### GET /:id
**Description:** Retrieve a specific note by its `noteid`.

**Path Parameters:**
| Name | Type | Description |
|---|---|---|
| id | integer | The unique identifier of the note to retrieve. |

**Response:**
```json
{
  "noteid": 1,
  "title": "Note 1",
  "content": "This is the first note.",
  "animalid": 1
}
```

### GET /animal/:animalid
**Description:** Retrieve all notes associated with a specific animal by its `animalid`.

**Path Parameters:**
| Name | Type | Description |
|---|---|---|
| animalid | integer | The unique identifier of the animal whose notes to retrieve. |

**Response:**
```json
[
  {
    "noteid": 1,
    "title": "Note 1",
    "content": "This is the first note.",
    "animalid": 1
  },
  {
    "noteid": 2,
    "title": "Note 2",
    "content": "This is the second note.",
    "animalid": 1
  }
]
```

### POST /
**Description:** Create a new note in the database.

**Request Body:**
| Name | Type | Description |
|---|---|---|
| title | string | The title of the new note. |
| content | string | The content of the new note. |
| animalid | integer | The unique identifier of the animal to associate the note with. |

**Response:**
```json
{
  "noteid": 3,
  "title": "Note 3",
  "content": "This is the third note.",
  "animalid": 2
}
```

### PUT /:id
**Description:** Update the information of a specific note by its `noteid`.

**Path Parameters:**
| Name | Type | Description |
|---|---|---|
| id | integer | The unique identifier of the note to update. |

**Request Body:**
| Name | Type | Description |
|---|---|---|
| title | string | The updated title of the note. |
| content | string | The updated content of the note. |
| animalid | integer | The updated animal identifier associated with the note. |

**Response:**
```json
{
  "message": "Note updated"
}
```

### DELETE /:id
**Description:** Delete a specific note from the database by its `noteid`.

**Path Parameters:**
| Name | Type | Description |
|---|---|---|
| id | integer | The unique identifier of the note to delete. |

**Response:**
```json
{
  "message": "Note deleted"
}
```