// GalleryList.jsx
import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery }) {
  return (
    <div>
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} onLike={item.onLike} />
      ))}
    </div>
  );
}

export default GalleryList;
