# ShopPlusPlus E-Commerce Website

### You can view the live application here - [ShopPlusPlus](https://shop-plus-plus-okx1.onrender.com).

## Overview

This is a capstone project for an e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides a comprehensive platform for users to browse products, add items to their cart, and make purchases.

## Features

- **User Authentication**: Secure user registration and login functionality.
- **Product Management**: Add, update, and remove products.
- **Shopping Cart**: Add products to the cart, view the cart, and proceed to checkout.
- **Order Management**: View order history and track order status.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Styling**: CSS, Bootstrap
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Stripe

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB server running locally or a MongoDB Atlas account.

### Setup

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/HarishBahuguni/shop-plus-plus.git
    ```

2.  **Navigate to the Project Directory:**

    ```bash
    cd shop-plus-plus
    ```

3.  **Install Backend Dependencies:**

    Navigate to the `backend` directory and install the necessary dependencies:

    ```bash
    cd backend
    npm install
    ```

4.  **Install Frontend Dependencies:**

    Navigate to the `frontend` directory and install the necessary dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

5.  **Set Up Environment Variables:**

    Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    STRIPE_SECRET_KEY=your-stripe-secret-key
    CLOUDINARY_API_KEY=your-cloudinary-api-key
    CLOUDINARY_API_SECRET=your-cloudinary-api-secret
    ```

6.  **Run the Backend Server:**

    Navigate back to the `backend` directory and start the server:

    ```bash
    npm start
    ```

7.  **Run the Frontend Application:**

    Navigate to the `frontend` directory and start the development server:

    ```bash
    npm start
    ```

## Usage

- **Register**: Create a new user account by providing your email, username, and password.
- **Login**: Access your account using the credentials you registered with.
- **Browse Products**: Explore the product catalog to view available items.
- **Add to Cart**: Select items you wish to purchase and add them to your shopping cart.
- **Checkout**: Complete your purchase by following the checkout process, including payment and shipping details.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the coding standards and guidelines used in the project.

## License

This project is licensed under the MIT License

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
