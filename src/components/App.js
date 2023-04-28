import { Route, Routes } from "react-router-dom";
import HomeLRM from "./HomeLRM";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomeLRM />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
