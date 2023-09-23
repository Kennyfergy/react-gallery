import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setGalleryData(response.data);
      })
      .catch((error) => {
        console.log("Error getting gallery data", error);
      });
  };

  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList gallery={galleryData} />
    </div>
  );
} // end App

export default App;
