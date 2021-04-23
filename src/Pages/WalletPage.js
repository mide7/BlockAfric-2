import React from "react";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";

function WalletPage() {
  return (
    <div className="Page-layout">
      <Header />
      <div className="ps-2 color-primary">
        <h1>Wallet</h1>
      </div>
      <Navigation />
    </div>
  );
}

export default WalletPage;
