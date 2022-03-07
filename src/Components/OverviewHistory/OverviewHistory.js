import { Link } from "react-router-dom";
import "./OverviewHistory.css";

export const OverviewHistory = () => {
  return (
    <div class="wrapper">
      <p class="title">HISTORY Overview</p>
      <Link to="/ancient-history">
        <div class="clip-text clip-text_seven clip-text--cover">
          ANCIENT HISTORY
        </div>
      </Link>
      <Link to="/medieval-history">
        <div class="clip-text clip-text_eight clip-text--cover">
          MEDIEVAL HISTORY
        </div>
      </Link>
      <Link to="/history">
        <div class="clip-text clip-text_eleven clip-text--cover">HISTORY</div>
      </Link>
      <Link to="/modern-history">
        <div class="clip-text clip-text_nine clip-text--cover">
          MODERN HISTORY
        </div>
      </Link>
    </div>
  );
};
