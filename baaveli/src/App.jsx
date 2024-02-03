// src/components/Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [id, setId] = useState('');
  const [friendId, setFriendId] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', id);
    formData.append('friendId', friendId);
    formData.append('password', password);

    // Check if photo is not null before appending it to formData
    if (photo) {
      formData.append('photo', photo);
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
      <label className="block mb-4">
        <span className="text-gray-700">ID:</span>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="form-input mt-1 block w-full" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Friend ID:</span>
        <input type="text" value={friendId} onChange={(e) => setFriendId(e.target.value)} className="form-input mt-1 block w-full" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input mt-1 block w-full" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Photo:</span>
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className="form-input mt-1 block w-full" />
      </label>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
