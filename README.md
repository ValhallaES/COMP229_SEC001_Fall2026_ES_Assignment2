# MyPortfolio – COMP229 Assignment 2

Node.js + Express REST API with MongoDB (Mongoose) and JWT authentication.
The React front end (from Assignment 1) is in `client/`.

## Setup
1. Paste your MongoDB Atlas connection string into `config/config.js` (database name: `Portfolio`).
2. Install packages (once, from the `MyPortfolio` folder - all packages for the
   front end and back end are in the root `package.json`):
   ```
   npm install
   ```
3. Run front end + back end together (from the `MyPortfolio` folder):
   ```
   npm run dev
   ```
   - Front end: http://localhost:5173
   - Back end:  http://localhost:3000
   - Only the front end: `npm run client` / only the back end: `npm run server`

## REST APIs
Each resource (`contacts`, `projects`, `qualifications`, `users`) supports:

| Method | URL | Action |
|---|---|---|
| GET | /api/{resource} | get all |
| GET | /api/{resource}/:id | get by id |
| POST | /api/{resource} | add new |
| PUT | /api/{resource}/:id | update by id |
| DELETE | /api/{resource}/:id | remove by id |
| DELETE | /api/{resource} | remove all |

## Authentication
| Method | URL | Action |
|---|---|---|
| POST | /auth/signin | sign in, returns a JWT token |
| GET | /auth/signout | sign out |

Protected routes need the header `Authorization: Bearer <token>`:
- projects / qualifications: POST, PUT, DELETE
- contacts: PUT, DELETE (POST stays public for the contact form)
- users: GET by id, PUT, DELETE (PUT/DELETE by id only for the signed-in user), DELETE all
