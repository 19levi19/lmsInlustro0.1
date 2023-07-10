import TakeLesson from "./pages/TakeLesson/TakeLesson";
import Login from "./pages/Login/login";
import Home from "./pages/home/Home";
import Homepage from "./pages/homepage/homepage2"
import TakeQuiz from "./pages/TakeQuiz/TakeQuiz";
import BrowsePath from "./pages/BrowsePath/BrowsePath";
import MyQuizzes from "./pages/MyQuizzes/MyQuizzes";
import QuizResult from "./pages/TakeQuiz/QuizResult";
import SkillAssessment from "./pages/SkillAssessment/SkillAssessment";
import SkillResult from "./pages/SkillAssessment/SkillResult";
import LessonPreview from "./pages/LessonPreview/LessonPreview";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import TeachersQuiz from "./pages/TeachersQuiz/TeachersQuiz";
import NewQuestion from "./pages/NewQuestion/NewQues";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/homepag2"></Route>
          <Route index element={<Homepage />} />
          <Route path="Homepage" element={<Homepage/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="TakeQuiz" element={<TakeQuiz/>}/>
          <Route path="QuizResult" element={<QuizResult/>}/>
          <Route path="MyQuizzes" element={<MyQuizzes/>}/>
          <Route path="BrowsePath" element={<BrowsePath/>}/>
          <Route path="SkillAssessment" element={<SkillAssessment/>}/>
          <Route path="SkillResult" element={<SkillResult/>}/>
          <Route path="TakeLesson" element={<TakeLesson/>}/>
          <Route path="LessonPreview" element={<LessonPreview/>}/>
          <Route path="TeachersQuiz" element={<TeachersQuiz/>}/>
          <Route path="NewQuestion" element={<NewQuestion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
