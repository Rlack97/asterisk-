import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Info";
import Landing from "./components/Landing";

function App() {
  return (
    <BrowserRouter className="App" basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
