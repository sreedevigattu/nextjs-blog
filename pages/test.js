// pages/index.js or any other page file

import React from 'react';

export default function HomePage() {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/test', {
        mode: 'cors'
      });
      console.log(response)
      const data = await response.json(); // Assuming the API returns JSON data
      console.log(data); // Handle the data from the response
      
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      <h1>Welcome to My Page!</h1>
      <button onClick={handleButtonClick}>Call API</button>
    </div>
  );
}
