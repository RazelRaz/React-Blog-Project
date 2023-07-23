# Bloggy - Vite + React Blog Project

Bloggy is a simple and elegant blog project built using Vite and React. It allows you to create and manage blog posts and categories, enabling you to share your thoughts and ideas with the world.

## Live Demo
Check out the [live demo](https://64bd5746b6caba3815982ec3--dazzling-pixie-7eb928.netlify.app/) of the Bloggy project.

## Features

- View the latest blog posts on the home page.
- Explore blog posts based on different categories.
- Read the full details of each blog post on its dedicated blog details page.
- User-friendly and responsive design for seamless viewing across devices.

## Dependencies

The project is built with the following dependencies:

- [axios](https://www.npmjs.com/package/axios) - A popular library for making HTTP requests to fetch data from the API endpoints.
- [react](https://www.npmjs.com/package/react) - A JavaScript library for building user interfaces.
- [react-dom](https://www.npmjs.com/package/react-dom) - Provides methods for interacting with the DOM.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - A routing library for React applications.

## Getting Started

Follow these steps to get the Bloggy project up and running on your local machine:

1. Clone the repository:
2. Install the dependencies:
3. Start the development server:
4. Open your web browser and visit `http://localhost:3000` to see the application.

## API Endpoints

The project interacts with the following RESTful API endpoints:

- `GET /post-categories` - Retrieve all blog categories.
- `GET /post-newest` - Fetch the latest blog posts.
- `GET /post-list/:id` - Get blog posts based on a specific category ID.
- `GET /post-details/:id` - Fetch details of a specific blog post by ID.

Please ensure that you have the necessary API endpoints set up to use the Bloggy project fully.

## Contributing

We welcome contributions to improve the Bloggy project! Feel free to open issues and submit pull requests for any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
