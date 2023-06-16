import course_catalog_page from "./pages/course_catalog_page/course"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <course_catalog_page/>
    </div>
  );
}

export default App;
