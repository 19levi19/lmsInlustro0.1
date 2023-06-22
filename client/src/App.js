import QuizMain from "./pages/quizz/QuizMain"
import CourseDetailsSb from "./pages/courseDetails/CourseDetailsSb";
import Login from "./pages/Login/login";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Notification from "./pages/settings/notifictation";
import Profile from "./pages/profile/Profile"
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
