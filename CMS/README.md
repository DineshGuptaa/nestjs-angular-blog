# Blog CMS Frontend in Angular

![ Typescript](https://img.shields.io/badge/-TypeScript-white? style=for-the-badge&logo=typescript&color=3178C6&logoColor=white)
![ angular](https://img.shields.io/badge/-angular-white? style=for-the-badge&logo=angular&color=DD0031&logoColor=white)
![ tailwindcss](https://img.shields.io/badge/-tailwind_css-white? style=for-the-badge&logo=tailwindcss&color=06B6D4&logoColor=white)
![ lottie](https://img.shields.io/badge/-Lottie-white? style=for-the-badge&color=08ccbc&logoColor=white)

This is the frontend project in Angular for the CMS (Content Management System) of a blog. The purpose of this project is to provide a user-friendly and responsive user interface for managing blog content, such as creating, editing and deleting articles, managing comments, among other CMS-related features.

## Environment Configuration

Make sure you have Node.js and Angular CLI installed on your machine.

1. Clone this repository for your local machine.
2. At the root of the project, run `npm install` to install the dependencies.
3. Run `ng serves` to start the development server.
4. Access the application in your browser at `http://localhost:4200`.

## Project Structure

- `src`: Contains the main source code of the project.
  - `app`: Folder to store the components and services of the application.
    - `adapter`: Folder to store the project adapters.
    - `animations`: Folder to store the angular animations.
    - `apicommunication`: Folder to store the communication service with the backend.
    - `dashboard`: Folder to store the dashboard module of the `/dashboard` route.
    - `editor`: Folder to store the editor module.
    - `entity`: Folder to store the types.
    - `login`: Folder to store the route login module `/`.
    - `notification`: Folder to store the notifications module and service.
    - `Permission`: Folder to store the gaurd.
    - `app.component.ts`: File of the main component of the application.
    - `app.module.ts`: Configuration file of the main module of the application.
  - `assets`: Folder to store the static resources such as images and CSS files.

## Features

- Create, edit, and delete blog articles.
- Manage the aesthetic settings of the blog.
- Manage the author data of the blog.
- View and delete comments in the articles.

## Technologies Used

- Angular: JavaScript Framework for building user interfaces.
- Angular Router: Route manager for in-app navigation.
- HttpClientModule: Module to perform HTTP requests for the backend API.
- BrowserAnimationsModule: Library for animations in Angular.
- LottieModule: Module for displaying Lottie animations in Angular projects.
- Tailwind CSS: CSS framework utility for fast and responsive stylization.
- TypeScript: JavaScript Superset used in Angular development.

## Screenshots

![ Unnamed design](https://raw.githubusercontent.com/SilvioCavalcantiBonfim/angular-blog/master/images/cms.gif)



## Contribution

Contributions are welcome! If you have suggestions, improvements or fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the license [MIT](LICENSE).
