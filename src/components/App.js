import { Route, Routes } from "react-router-dom";
import HomeLRM from "./HomeLRM";
import AboutMe from "./AboutMe";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomeLRM />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
