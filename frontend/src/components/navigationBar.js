import React from 'react';
import { Link } from 'react-router-dom';
import './navigationBar.css';

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nfts">All NFTs</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/mint">Mint NFT</Link>
        </li>
        <li>
          <Link to="/sell">Sell NFT</Link>
        </li>
        <li>
          <Link to="/connect-wallet">Connect Wallet</Link>
        </li>
        {/* You can add more links here as needed */}
      </ul>
    </nav>
  );
}

export default NavigationBar;