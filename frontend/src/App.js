import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import NftListingsPage from './pages/nftListingsPage';
import NftDetailsPage from './pages/nftDetailsPage';
import UserProfilePage from './pages/userProfilePage';
import MintNftPage from './pages/mintNftPage';
import SellNftPage from './pages/sellNftPage';
import BuyNftPage from './pages/buyNftPage';
import TradeNftPage from './pages/tradeNftPage';
import ConnectWalletPage from './pages/connectWalletPage';
import NavigationBar from './components/navigationBar';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
      <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nfts" element={<NftListingsPage />} />
          <Route path="/nft/:id" element={<NftDetailsPage />} /> {/* :id - це параметр для ідентифікатора NFT */}
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/mint" element={<MintNftPage />} />
          <Route path="/sell" element={<SellNftPage />} />
          <Route path="/buy/:id" element={<BuyNftPage />} /> {/* :id - це параметр для ідентифікатора NFT */}
          <Route path="/trade/:id" element={<TradeNftPage />} /> {/* :id - це параметр для ідентифікатора NFT */}
          <Route path="/connect-wallet" element={<ConnectWalletPage />} />
        </Routes>
        {/* Тут ви можете додати спільний футер */}
      </div>
    </Router>
  );
}

export default App;