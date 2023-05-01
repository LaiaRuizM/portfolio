import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomeLRM from "./HomeLRM";
import AboutMe from "./AboutMe";
import projectListData from "../data/projects.json";
import ProjectList from "./ProjectList";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomeLRM />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route
            path="/projects"
            element={<ProjectList projectListData={projectListData} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
