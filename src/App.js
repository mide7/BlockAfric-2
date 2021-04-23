import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivityPage from "./Pages/ActivityPage";
import EarnPage from "./Pages/EarnPage";
import HomePage from "./Pages/HomePage";
import MarketPage from "./Pages/MarketPage";
import WalletPage from "./Pages/WalletPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/activity" component={ActivityPage} />
        <Route exact path="/wallet" component={WalletPage} />
        <Route exact path="/market" component={MarketPage} />
        <Route exact path="/earn" component={EarnPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
