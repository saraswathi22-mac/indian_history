import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="shadow">Indian History</div>
      <Link to="/overview-history">
        <div class="sub-main">
          <button class="button-two">
            <span>Let's get started</span>
          </button>
        </div>
      </Link>
    </>
  );
};

export default Main;
