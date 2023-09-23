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
    <div>
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

      <button onClick={handleLike}>Like</button>
      <p>{item.likes} likes</p>
    </div>
  );
}

export default GalleryItem;
