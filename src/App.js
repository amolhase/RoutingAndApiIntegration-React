import "./App.css";
import GallaryComponent from "./Components/GallaryComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotoDetails from "./Components/PhotoDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <GallaryComponent /> */}
      </div>
      <Routes>
        <Route path="/" element={<GallaryComponent />}/>
        <Route path="/photoDetails/:id" element={<PhotoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
