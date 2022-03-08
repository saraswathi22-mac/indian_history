import React from "react";
import { Link } from "react-router-dom";
import "./AncientHistory.css";

export const AncientHistory = () => {
  return (
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
  );
};
