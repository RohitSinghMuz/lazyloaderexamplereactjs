import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
