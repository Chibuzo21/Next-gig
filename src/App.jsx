import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Pages/Home";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Freelancers from "./Pages/Freelancers";
import Employers from "./Pages/Employers";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/works" element={<Works />} />

          <Route path="/employers" element={<Employers />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
