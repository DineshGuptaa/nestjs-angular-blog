# Frontend of the Blogging System in Angular

![ Typescript](https://img.shields.io/badge/-TypeScript-white? style=for-the-badge&logo=typescript&color=3178C6&logoColor=white)
![ angular](https://img.shields.io/badge/-angular-white? style=for-the-badge&logo=angular&color=DD0031&logoColor=white)
![ tailwindcss](https://img.shields.io/badge/-tailwind_css-white? style=for-the-badge&logo=tailwindcss&color=06B6D4&logoColor=white)
![ lottie](https://img.shields.io/badge/-Lottie-white? style=for-the-badge&color=08ccbc&logoColor=white)

This is the frontend project in Angular for a blogging system. The purpose of this project is to provide a user-friendly and responsive user interface to view and interact with blog posts.

## Environment Configuration

Make sure you have Node.js and Angular CLI installed on your machine.

1. Clone this repository for your local machine.
2. At the root of the project, run `npm install` to install the dependencies.
3. Run `ng serves` to start the development server.
4. Access the application in your browser at `http://localhost:4200`.

## Project Structure

- `src`: Contains the main source code of the project.
  - `app`: Folder to store the components and services of the application.
    - `animations`: Paw to store the angular animations.
    - `article`: Folder to store the article module of the route `/article/:id`.
    - `carousel`: Folder to store the carousel module and its components.
    - `entity`: Folder to store the types.
    - `factories`: Folder to store the factories.
    - `main`: Folder to store the main module of the route `/`.
    - `pieces`: Folder to store the module pieces that export the components `app-header` and `app-footer`.
    - `services`: Folder to store the communication services with the backend API, article management, settings, and searches.
    - `terms-and-condition`: Folder to store the term-and-condition models of the `/terms-and-condition` route.
    - `app.component.ts`: File of the main component of the application.
    - `app.module.ts`: Configuration file of the main module of the application.
  - `assets`: Folder to store the static resources such as images and CSS files.

## Features

- View list of blog articles.
- View details of a specific article.
- Comment on an article.
- Search articles by title or content.
- Paging to browse the posts.

## Technologies Used

- Angular: JavaScript Framework for building user interfaces.
- Angular Router: Route manager for in-app navigation.
- HttpClientModule: Module to perform HTTP requests for the backend API.
- BrowserAnimationsModule: Library for animations in Angular.
- LottieModule: Module for displaying Lottie animations in Angular projects.
- Tailwind CSS: CSS framework utility for fast and responsive stylization.
- TypeScript: JavaScript Superset used in Angular development.

## Screenshots

![ Unnamed design](https://raw.githbusercontent.com/SilvioCavalcantiBonfim/angular-blog/master/images/blog.gif)

## Contribution

Contributions are welcome! If you have suggestions, improvements or fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the license [MIT](LICENSE).
