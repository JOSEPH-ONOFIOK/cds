import React from 'react';
import firstImage from '../assets/second.jpg'; // Import image
import './home.css';

const Home = () => (
  <main>
    <h1>Art meets Absurdity, One SPLASH At a time</h1>
    <img src={firstImage} alt="Artistic representation" />
    <form>
      <label>
        X User Name*
        <input type="text" name="username" required />
      </label>
      <label>
        Solana Address*
        <input type="text" name="solanaAddress" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  </main>
);

export default Home;
