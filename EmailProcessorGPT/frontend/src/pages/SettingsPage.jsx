import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSettings } from '../redux/actions/settingsActions';

const SettingsPage = () => {
  const dispatch = useDispatch();
  const [settings, setSettings] = useState({
    emailAddress: '',
    apiKey: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSettings(settings));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Settings</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="emailAddress" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={settings.emailAddress}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="apiKey" className="block text-gray-700 font-bold mb-2">
            API Key
          </label>
          <input
            type="password"
            id="apiKey"
            name="apiKey"
            value={settings.apiKey}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your API key"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;