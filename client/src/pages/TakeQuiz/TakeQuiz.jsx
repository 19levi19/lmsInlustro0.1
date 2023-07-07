import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TuneIcon from '@mui/icons-material/Tune';
import React from "react"
import "./TakeQuiz.css"
import "../BrowsePath/BrowsePath.css"
function TakeQuiz() {
  return (
<div>
    <div className="navbar navbar-list navbar-light bg-white border-bottom-2 border-bottom navbar-expand-sm">
                    <div className="container page__container">
                        <nav className="nav navbar-nav">
                            <div className="nav-item navbar-list__item">
                                <a href="/" className="nav-link h-auto"><KeyboardBackspaceIcon className="material-icons icon--left"/> Back to Course</a>
                            </div>
                            <div className="nav-item navbar-list__item">
                                <div className="d-flex align-items-center flex-nowrap">
                                    <div className="mr-16pt">
                                        <a href="/"><img src="https://luma.humatheme.com/public/images/paths/angular_64x64.png" width="40" alt="Angular" className="rounded"/></a>
                                    </div>
                                    <div className="flex">
                                        <a href="/" className="card-title text-body mb-0">Angular Fundamentals</a>
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
                <div className="bg-primary pb-lg-64pt py-32pt">
                    <div className="container page__container">
                        <nav className="course-nav">
                            <a href="student-take-lesson.html" data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Introduction" data-original-title="" title=""><CheckCircleOutlineIcon className="material-icons"/></a>
                            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Introduction to TypeScript" href="student-take-lesson.html" data-original-title="" title=""><CheckCircleOutlineIcon className="material-icons"/></a>
                            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Comparing Angular to AngularJS" href="student-take-lesson.html" data-original-title="" title=""><CheckCircleOutlineIcon className="material-icons"/></a>
                            <a href="student-take-quiz.html" data-toggle="tooltip" data-placement="bottom" data-title="Quiz: Getting Started with Angular" data-original-title="" title=""><CheckCircleOutlineIcon className="material-icons text-primary"/></a>
                        </nav>

                        <div className="d-flex flex-wrap align-items-end justify-content-end mb-16pt">
                            <h1 className="text-white flex m-0">Question 1 of 5</h1>
                            <p className="h1 text-white-50 font-weight-light m-0">00:14</p>
                        </div>

                        <p className="hero__lead measure-hero-lead text-white-50">An angular 2 project written in typescript is transpiled to javascript during the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?</p>
                    </div>
                </div>
                <div className="navbar navbar-expand-md navbar-list navbar-light bg-white border-bottom-2 ">
                    <div className="container page__container">
                        <ul className="nav navbar-nav flex navbar-list__item">
                            <li className="nav-item">
                                <TuneIcon className="material-icons text-50 mr-8pt"/>
                                Choose the correct answer below:
                            </li>
                        </ul>
                        <div className="nav navbar-nav ml-sm-auto navbar-list__item">
                            <div className="nav-item d-flex flex-column flex-sm-row ml-sm-16pt">
                                <a href="/" className="btn justify-content-center btn-outline-secondary ml-sm-16pt">Skip Quiz</a>
                                <a href="/" className="btn justify-content-center btn-outline-secondary  ml-sm-16pt">Review Video</a>
                                <a href="/QuizResult" className="btn justify-content-center btn-accent  ml-sm-16pt">Next Question <KeyboardArrowRightIcon className="material-icons icon--right"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container page__container">
                    <div class="page-section">
                        <div class="page-separator">
                            <div class="page-separator__text">Your Answer</div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input id="customCheck01" type="checkbox" class="custom-control-input"/>
                                <label for="customCheck01" class="custom-control-label">Ability to use newer syntax and offers reliability</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input id="customCheck02" type="checkbox" class="custom-control-input"/>
                                <label for="customCheck02" class="custom-control-label">Compatibility</label>
                            </div>
                        </div>
                        <div class="form-group mb-32pt mb-lg-48pt">
                            <div class="custom-control custom-checkbox">
                                <input id="customCheck03" type="checkbox" class="custom-control-input"/>
                                <label for="customCheck03" class="custom-control-label">Usage of missing features</label>
                            </div>
                        </div>

                        <p class="text-50 mb-0">Note: There can be multiple correct answers to this question.</p>
                    </div>
                </div>
</div>
  )
}
export default TakeQuiz;
