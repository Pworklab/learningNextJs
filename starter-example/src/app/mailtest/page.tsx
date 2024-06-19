'use client';
import React, { useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Submitted Name:', name);
    setName(''); // Reset input field
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); // Update the 'name' state with the input value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button type="submit">送信</button>
    </form>
  );
}
