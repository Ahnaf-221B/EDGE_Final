import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./Component/Sidebar";
import { Home } from "./Component/Home";
import { Search } from "./Component/Search";

const App = () => {
  return (
    <Router> 
      <div className="flex fixed w-full ">
        <Sidebar  />
      <div className="flex bg-gray-200 w-full rounded-lg">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      </div>
      
    </Router>
  );
};

export default App;
