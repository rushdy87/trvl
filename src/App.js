import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
