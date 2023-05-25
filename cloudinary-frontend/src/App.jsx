import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddMovie from "./pages/AddMovie";

function App() {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <nav style={{ height: "10vh" }}>
        <Link to="/create">Create movie</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
