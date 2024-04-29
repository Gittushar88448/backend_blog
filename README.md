## Backend Blog Application.

This is a backend application for a simple blog platform built with Express.js, MongoDB, and Mongoose. It provides endpoints to create and retrieve posts, create and retrieve comments, and update likes for posts.

## Installation.

1. Clone the repository:

git clone https://github.com/Gittushar88448/backend_blog.git

2. Navigate to the project directory:

cd backend-blog

3. Install dependencies:

npm install

4. Set up environment variables:Create a .env file in the root directory and define the following variables:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/blog_db

5. Start the server/ start using nodemon:

npm start

## Folder Structure.

backend-blog/
│
├── config/                 # Configuration files
│   └── ...
│
├── controllers/            # Route handlers
│   └── ...
│
├── models/                 # Mongoose models
│   └── ...
│
├── routes/                 # Route definitions
│   └── ...
│
└── index.js                # Entry point

## Endpoints

## Posts

- GET /api/posts: Get all posts
- POST /api/posts: Create a new post

## Comments

- GET /api/posts/:postId/comments: Get all comments for a post
- POST /api/posts/comments: Add a new comment to a post

## Likes

- PUT /api/posts/:postId/like: Like a post
- PUT /api/posts/:postId/unlike: Unlike a post

## Testing

You can test the API endpoints using Postman or any other API testing tool.

1. Import the provided Postman collection backend-blog.postman_collection.json.

2. Configure environment variables if necessary.

3. Send requests to the defined endpoints.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


