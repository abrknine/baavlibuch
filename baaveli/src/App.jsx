/*
import React, { useState } from 'react';
import axios from 'axios'
const Form = () => {
  const [formData, setFormData] = useState({
    id: '',
    friendId: '', // Corrected from friendid to friendId
    password: '',
   // Initialize photo as null, not an empty string
  });

  const [Photo, setPhoto] = useState("")

   const handleImage = (e) => {
    setPhoto(e.target.files[0])
    
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
   

    formData.photo = Photo; 
       
        console.log('Form Data:', formData);
   
    axios.post("http://localhost:7000/api/user", formData)
      .then(response => {
        console.log('Form data successfully submitted to the backend:', response);
      })
      .catch(error => {
        console.error('Error submitting form data to the backend:', error);
      });
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 rounded shadow-md">
      <label className="block mb-4">
        <span className="">ID:</span>
        <input
          type="text"
          name="id"  // Update name to "userId"
          value={formData.id} 
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Friend ID:</span>
        <input
          type="text"
          name="friendId" 
          value={formData.friendId}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>
      <label className="block mb-4">
  <span className="text-gray-700">Photo:</span>
  <input
    type="file"
    onChange={handleImage}
    className="form-input mt-1 block w-full"
  />
</label>
      
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
*/

import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    userId: '', // Update to 'id' to match the backend
    friendId: '', 
    password: '',
   // photo: null, 
  });

  /*const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        photo: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    axios.post("http://localhost:7000/api/user", formData)
      .then(response => {
        console.log('Form data successfully submitted to the backend:', response);
      })
      .catch(error => {
        console.error('Error submitting form data to the backend:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 rounded shadow-md">
      <label className="block mb-4">
        <span className="">ID:</span>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Friend ID:</span>
        <input
          type="text"
          name="friendId" 
          value={formData.friendId}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>
     {/* /* <label className="block mb-4">
        <span className="text-gray-700">Photo:</span>
        <input
          type="file"
          name="photo"
          onChange={handleImage}
          className="form-input mt-1 block w-full"
        />
      </label> */}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
