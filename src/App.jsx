import NavBar from "./component/NavBar";
import Create from "./component/Create";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Read from "./component/Read";
import Update from "./component/Update";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
