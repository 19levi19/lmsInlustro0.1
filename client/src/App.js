

// import _course_catalog_page from "./pages/course_catalog_page/course";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// eslint-disable-next-line 
const Home = require('./pages/home/Home.jsx')


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route
         path="/home">
      </Route>
      </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
