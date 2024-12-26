import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./Component/Sidebar";
import { Home } from "./Component/Home";
import { Search } from "./Component/Search";

const App = () => {
  return (
    <Router>
      <div className="flex bg-base-200 min-h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
