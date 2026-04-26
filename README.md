# Blog in Angular with CMS and Backend in Nest.js (Monorepo)

![ Typescript](https://img.shields.io/badge/-TypeScript-white? style=for-the-badge&logo=typescript&color=3178C6&logoColor=white)
![ nest](https://img.shields.io/badge/-nestJS-white? style=for-the-badge&logo=nestjs&color=E0234E&logoColor=white)
![ mysql](https://img.shields.io/badge/-mysql-white? style=for-the-badge&logo=mysql&color=4479A1&logoColor=white)
![ prism](https://img.shields.io/badge/-prism-white? style=for-the-badge&logo=prisma&color=2D3748&logoColor=white)
![ angular](https://img.shields.io/badge/-angular-white? style=for-the-badge&logo=angular&color=DD0031&logoColor=white)
![ tailwindcss](https://img.shields.io/badge/-tailwind_css-white? style=for-the-badge&logo=tailwindcss&color=06B6D4&logoColor=white)
![ lottie](https://img.shields.io/badge/-Lottie-white? style=for-the-badge&color=08ccbc&logoColor=white)
![ docker](https://img.shields.io/badge/-docker-white? style=for-the-badge&logo=docker&color=2496ED&logoColor=white)


This is a complete blog project developed in Angular for the frontend, with an integrated CMS (Content Management System), and a backend in Nest.js that communicates with a MySQL database using Prisma as ORM (Object-Relational Mapping). The project is organized into a monorepo, which means that the frontend, CMS, and backend are grouped into a single repository. In addition, the project has a Docker configuration to facilitate the execution of the demo.

## Environment Configuration

Make sure you have Docker installed on your machine.

1. Clone this repository for your local machine.
2. At the root of the project, run the `docker compose up` command to start the blog, CMS, backend and MySQL database containers.

## Access to the Demo

After the execution of the `docker compose up` command, the demo will be available in the following URLs:

- Blog: [http://localhost:4200](http://localhost:4200)
- CMS: [http://localhost:4100](http://localhost:4100). Email: admin@blog.com and password: 123456
- Backend: [http://localhost:3000](http://localhost:3000)

## Project Structure

- [Blog](./blog/README.md): Contains the source code and instructions for the blog in Angular.
- [cms](. /CMS/README.md): Contains the source code and instructions for the CMS in Angular.
- [backend](./backend/README.md): Contains the source code and instructions for the backend in Nest.js.
- The `init.db` file in the `.docker/mysql` directory is an initial database for the system.

![ docker](https://github.com/SilvioCavalcantiBonfim/angular-blog/assets/89864715/5539368f-372d-4915-962a-ebba262df8ba)


## Features and Features

### Blog in Angular

- Viewing blog articles in an intuitive and user-friendly interface.
- Integrated social comments and interactions for reader engagement.
- Article details page with full content, additional information, and comments section.
- Search and filtering pages to find specific posts.

![ Unnamed design](https://raw.githbusercontent.com/SilvioCavalcantiBonfim/angular-blog/master/images/blog.gif)

### CMS
- Article management: creation, editing and deletion of articles.
- Moderation of comments.
- Customization of the layout and style of the blog.

![ Unnamed design](https://raw.githubusercontent.com/SilvioCavalcantiBonfim/angular-blog/master/images/cms.gif)

### Backend in Nest.js

- RESTful API for communication between the blog, the CMS, and the MySQL database using Prisma as ORM.
- Data management in the MySQL database, including articles and comments.

![ BACKEND](https://github.com/SilvioCavalcantiBonfim/angular-blog/assets/89864715/4b23900-2ac3-4a1e-9f91-708cc984d57d)

## Contribution

Contributions are welcome! If you have suggestions, improvements or fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the license [MIT](LICENSE).
