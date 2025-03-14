import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/index.jsx";
import Home from "./pages/home/index.jsx";
import Details from "./pages/details/index.jsx";
import Favourites from "./pages/favourites/index.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className=" min-h-screen p-5 text-gray-700 text-lg ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
