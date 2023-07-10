import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckIcon from '@mui/icons-material/Check';
import './quizResult.css'
// import "./TakeQuiz.css"
// import "../BrowsePath/BrowsePath.css"
function QuizResult() {
  return (


<div className="mdk-header-layout__content page-content ">

                <div className="navbar navbar-list navbar-light bg-white border-bottom-2 border-bottom navbar-expand-sm">
                    <div className="container page__container">
                        <nav className="nav navbar-nav">
                            <div className="nav-item navbar-list__item">
                                <a href="/TakeQuiz" className="nav-link h-auto"><KeyboardBackspaceIcon className="material-icons icon--left"/> Back to Course</a>
                            </div>
                            <div className="nav-item navbar-list__item">
                                <div className="d-flex align-items-center flex-nowrap">
                                    <div className="mr-16pt">
                                        <a href="/takeQuiz"><img src="	https://luma.humatheme.com/public/images/paths/angular_64x64.png" width="40" alt="Angular" className="rounded"/></a>
                                    </div>
                                    <div className="flex">
                                        <a href="/TakeQuiz" className="card-title text-body mb-0">Angular Fundamentals</a>
                                        <p className="lh-1 d-flex align-items-center mb-0">
                                            <span className="text-50 small font-weight-bold mr-8pt">Shanu Rajput</span>
                                            <span className="text-50 small">Software Engineer and Developer</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="mdk-box bg-primary mdk-box--bg-gradient-primary2 js-mdk-box mb-0" data-effects="blend-background" data-domfactory-upgraded="mdk-box">
                    <div className="mdk-box__bg">
                        <div className="mdk-box__bg-front" >
                            </div>
                            <div className="mdk-box__bg-rear" >
                                </div>
                                </div>
                    <div className="mdk-box__content">
                        <div className="py-64pt text-center text-sm-left">
                            <div className="container d-flex flex-column justify-content-center align-items-center">
                                <p className="lead text-white-50 measure-lead-max mb-0">Submited on 02 Jan 2019</p>
                                <h1 className="text-white mb-24pt">Your Score: 350</h1>
                                <a href="/TakeQuiz" className="btn btn-outline-white">Restart quiz</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-expand-sm navbar-light navbar-submenu navbar-list p-0 m-0 align-items-center">
                    <div className="container page__container">
                        <ul className="nav navbar-nav flex align-items-sm-center">
                            <li className="nav-item navbar-list__item">350/450 Score</li>
                            <li className="nav-item navbar-list__item">
                                <ScheduleIcon className="material-icons text-muted icon--left"/>
                                12 minutes
                            </li>
                            <li className="nav-item navbar-list__item">
                                <AssessmentIcon className="material-icons text-muted icon--left"/>
                                Intermediate
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container page__container">
                    <div className=" page-section pl-32pt">

                        <div className="d-flex align-items-center page-num-container mb-16pt">
                            <div className="page-num">2</div>
                            <h4>Question 2 of 5</h4>
                        </div>

                        <p className="text-70 measure-lead mb-32pt mb-lg-48pt">An angular 2 project written in typescript is transpiled to javascript during the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?</p>

                        <ul className="list-quiz">
                            <li className="list-quiz-item">
                                <span className="list-quiz-badge">A</span>
                                <span className="list-quiz-text">Ability to use newer syntax and offers reliability</span>
                            </li>
                            <li className="list-quiz-item active">
                                <span className="list-quiz-badge bg-primary text-white">
                                    <CheckIcon className="material-icons"/></span>
                                <span className="list-quiz-text">Compatibility</span>
                            </li>
                            <li className="list-quiz-item">
                                <span className="list-quiz-badge">C</span>
                                <span className="list-quiz-text">Usage of missing features</span>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
  )
}
export default QuizResult;
