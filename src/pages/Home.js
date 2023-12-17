import React from 'react';
import './HomePage.css'; // Import CSS file for styling

function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="welcome-text"> Admin dashboard </h1>

      <div className="image-buttons">
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_Hf39efqB3ZBnF9FQeRBbi1f5D8da_VFkw&usqp=CAU"
            alt="Button 1"
            className="clickable-image"
          />
        </a>
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_Hf39efqB3ZBnF9FQeRBbi1f5D8da_VFkw&usqp=CAU"
            alt="Button 2"
            className="clickable-image"
          />
        </a>
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_Hf39efqB3ZBnF9FQeRBbi1f5D8da_VFkw&usqp=CAU"
            alt="Button 3"
            className="clickable-image"
          />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
