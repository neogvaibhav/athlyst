import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addmatch" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
