import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/createUser', formData);
      console.log(response.data);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div className="max-w-md px-10 mx-auto mt-8 bg-red-300 py-7 rounded-xl">
      <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstname" className="block">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="lastname" className="block">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <button type="submit"  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
