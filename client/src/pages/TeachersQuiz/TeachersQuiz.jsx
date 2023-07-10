import React from 'react';
import {PlaylistAddCheck,KeyboardArrowRight,ChevronLeft,ChevronRight, MoreHoriz,MoreVert, } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
function TeachersQuiz() {
  return (
<div className="mdk-header-layout__content page-content " >

                <div className="pt-32pt">
                    <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                        <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">

                            <div className="mb-24pt mb-sm-0 mr-sm-24pt">
                                <h2 className="mb-0">Quizzes</h2>

                                <Breadcrumbs className="p-0 m-0" separator={<KeyboardArrowRight fontSize="small" />}>
                                    <a href="/" color="inherit" underline="none">
                                      Home</a>
                                    <a href="/" color="inherit" underline="none">
                                       Quizzes</a>
                                </Breadcrumbs>

                            </div>
                        </div>

                        <div className="row" role="tablist">
                            <div className="col-auto">
                                <a href="#" className="btn btn-outline-secondary">Add Quiz</a>
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
                                    <div className="flex">
                                        <a className="card-title" href="/">Angular Routing In-Depth</a>
                                        <div className="card-subtitle text-0"> completed</div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <div className="flex mr-2">
                                            <a href="#" className="btn btn-light btn-sm">
                                                <PlaylistAddCheck className="material-icons icon--left"/> Review
                                            </a>
                                        </div>

                                        <div className="dropdown">
                                        <a
                                           href="#"
                                           className="text-muted dropdown-toggle"
                                           id="dropdownMenuLink"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Review Quiz
                                                </a>
                                            </li>
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Edit Quiz
                                                </a>
                                           </li>
                                           <li>
                                              <hr className="dropdown-divider" href="/"/>
                                           </li>
                                            <li>
                                                <a className="dropdown-item text-danger">
                                                   Delete Quiz
                                                </a>
                                           </li>

                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-group-row__col col-md-6">
                            <div className="card card-group-row__card card-sm">
                                <div className="card-body d-flex align-items-center">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="https://luma.humatheme.com/public/images/paths/angular_testing_200x168.png" alt="Angular Unit Testing" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title" href="/">Angular Unit Testing</a>
                                        <div className="card-subtitle text-0"> completed</div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <div className="flex mr-2">
                                            <a href="#" className="btn btn-light btn-sm">
                                                <PlaylistAddCheck className="material-icons icon--left"/> Review
                                            </a>
                                        </div>

                                       
                                        <div className="dropdown">
                                        <a
                                           href="#"
                                           className="text-muted dropdown-toggle"
                                           id="dropdownMenuLink"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Review Quiz
                                                </a>
                                            </li>
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Edit Quiz
                                                </a>
                                           </li>
                                           <li>
                                              <hr className="dropdown-divider" href="/"/>
                                           </li>
                                            <li>
                                                <a className="dropdown-item text-danger">
                                                   Delete Quiz
                                                </a>
                                           </li>

                                        </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-group-row__col col-md-6">
                            <div className="card card-group-row__card card-sm">
                                <div className="card-body d-flex align-items-center">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="	https://luma.humatheme.com/public/images/paths/typescript_200x168.png" alt="Introduction to TypeScript" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title" href="/">Introduction to TypeScript</a>
                                        <div className="card-subtitle text-0"> completed</div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <div className="flex mr-2">
                                            <a href="#" className="btn btn-light btn-sm">
                                                <PlaylistAddCheck className="material-icons icon--left"/> Review
                                            </a>
                                        </div>

                                        
                                        <div className="dropdown">
                                        <a
                                           href="#"
                                           className="text-muted dropdown-toggle"
                                           id="dropdownMenuLink"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Review Quiz
                                                </a>
                                            </li>
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Edit Quiz
                                                </a>
                                           </li>
                                           <li>
                                              <hr className="dropdown-divider" href="/"/>
                                           </li>
                                            <li>
                                                <a className="dropdown-item text-danger">
                                                   Delete Quiz
                                                </a>
                                           </li>

                                        </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-group-row__col col-md-6">
                            <div className="card card-group-row__card card-sm">
                                <div className="card-body d-flex align-items-center">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="	https://luma.humatheme.com/public/images/paths/angular_200x168.png" alt="Angular Fundamentals" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title" href="/">Angular Fundamentals</a>
                                        <div className="card-subtitle text-0"> completed</div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center">
                                        <div className="flex mr-2">
                                            <a href="#" className="btn btn-light btn-sm">
                                                <PlaylistAddCheck className="material-icons icon--left"/> Review
                                            </a>
                                        </div>

                                       
                                        <div className="dropdown">
                                        <a
                                           href="#"
                                           className="text-muted dropdown-toggle"
                                           id="dropdownMenuLink"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Review Quiz
                                                </a>
                                            </li>
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Edit Quiz
                                                </a>
                                           </li>
                                           <li>
                                              <hr className="dropdown-divider" href="/"/>
                                           </li>
                                            <li>
                                                <a className="dropdown-item text-danger">
                                                   Delete Quiz
                                                </a>
                                           </li>

                                        </ul>
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
                                    <ChevronLeft aria-hidden="true" className="material-icons"/>
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
                                    <ChevronRight aria-hidden="true" className="material-icons"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="card stack">
                        <div className="list-group list-group-flush">

                            <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                                <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="	https://luma.humatheme.com/public/images/paths/mailchimp_200x168.png" alt="Newsletter Design" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title mb-4pt" href="/">Newsletter Design</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex text-center d-flex align-items-center mr-16pt">
                                        <span className="text-0 text-headings text-uppercase mr-12pt">Completed</span>
                                        
                                    </div>

                                    
                                    <div className="dropdown">
                                        <a
                                           href="#"
                                           className="text-muted dropdown-toggle"
                                           id="dropdownMenuLink"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Review Quiz
                                                </a>
                                            </li>
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Edit Quiz
                                                </a>
                                           </li>
                                           <li>
                                              <hr className="dropdown-divider" href="/"/>
                                           </li>
                                            <li>
                                                <a className="dropdown-item text-danger">
                                                   Delete Quiz
                                                </a>
                                           </li>

                                        </ul>
                                        </div>

                                </div>
                            </div>

                            <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                                <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="	https://luma.humatheme.com/public/images/paths/xd_200x168.png" alt="Adobe XD" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title mb-4pt" href="/">Adobe XD</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex text-center d-flex align-items-center mr-16pt">
                                        <span className="text-0 text-headings text-uppercase mr-12pt">Completed</span>
                                        
                                    </div>

                                    
                                    <div className="dropdown">
                                        <a
                                           href="#"
                                           className="text-muted dropdown-toggle"
                                           id="dropdownMenuLink"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Review Quiz
                                                </a>
                                            </li>
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Edit Quiz
                                                </a>
                                           </li>
                                           <li>
                                              <hr className="dropdown-divider" href="/"/>
                                           </li>
                                            <li>
                                                <a className="dropdown-item text-danger">
                                                   Delete Quiz
                                                </a>
                                           </li>

                                        </ul>
                                        </div>

                                </div>
                            </div>

                            <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                                <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="https://luma.humatheme.com/public/images/paths/invision_200x168.png" alt="inVision App" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title mb-4pt" href="/">inVision App</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex text-center d-flex align-items-center mr-16pt">
                                        <span className="text-0 text-headings text-uppercase mr-12pt">Completed</span>
                                        
                                    </div>

                                    
                                    <div className="dropdown">
                                        <a
                                           href="#"
                                           className="text-muted dropdown-toggle"
                                           id="dropdownMenuLink"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Review Quiz
                                                </a>
                                            </li>
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Edit Quiz
                                                </a>
                                           </li>
                                           <li>
                                              <hr className="dropdown-divider" href="/"/>
                                           </li>
                                            <li>
                                                <a className="dropdown-item text-danger">
                                                   Delete Quiz
                                                </a>
                                           </li>

                                        </ul>
                                        </div>

                                </div>
                            </div>

                            <div className="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                                <div className="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                                    <a href="/" className="avatar overlay overlay--primary avatar-4by3 mr-12pt">
                                        <img src="https://luma.humatheme.com/public/images/paths/craft_200x168.png" alt="Craft by inVision" className="avatar-img rounded"/>
                                        <span className="overlay__content"></span>
                                    </a>
                                    <div className="flex">
                                        <a className="card-title mb-4pt" href="/">Craft by inVision</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex text-center d-flex align-items-center mr-16pt">
                                        <span className="text-0 text-headings text-uppercase mr-12pt">Completed</span>
                                        
                                    </div>

                                    
                                    <div className="dropdown">
                                        <a
                                           href="#"
                                           className="text-muted dropdown-toggle"
                                           id="dropdownMenuLink"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Review Quiz
                                                </a>
                                            </li>
                                           <li>
                                                <a className="dropdown-item" href="/">
                                                    Edit Quiz
                                                </a>
                                           </li>
                                           <li>
                                              <hr className="dropdown-divider" href="/"/>
                                           </li>
                                            <li>
                                                <a className="dropdown-item text-danger">
                                                   Delete Quiz
                                                </a>
                                           </li>

                                        </ul>
                                        </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <ul className="pagination justify-content-start pagination-xsm m-0">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" aria-label="Previous">
                                <ChevronLeft aria-hidden="true" className="material-icons"/>
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
                                <ChevronRight aria-hidden="true" className="material-icons"/>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            );
}

export default TeachersQuiz;