import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import StyleIcon from '@mui/icons-material/Style';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import QuizIcon from '@mui/icons-material/Quiz';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import FaceIcon from '@mui/icons-material/Face';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PollIcon from '@mui/icons-material/Poll';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import TimelineIcon from '@mui/icons-material/Timeline';
import LayersIcon from '@mui/icons-material/Layers';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DvrIcon from '@mui/icons-material/Dvr';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ClassIcon from '@mui/icons-material/Class';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
const Sidebar = () => { 
  const [isStudentMenuOpen, setStudentMenuOpen] = useState(false);

  const toggleStudentMenu = () => {
    setStudentMenuOpen(!isStudentMenuOpen);
  };

  return (
    <div className="sidebar sidebar-dark-pickled-bluewood sidebar-left ps ps--active-y" data-perfect-scrollbar="">
                    <div className="d-flex align-items-center navbar-height">
                        <form action="/" className="search-form search-form--black mx-16pt pr-0 pl-16pt">
                            <input type="text" className="form-control pl-0" placeholder="Search"/>
                            <button className="btn" type="submit"><SearchIcon className="material-icons"/></button>
                        </form>
                    </div>

                    <a href="/" className="sidebar-brand ">
                       <img className="sidebar-brand-icon" src="" alt=""/>

                        <span className="avatar avatar-xl sidebar-brand-icon h-auto">

                            <span className="avatar-title rounded bg-primary"><img src="" className="img-fluid" alt=""/></span>

                        </span>
                    </a>

                    <div className="sidebar-heading">Student</div>
                    <ul className="sidebar-menu">

                        <li className="sidebar-menu-item active">
                            <a className="sidebar-menu-button" href="/">
                                <HomeIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Home</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="courses.html">
                                <LibraryBooksIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Browse Courses</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="paths.html">
                                <StyleIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Browse Paths</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-dashboard.html">
                                <AccountBoxIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Student Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-my-courses.html">
                                <SearchIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">My Courses</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-paths.html">
                                <TimelineIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">My Paths</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-path.html">
                                <ChangeHistoryIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Path Details</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-course.html">
                                <FaceIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Course Preview</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-lesson.html">
                                <PanoramaFishEyeIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Lesson Preview</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-take-course.html">
                                <ClassIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Take Course</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-take-lesson.html">
                                <ImportContactsIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Take Lesson</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-take-quiz.html">
                                <DvrIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Take Quiz</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-quiz-results.html">
                                <PollIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">My Quizzes</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-quiz-result-details.html">
                                <LiveHelpIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Quiz Result</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-path-assessment.html">
                                <LayersIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Skill Assessment</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="student-path-assessment-result.html">
                                <AssignmentTurnedInIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Skill Result</span>
                            </a>
                        </li>

                    </ul>
                    <div className="sidebar-heading">Instructor</div>
                    <ul className="sidebar-menu">

                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="instructor-dashboard.html">
                                <SchoolIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Instructor Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="instructor-courses.html">
                                <ImportContactsIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Manage Courses</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="instructor-quizzes.html">
                                <LiveHelpIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Manage Quizzes</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="instructor-earnings.html">
                                <TrendingUpIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Earnings</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="instructor-statement.html">
                                <DescriptionIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Statement</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="instructor-edit-course.html">
                                <PostAddIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Edit Course</span>
                            </a>
                        </li>
                        <li className="sidebar-menu-item">
                            <a className="sidebar-menu-button" href="instructor-edit-quiz.html">
                                <QuizIcon className="material-icons sidebar-menu-icon sidebar-menu-icon--left"/>
                                <span className="sidebar-menu-text">Edit Quiz</span>
                            </a>
                        </li>

                    </ul>
                    </div>
  );
}

export default Sidebar;
