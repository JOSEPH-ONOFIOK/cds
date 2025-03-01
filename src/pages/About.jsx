import React from 'react';
import './about.css';
import nftImage from '../assets/third.jpg'; // Import the NFT image

const About = () => (
  <main className="about-container">
    <div className="about-content">
      <h1>About</h1>
      <p>
        A collection of 500 AI-generated abstract pieces, each assigned a unique name 
        and minted on the Solana blockchain. No roadmap, no promises—just art.
      </p>
      <img src={nftImage} alt="NFT Artwork" className="nft-image" />
    </div>
  </main>
);

export default About;
