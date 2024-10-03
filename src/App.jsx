import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
// import Home from "./Pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* <Route path="/" element={<Home />} /> */}
        </Route>
      </Routes>
    </>
  );
}
export default App;
