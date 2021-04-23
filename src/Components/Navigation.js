import React from "react";
import {
  faBook,
  faGift,
  faHome,
  faStore,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";

function Navigation() {
  let items = [
    { name: "Home", url: "/", icon: faHome },
    { name: "Activity", url: "/activity", icon: faBook },
    { name: "Wallet", url: "/wallet", icon: faWallet },
    { name: "Market", url: "/market", icon: faStore },
    { name: "Earn", url: "/earn", icon: faGift },
  ];

  return (
    <nav className="d-flex flex-nowrap justify-content-around flex-wrap nav-icon-container bg-light">
      {items.map((x) => {
        return <Nav name={x.name} url={x.url} icon={x.icon} key={x.name} />;
      })}
    </nav>
  );
}

export default Navigation;
