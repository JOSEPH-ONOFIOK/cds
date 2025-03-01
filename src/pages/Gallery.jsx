import React from 'react';
import './gallery.css';

// Import images correctly
import img1 from '../assets/second.jpg';
import img2 from '../assets/first.jpg';
import img3 from '../assets/first.jpg';


const nftImages = [img1, img2,img3];

const Gallery = () => (
  <main>
    <h1>Gallery</h1>
    <div className="gallery-grid">
      {nftImages.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`NFT ${index + 1}`} />
        </div>
      ))}
    </div>
  </main>
);

export default Gallery;
