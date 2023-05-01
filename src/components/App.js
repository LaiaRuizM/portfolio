import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomeLRM from "./HomeLRM";
import AboutMe from "./AboutMe";
import PortfolioList from "./PortfolioList";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomeLRM />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<PortfolioList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
