import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { KeyboardArrowRight } from '@mui/icons-material';
// import '../BrowsePath/BrowsePath.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Breadcrumbs } from '@mui/material';
import Typography from '@mui/material';
import './MyQuizzes.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const MyQuizzes = () => {
  return (

    <div className="content page-content ">

                <div className="pt-32pt">
                    <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                        <div className="flex d-flex flex-column flex-sm-row align-items-center">

                            <div className="mb-24pt mb-sm-0 mr-sm-24pt">
                                <h2 className="mb-0">Quizzes</h2>

                                <Breadcrumbs className="p-0 m-0" separator={<KeyboardArrowRight fontSize="small" />}>
                                    <a href="/" color="inherit" underline="none">
                                      Home</a>
                                    <a href="/" color="inherit" underline="none">
                                       Student</a>
                                    <a href="/" color="inherit" underline="none">
                                        Home</a>
                                </Breadcrumbs>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="container page__container page-section">

                    <div className="row card-group-row">

                        <div className="card-group-row__col col-md-6">

                            <div className="card card-group-row__card card-sm">
                                <div className="card-body d-flex align-items-center">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="https://luma.humatheme.com/public/images/paths/angular_routing_200x168.png" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex mr-12pt">
                                        <a className="card-title" href="/TakeQuiz">Angular Routing In-Depth</a>
                                        <div className="card-subtitle text-50">12 min ago</div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="lead text-headings lh-1">5.8</span>
                                        <small className="text-50 text-uppercase text-headings">Score</small>
                                    </div>
                                </div>

                                <div className="progress rounded-0">
                                    <div className="progress-bar bg-primary" role="progressbar" ></div>
                                </div>

                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <div className="flex mr-2">
                                            <a href="/TakeQuiz" className="btn btn-light btn-sm">

                                                <RefreshIcon className="material-icons icon--left"/> Continue

                                            </a>
                                        </div>

                                        <div className="dropdown">
                                            <a href="#" data-toggle="dropdown" data-caret="false" className="text-muted"><MoreHorizIcon className="material-icons"/></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="/" className="dropdown-item">Continue</a>
                                                <a href="/" className="dropdown-item">View Result</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="/" className="dropdown-item text-danger">Reset Quiz</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="card-group-row__col col-md-6">

                            <div className="card card-group-row__card card-sm">
                                <div className="card-body d-flex align-items-center">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="	https://luma.humatheme.com/public/images/paths/angular_testing_200x168.png" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex mr-12pt">
                                        <a className="card-title" href="/">Angular Unit Testing</a>
                                        <div className="card-subtitle text-50">2 days ago</div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="lead text-headings lh-1">10</span>
                                        <small className="text-50 text-uppercase text-headings">Score</small>
                                    </div>
                                </div>

                                <div className="progress rounded-0" >
                                    <div className="progress-bar bg-primary" role="progressbar" ></div>
                                </div>

                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <div className="flex mr-2">
                                            <a href="/" className="btn btn-light btn-sm">

                                            <RefreshIcon className="material-icons icon--left"/> Continue

                                            </a>
                                        </div>

                                        <div className="dropdown">
                                            <a href="#" data-toggle="dropdown" data-caret="false" className="text-muted"><MoreHorizIcon className="material-icons"/></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="/" className="dropdown-item">Continue</a>
                                                <a href="/" className="dropdown-item">View Result</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="/" className="dropdown-item text-danger">Reset Quiz</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="card-group-row__col col-md-6">

                            <div className="card card-group-row__card card-sm">
                                <div className="card-body d-flex align-items-center">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="https://luma.humatheme.com/public/images/paths/typescript_200x168.png"  className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex mr-12pt">
                                        <a className="card-title" href="/">Introduction to TypeScript</a>
                                        <div className="card-subtitle text-50">3 days ago</div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="lead text-headings lh-1">2.8</span>
                                        <small className="text-50 text-uppercase text-headings">Score</small>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <div className="flex mr-2">
                                            <a href="/" className="btn btn-light btn-sm">

                                                <PlaylistAddCheckIcon className="material-icons icon--left"/> Reset
                                                <span className="badge badge-dark badge-notifications ml-2"></span>

                                            </a>
                                        </div>

                                        <div className="dropdown">
                                            <a href="#" data-toggle="dropdown" data-caret="false" className="text-muted"><MoreHorizIcon className="material-icons"/></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="/" className="dropdown-item">Continue</a>
                                                <a href="/" className="dropdown-item">View Result</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="/" className="dropdown-item text-danger">Reset Quiz</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="card-group-row__col col-md-6">

                            <div className="card card-group-row__card card-sm">
                                <div className="card-body d-flex align-items-center">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="	https://luma.humatheme.com/public/images/paths/angular_200x168.png" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex mr-12pt">
                                        <a className="card-title" href="/">Angular Fundamentals</a>
                                        <div className="card-subtitle text-50">3 days ago</div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="lead text-headings lh-1">3.3</span>
                                        <small className="text-50 text-uppercase text-headings">Score</small>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <div className="flex mr-2">
                                            <a href="/" className="btn btn-light btn-sm">

                                                <PlaylistAddCheckIcon className="material-icons icon--left"/> Reset
                                                <span className="badge badge-dark badge-notifications ml-2"></span>

                                            </a>
                                        </div>

                                        <div className="dropdown">
                                            <a href="#" data-toggle="dropdown" data-caret="false" className="text-muted">
                                                <MoreHorizIcon className="material-icons"/></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="/" className="dropdown-item">Continue</a>
                                                <a href="/" className="dropdown-item">View Result</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="/" className="dropdown-item text-danger">Reset Quiz</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="mb-32pt">

                        <ul className="pagination justify-content-start pagination-xsm m-0">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true" ><ChevronLeftIcon className="material-icons"/></span>
                                    <span>Prev</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Page 1">
                                    <span>1</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Page 2">
                                    <span>2</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span>Next</span>
                                    <span aria-hidden="true" ><ChevronRightIcon className="material-icons"/></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="card stack">
                        <div className="list-group list-group-flush">

                            <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                                <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="https://luma.humatheme.com/public/images/paths/mailchimp_200x168.png" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title" href="/">Newsletter Design</a>
                                        <div className="card-subtitle text-50">12 min ago</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center mr-16pt">
                                    <span className="lead text-headings lh-1">5.8</span>
                                    <small className="text-50 text-uppercase text-headings">Score</small>
                                </div>

                                <div className="dropdown">
                                    <a href="#" data-toggle="dropdown" data-caret="false" className="text-muted">
                                        <MoreHorizIcon className="material-icons"/></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="/" className="dropdown-item">Continue</a>
                                        <a href="/" className="dropdown-item">View Result</a>
                                        <div className="dropdown-divider"></div>
                                        <a href="/" className="dropdown-item text-danger">Reset Quiz</a>
                                    </div>
                                </div>

                            </div>

                            <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                                <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="https://luma.humatheme.com/public/images/paths/xd_200x168.png" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title" href="/">Adobe XD</a>
                                        <div className="card-subtitle text-50">2 days ago</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center mr-16pt">
                                    <span className="lead text-headings lh-1">10</span>
                                    <small className="text-50 text-uppercase text-headings">Score</small>
                                </div>

                                <div className="dropdown">
                                    <a href="#" data-toggle="dropdown" data-caret="false" className="text-muted">
                                        <MoreHorizIcon className="material-icons"/></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="/" className="dropdown-item">Continue</a>
                                        <a href="/" className="dropdown-item">View Result</a>
                                        <div className="dropdown-divider"></div>
                                        <a href="/" className="dropdown-item text-danger">Reset Quiz</a>
                                    </div>
                                </div>

                            </div>

                            <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                                <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="https://luma.humatheme.com/public/images/paths/invision_200x168.png" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title" href="/">inVision App</a>
                                        <div className="card-subtitle text-50">3 days ago</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center mr-16pt">
                                    <span className="lead text-headings lh-1">2.8</span>
                                    <small className="text-50 text-uppercase text-headings">Score</small>
                                </div>

                                <div className="dropdown">
                                    <a href="#" data-toggle="dropdown" data-caret="false" className="text-muted">
                                        <MoreHorizIcon className="material-icons"/></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="/" className="dropdown-item">Continue</a>
                                        <a href="/" className="dropdown-item">View Result</a>
                                        <div className="dropdown-divider"></div>
                                        <a href="/" className="dropdown-item text-danger">Reset Quiz</a>
                                    </div>
                                </div>

                            </div>

                            <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                                <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="https://luma.humatheme.com/public/images/paths/craft_200x168.png" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title" href="/">Craft by inVision</a>
                                        <div className="card-subtitle text-50">3 days ago</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center mr-16pt">
                                    <span className="lead text-headings lh-1">3.3</span>
                                    <small className="text-50 text-uppercase text-headings">Score</small>
                                </div>

                                <div className="dropdown">
                                    <a href="#" data-toggle="dropdown" data-caret="false" className="text-muted"><MoreHorizIcon className="material-icons"/></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="/" className="dropdown-item">Continue</a>
                                        <a href="/" className="dropdown-item">View Result</a>
                                        <div className="dropdown-divider"></div>
                                        <a href="/" className="dropdown-item text-danger">Reset Quiz</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <ul className="pagination justify-content-start pagination-xsm m-0">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true"><ChevronLeftIcon className="material-icons"/></span>
                                <span>Prev</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Page 1">
                                <span>1</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Page 2">
                                <span>2</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span>Next</span>
                                <span aria-hidden="true"><ChevronRightIcon className="material-icons"/></span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            


  )
  }

export default MyQuizzes;
