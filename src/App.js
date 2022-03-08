import "./App.css";
import { Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider/Slider";
// import { Slider } from "./Components/Scroll/Slider";
import Text from "./Components/Main/Text";
import { TextData } from "./Components/TextData/TextData";
import { Myname } from "./Components/Myname/Myname";
import Main from "./Components/Main/Main";
import { PageNotFound } from "./Components/PageNotFound/PageNotFound";
import { OverviewHistory } from "./Components/OverviewHistory/OverviewHistory";
import { AncientHistory } from "./Components/AncientHistory/AncientHistory";
import { Sources } from "./Components/AncientHistory/AncientChapters/Sources";
import { StoneAge } from "./Components/AncientHistory/AncientChapters/StoneAge/StoneAge";

function App() {
  const subtitle = [
    "Our platform offers a wide variety of unique travel locations!",
  ];
  return (
    <Routes>
      {/* <Slider /> */}
      <Route path="/" element={<Main />} />
      <Route path="/overview-history" element={<OverviewHistory />} />
      <Route path="/ancient-history" element={<AncientHistory />} />
      <Route path="/ancient-history/sources" element={<Sources />} />
      <Route path="/ancient-history/stone-age" element={<StoneAge />} />
      <Route path="/medieval-history" element={<div>Medieval</div>} />
      <Route path="/history" element={<div>History</div>} />
      <Route path="/modern-history" element={<div>Modern</div>} />
      <Route path="*" element={<PageNotFound />} />
      {/* <TextData />
      <Myname /> */}
    </Routes>
  );
}

export default App;
