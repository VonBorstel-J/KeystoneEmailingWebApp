import React from 'react';
import { Link } from 'react-router-dom';
// Assuming you've set up react-router-dom in your project

const HomePage = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold text-blue-900 mb-4">Welcome to Email Processor GPT</h1>
    <p className="text-gray-700 mb-8">
      This is the home page where you can get started with managing your emails using GPT.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Inbox</h2>
        <p className="text-gray-700">View and manage your email inbox.</p>
        <Link to="/inbox" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
          Go to Inbox
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Analytics</h2>
        <p className="text-gray-700">Track email performance and insights.</p>
        <Link to="/analytics" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
          View Analytics
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Templates</h2>
        <p className="text-gray-700">Create and manage email templates.</p>
        <Link to="/templates" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
          Manage Templates
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
