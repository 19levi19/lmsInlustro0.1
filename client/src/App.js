<<<<<<< HEAD

import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
=======
import course_catalog_page from "./pages/course_catalog_page/course"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

>>>>>>> 16783542d2a5779a1851090babade75e745bbed6

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
      <Routes>
        <Route path="/home">

        </Route>
      </Routes>
      </BrowserRouter>
=======
     <course_catalog_page/>
>>>>>>> 16783542d2a5779a1851090babade75e745bbed6
    </div>
  );
}

export default App;
