import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import "./styles/Logic.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddEvent />} />
      </Routes>
    </Router>
  );
}
