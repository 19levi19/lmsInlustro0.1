import Home from "./pages/home/Home";
// import List from "./pages/List/List";
// import Single from "./pages/Single/Single";
// import New from "./pages/New/New";
import Courses from "./pages/courses_catalog/courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Courses">
              <Route index element={<Courses />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
