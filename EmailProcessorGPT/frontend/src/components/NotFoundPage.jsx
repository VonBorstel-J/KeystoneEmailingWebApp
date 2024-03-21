import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <h2 className="text-4xl font-bold mb-2">Oops!</h2>
    <p className="text-xl mb-4">We can't seem to find the page you're looking for.</p>
    <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200 ease-in-out">
      Go Home
    </Link>
  </div>
);

export default NotFoundPage;
