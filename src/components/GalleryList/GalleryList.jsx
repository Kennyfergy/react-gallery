// GalleryList.jsx
import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery, onLike }) {
  return (
    <div>
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} onLike={onLike} />
      ))}
    </div>
  );
}

export default GalleryList;
