import Home from "./pages/home/Home";
// import List from "./pages/List/List";
// import Single from "./pages/Single/Single";
import Quizz from "./pages/quizz/quizz";
import CourseDetails from "./pages/course_details/coursedetails";
import Courses from "./pages/courses_catalog/courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/">
          <Route index element={<Home />} />
          </Route>
          <Route path="/CourseDetails">
            <Route index element={<CourseDetails/>}/>
          </Route>
          
          <Route path="/Courses" >
            <Route index element={<Courses />}/>
          </Route>
          <Route path="/quizz" >
            <Route index element={< Quizz/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
