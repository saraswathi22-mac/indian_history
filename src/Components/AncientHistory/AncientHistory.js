import React from "react";
import { Link } from "react-router-dom";
import "./AncientHistory.css";

export const AncientHistory = () => {
  return (
    <>
      <div className="ancient-title">Ancient History</div>
      <h2>Making History</h2>
      <h4>1. PreHistory - no history, no written doc; stone age: </h4>
      <h6>
        a. Stone age: 2million - 4000BC b. Copper age/charcolithic: 4000-1500BC
        c. Iron age: 1500BC-600BC
      </h6>
      <h4>
        2. Protohistory - records but cannot be understood; indus valley
        civilization etc
      </h4>
      <h4>
        3. History - with understandable records; medieval, modern history
      </h4>
      <div className="card">
        <div className="card-container">
          <div className="overview-container">
            <Link to="/ancient-history/sources">
              <button className="button">Read more</button>
            </Link>
            <div className="title-container">
              <h1>Sources</h1>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="overview-container">
            <Link to="/ancient-history/stone-age">
              <button className="button">Read more</button>
            </Link>
            <div className="title-container">
              <h1>Stone Age</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
