import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import "../css/Home.css";

function Home() {
  const [currencyValue, setcurrencyValue] = useState(0.00001);
  return (
    <div className="d-flex flex-column">
      <div className="home-balance d-flex w-100 text-dark mb-3">
        <div className="d-flex flex-column w-100 align-items-center fw-bold py-3">
          <span className="fs-3 pb-3">WALLET BALANCE</span>
          <span className="fs-3 pb-3">TOKEN BALANCE:</span>
          <span className="fs-3 ">NAIRA BALANCE:</span>
        </div>
      </div>
      <div className="currency mt-3">
        <div className="background-grey p-2">
          <span className="text-primary">Select Currency:</span>
        </div>
        <div className="mt-3 px-1">
          <div className="d-flex w-100 bg-light">
            <span className="border fw-bold fs-4">TOKEN</span>
            <input
              type="number"
              value={currencyValue}
              onChange={(e) => setcurrencyValue(e.target.value)}
              className="w-100 home-input fw-bold ps-3"
              min={0.0}
            />
          </div>
          <div className="d-flex w-100  my-3">
            <div className="me-4 ms-1">
              <PrimaryButton>Send</PrimaryButton>
            </div>
            <div className="ms-4">
              <PrimaryButton>Receive</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="recent background-grey pb-4">
        <div className=" p-2 text-light fw-bold">Recent Activity</div>
        <div className="d-flex flex-column fw-bold fs-5 bg-light pe-2 ps-1  text-capitalize border border-dark">
          <div className="d-flex justify-content-between p-2">
            <span>Date</span>
            <span>Description</span>
            <span>Amount</span>
          </div>
          <div className="d-flex justify-content-between p-2">
            <span>1/1/21</span>
            <span>sent</span>
            <span>N100.00</span>
          </div>
          <div className="d-flex justify-content-between p-2">
            <span>2/2/21</span>
            <span>received</span>
            <span>N200.00</span>
          </div>
          <div className="d-flex justify-content-between p-2">
            <span>3/3/21</span>
            <span>sent</span>
            <span>N300.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
