// GalleryItem.jsx
import React, { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem({ item, onLike }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  const handleLike = () => {
    axios
      .put(`/gallery/like/${item.id}`)
      .then((response) => {
        onLike();
      })
      .catch((error) => {
        console.log("Error liking the image", error);
      });
  };

  return (
    <div className="gallery-item-container">
      {isDescriptionVisible ? (
        <p onClick={toggleDescription}>{item.description}</p>
      ) : (
        <img
          className="gallery-image"
          src={item.path}
          alt={item.title}
          onClick={toggleDescription}
        />
      )}
      <div className="like-container">
        <button onClick={handleLike}>Like</button>
        <p className="like-badge">{item.likes} likes</p>
      </div>
    </div>
  );
}

export default GalleryItem;
