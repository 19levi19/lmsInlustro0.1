import QuizMain from "./pages/quizz/QuizMain"
import CourseDetailsSb from "./pages/courseDetails/CourseDetailsSb";
import Login from "./pages/Login/login";
import Home from "./pages/home/Home";
<<<<<<< HEAD
import List from "./pages/list/List";
import Notification from "./pages/settings/notifictation";
import Profile from "./pages/profile/Profile"
=======
// import List from "./pages/List/List";
// import Single from "./pages/Single/Single";
import Quizz from "./pages/quizz/quizz";
import CourseDetails from "./pages/course_details/coursedetails";
import Courses from "./pages/courses_catalog/courses";
>>>>>>> refs/remotes/origin/main
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/"></Route>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login/>}/>
          <Route path="Course" element={<CourseDetailsSb/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Profile" element={<Profile/>}/>
          <Route path="NotifSettings" element={<Notification/>}/>
          <Route path="QuizMain" element={<QuizMain/>}/>
          <Route path="/list">/
            <Route index element={<List/>}/>
            <Route path=":userId" element={<single/>}/>
            <Route path="new" element={<new/>}/>  
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
