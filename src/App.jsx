import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Blogs from "./components/sections/Blogs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>
  );
}

export default App;
