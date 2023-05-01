import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomeLRM from "./HomeLRM";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import projectListData from "../data/projects.json";
import Contact from "./Contact";
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
