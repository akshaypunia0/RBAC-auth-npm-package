# rbac-express

Simple and lightweight Role-Based Access Control (RBAC) middleware for Express.js applications.

## Why rbac-express?

Most Express applications require role-based authorization, but implementing it repeatedly across projects leads to duplicated and error-prone code.
`rbac-express` solves this by providing a clean, reusable authorization middleware that works seamlessly with JWT-based authentication systems.

## Installation

```bash

npm install rbac-express

```

## Basic Usage

```js

import express from "express";
import authorize from "rbac-express";

const app = express();

// Example authenticated user
app.use((req, res, next) => {
  req.user = { role: "ADMIN" };
  next();
});

app.get(
  "/admin",
  authorize(["ADMIN"]),
  (req, res) => {
    res.send("Admin access granted");
  }
);

```

## How it Works

1. The middleware expects `req.user` to be populated (usually by an authentication middleware).
2. It checks whether the user's role is included in the allowed roles.
3. If authorized, the request proceeds to the next handler.
4. If unauthorized, a standardized error response is returned.


## Error Handling
The middleware returns structured HTTP errors:

- `401 Unauthorized` – if `req.user` is missing
- `403 Forbidden` – if the user's role is not permitted

## Using with JWT Authentication

Make sure your authentication middleware sets `req.user`:

```js
app.use((req, res, next) => {
  // decoded JWT payload
  req.user = { id: "123", role: "USER" };
  next();
});

```

Then protect your routes
```js
app.get("/vendor", authorize(["VENDOR"]), handler);

```


### Best Practices

- Always run authentication middleware before `authorize()`
- Use constants or enums for role names
- Avoid hardcoding roles inside controllers
