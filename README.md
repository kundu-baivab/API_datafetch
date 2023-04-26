# User Management API

This is a Node.js API built using the Express framework for managing users. It includes endpoints for retrieving a list of all users and retrieving the top users.

## Getting Started

To get started, clone this repository to your local machine and install the necessary dependencies using npm:

```
npm install
```

Next, create a `.env` file in the root directory of the project and add the necessary environment variables.

To start the server, run the following command:

```
npm start
```

The server will then be running on `http://localhost:8005`.

## Endpoints

### GET /getAllUser

This endpoint returns a list of all users in the database, with optional pagination support. Pagination parameters can be passed as query parameters in the URL (`page` for the current page, and `limit` for the number of items per page).

Example response:
```
{
  "status": "ok",
  "data": [
    {
      "_id": "60f6e28a6dc104140cd79d69",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "createdAt": "2021-07-20T11:47:22.876Z",
      "updatedAt": "2021-07-20T11:47:22.876Z",
      "__v": 0
    },
    {
      "_id": "60f6e2c86dc104140cd79d6a",
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "createdAt": "2021-07-20T11:48:08.624Z",
      "updatedAt": "2021-07-20T11:48:08.624Z",
      "__v": 0
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 1
  }
}
```

### GET /getTopUsers

This endpoint returns a list of all users in the database, sorted by some criteria, such as highest activity, most recent activity or any other criteria that is relevant to the application.

Example response:
```
{
  "status": "ok",
  "data": [
    {
      "_id": "60f6e28a6dc104140cd79d69",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "createdAt": "2021-07-20T11:47:22.876Z",
      "updatedAt": "2021-07-20T11:47:22.876Z",
      "__v": 0
    },
    {
      "_id": "60f6e2c86dc104140cd79d6a",
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "createdAt": "2021-07-20T11:48:08.624Z",
      "updatedAt": "2021-07-20T11:48:08.624Z",
      "__v": 0
    }
  ]
}
```


## How to host the project on local device

Copy the entire server folder in your device.
Open the folder using VS Code.
Open terminal in git bash and type nodemon app.js to start the backend server and to connect to MongoDB Atlas Database.

Copy the entire client folder to your device which you would get by clicking on the link above.
Open it with VS Code on your device.
Open terminal and type npm start to start the website.

## Built With

- Node.js
- Express
- MongoDB

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```
