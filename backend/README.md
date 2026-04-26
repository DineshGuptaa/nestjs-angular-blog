# Backend to Blog System with Nest.js, Prism and MySQL

![Typescript](https://img.shields.io/badge/-TypeScript-white?style=for-the-badge&logo=typescript&color=3178C6&logoColor=white)
![nest](https://img.shields.io/badge/-nestJS-white?style=for-the-badge&logo=nestjs&color=E0234E&logoColor=white)
![mysql](https://img.shields.io/badge/-mysql-white?style=for-the-badge&logo=mysql&color=4479A1&logoColor=white)
![prism](https://img.shields.io/badge/-prism-white?style=for-the-badge&logo=prisma&color=2D3748&logoColor=white)

This is a backend project using the Nest.js framework with Prisma integration for MySQL database access. The goal of this project is to provide a complete framework for developing a backend for a blogging system, including a CMS for content management. The system supports public routes for reading protected content and routes for creating, updating, and deleting content using JWT (JSON Web Token) authentication.

## Environment Configuration

Make sure you have Node.js and npm (or yarn) installed on your machine.

1. Clone this repository for your local machine.
2. At the root of the project, run `npm install` or `yarn install` to install the dependencies.
3. Create a `.env` file at the root of the project and configure the required environment variables. You can rely on the provided `.env.example` file.
4. Make sure you have a MySQL server running and update the connection information in the `prisma/schema.prisma` file.
5. Perform `npx prism generate` to generate the Prism artifacts based on the defined schema.
6. Run `npm run start:dev` or `yarn start:dev` to start the development server.

## Project Structure

- `src`: Contains the main source code of the project.
  - `article`: Resource responsible for managing the routes, services, modules and DTO's relating to blog articles.
  - `comment`: Resource responsible for managing the routes, services, modules and DTO's relating to comments of the articles.
  - `profile`: Resource responsible for managing the routes, services, modules and DTO's relating to user profile.
  - `setting`: Resource responsible for managing the routes, services, modules and DTO's relative to the blog settings.
  - `app.module.ts`: Application main module configuration file.
  - `main.ts`: Application entry file.

## JWT Authentication

This project uses JWT authentication to protect specific routes. The implementation of JWT authentication can be found in the `auth` folder and is applied to routes that require authentication. Make sure to provide a valid JWT token in the `Authorization` header when accessing the protected routes.

## Routes

### Authentication
- `POST /auth/login`: Login route that returns a valid JWT token.

### Articles
- `GET /article/read/all`: Public route to list the available articles.
- `GET /article/read/:id`: Public route for details of a specific article.
- `POST /article/create`: Protected route to create a new article.
- `PUT /article/update/:id`: Protected route to update an existing article.
- `DELETE /article/delete/:id`: Protected route to delete an existing article.

### Comments

- `POST /comment/create/:id_article`: Public route to create a new comment in an article.
- `DELETE /comment/delete/:id`: Protected route to delete an existing comment.

### Profile

- `GET /profile`: Private route return the user profile.
- `PUT /profile`: Protected route to update the user's profile.

### Settings

- `GET /setting/theme/all`: Rota publishes return the list of blog themes.
- `GET /setting`: Public route returns blog settings.
- `PUT /setting`: Protected route to update blog settings.

> Although the system does not have a route for creating users, it is already prepared to receive this functionality in the authentication module.

![ BACKEND](https://github.com/SilvioCavalcantiBonfim/angular-blog/assets/89864715/e749d6da-d714-48d5-a4ba-917bfa1f28e5)

## Contribution

Contributions are welcome! If you have suggestions, improvements or fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the license [MIT](LICENSE).
