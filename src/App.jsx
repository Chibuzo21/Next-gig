import "./App.css";

import Home from "./Pages/Landing/Home";

import Contact from "./Pages/Landing/Contact";
import About from "./Pages/Landing/About";
import Freelancers from "./Pages/Landing/Freelancers";
import Header from "./Components/Header";
import Employers from "./Pages/Landing/Employers";

function App() {
  return (
    <>
      <main>
        <Header />
        <div className="mt-20 overflow-x-hidden">
          <Home />
          <Freelancers />
          <Employers />
          <About />
          <Contact />
        </div>
      </main>
    </>
  );
}
export default App;
