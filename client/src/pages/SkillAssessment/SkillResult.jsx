import React from 'react';
import { PlayCircleOutline,Schedule,StarBorder,FavoriteBorder,ArrowBackOutlined } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import './SkillResult.css'
function SkillResult (){
return (

    <div className="mdk-header-layout__content page-content " >

                <div className="mdk-box bg-primary mdk-box--bg-primary " data-effects="blend-background" data-domfactory-upgraded="mdk-box">
                    <div className="mdk-box__bg">
                        <div className="mdk-box__bg-front" >
                    </div>
                    </div>
                    <div className="mdk-box__content">
                        <div className="hero py-64pt text-center text-sm-left">
                            <div className="container page__container">
                                <div className="d-flex flex-column flex-sm-row">
                                    <div className="order-1 order-sm-0">
                                        <h1 className="text-white">Learn Angular</h1>
                                        <p className="lead text-white-50 measure-hero-lead mb-24pt">It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.</p>
                                        <a href="/" className="btn btn-outline-white">Get started</a>
                                    </div>

                                    <div className="ml-sm-auto order-sm-1">
                                        <div className="position-relative overflow-hidden rounded border-4 border-light mb-16pt mb-sm-0">
                                            <div className="bg-primary " ></div>
                                            <img className="" src="https://luma.humatheme.com/public/images/paths/angular_96x96.png"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                        <div className="navbar navbar-expand-sm navbar-light bg-white border-bottom-2 navbar-list p-0 m-0 align-items-center">
                            <div className="container page__container">
                                <ul className="nav navbar-nav flex align-items-sm-center">
                                    <li className="nav-item navbar-list__item">28 Lessons</li>
                                    <li className="nav-item navbar-list__item">
                                        <Schedule className="material-icons text-muted icon--left"/>
                                        2h 46m
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-section border-bottom-2">
                    <div className="container page__container">
                        <div className="row">
                            <div className="col-lg-6 mb-24pt mb-sm-0">
                                <div className="border-left-3 border-left-primary pl-24pt pl-md-32pt">
                                    <h4 className="mb-8pt">Assessment details</h4>
                                    <p className="text-70 mb-24pt mb-lg-0">Based on your skill level we recommend you take the Intermediate level Angular courses.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="page-num-timeline d-flex flex-column flex-sm-row align-items-center justify-content-center flex">
                                    <a href="" data-toggle="tooltip" data-placement="top" data-title="Beginner" className="page-num-timeline__item" data-original-title="" title="">
                                        <span className="page-num-timeline__item-tip"></span>
                                        <span className="page-num">1</span>
                                    </a>
                                    <a href="" data-toggle="tooltip" data-placement="top" data-title="Your current level: Intermediate" className="page-num-timeline__item page-num-timeline__item-current" data-original-title="" title="">
                                        <span className="page-num-timeline__item-tip"></span>
                                        <span className="page-num">
                                            <PersonIcon className="material-icons"/></span>
                                    </a>
                                    <a href="" data-toggle="tooltip" data-placement="top" data-title="Advanced" className="page-num-timeline__item" data-original-title="" title="">
                                        <span className="page-num-timeline__item-tip"></span>
                                        <span className="page-num">3</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container page__container">
                    <div className="border-left pl-32pt page-section">
                        <div className="d-flex align-items-center page-num-container">
                            <div className="page-num">2</div>
                            <h4>Recommended: Intermediate</h4>
                        </div>
                        <p className="text-70 mb-lg-32pt">Once you have the basics using the Angular framework, you will continue to build on your existing knowledge and, with these intermediate courses you will have a deeper understanding into features like services, routing and testing.</p>

                        <div className="position-relative carousel-card">
                            <div className="js-mdk-carousel row d-block" id="carousel-courses1" data-interval="3000">

                                <div className="mdk-carousel__content">

                                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mdk-carousel__item" >

                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal overlay--duserselect" data-partial-height="44" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="mdk-reveal,overlay">

                                            <a href="/" className="js-image" data-position="left" data-height="auto" data-domfactory-upgraded="image" 
                                            style={{
                                                display: 'block',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                backgroundImage: 'url("https://luma.humatheme.com/public/images/paths/angular_testing_430x168.png")',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'left center',
                                                height: '168px'
                                                }}>
                                                <span className="overlay__content align-items-start justify-content-start">
                                                    <span className="overlay__action card-body d-flex align-items-center">
                                                        <PlayCircleOutline className="material-icons mr-4pt"/>
                                                        <span className="card-title text-white">Preview</span>
                                                    </span>
                                                </span>
                                            </a>

                                            <div className="mdk-reveal__content"><div className="mdk-reveal__partial" ></div>
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="flex">
                                                            <a className="card-title" href="/">Angular Unit Testing</a>
                                                            <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                        </div>
                                                        <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window"><FavoriteBorder className="ml-4pt material-icons text-20 card-course__icon-favorite" data-original-title="" title=""/></a>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="rating flex">
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                        </div>
                                                        <small className="text-50">6 hours</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/angular_testing_430x168.png" width="40" height="40" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title mb-0">Angular Unit Testing</div>
                                                    <p className="lh-1 mb-0">
                                                        <span className="text-50 small">with</span>
                                                        <span className="text-50 small font-weight-bold">Elijah Murray</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="my-16pt text-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>

                                            <div className="mb-16pt">
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                                </div>
                                            </div>

                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <div className="d-flex align-items-center mb-4pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>6 hours</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-4pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">assessment</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>Beginner</small></p>
                                                    </div>
                                                </div>
                                                <div className="col text-right">
                                                    <a href="/" className="btn btn-primary">Watch trailer</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mdk-carousel__item" >

                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal overlay--duserselect" data-partial-height="44" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="mdk-reveal,overlay" >

                                            <a href="/" className="js-image" data-position="left" data-height="auto" data-domfactory-upgraded="image" 
                                            style={{
                                                display: 'block',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                backgroundImage: 'url("https://luma.humatheme.com/public/images/paths/angular_routing_430x168.png")',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'left center',
                                                height: '168px'
                                                }}>
                                                <span className="overlay__content align-items-start justify-content-start">
                                                    <span className="overlay__action card-body d-flex align-items-center">
                                                        <i className="material-icons mr-4pt">play_circle_outline</i>
                                                        <span className="card-title text-white">Preview</span>
                                                    </span>
                                                </span>
                                            </a>

                                            <div className="mdk-reveal__content"><div className="mdk-reveal__partial"></div>
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="flex">
                                                            <a className="card-title" href="/">Angular Routing In-Depth</a>
                                                            <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                        </div>
                                                        <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window"><FavoriteBorder className="ml-4pt material-icons text-20 card-course__icon-favorite" data-original-title="" title=""/></a>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="rating flex">
                                                        <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                        </div>
                                                        <small className="text-50">6 hours</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="../../public/images/paths/angular_40x40@2x.png" width="40" height="40"  className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title mb-0">Angular Routing In-Depth</div>
                                                    <p className="lh-1 mb-0">
                                                        <span className="text-50 small">with</span>
                                                        <span className="text-50 small font-weight-bold">Elijah Murray</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="my-16pt text-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>

                                            <div className="mb-16pt">
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                                </div>
                                            </div>

                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <div className="d-flex align-items-center mb-4pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>6 hours</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-4pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">assessment</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>Beginner</small></p>
                                                    </div>
                                                </div>
                                                <div className="col text-right">
                                                    <a href="/" className="btn btn-primary">Watch trailer</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mdk-carousel__item" >

                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal overlay--duserselect" data-partial-height="44" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="mdk-reveal,overlay" >

                                            <a href="/" className="js-image" data-position="left" data-height="auto" data-domfactory-upgraded="image" 
                                            style={{
                                                display: 'block',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                backgroundImage: 'url("https://luma.humatheme.com/public/images/paths/angular_services_430x168.png")',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'left center',
                                                height: '168px'
                                                }}>
                                            
                                                <span className="overlay__content align-items-start justify-content-start">
                                                    <span className="overlay__action card-body d-flex align-items-center">
                                                        <PlayCircleOutline className="material-icons mr-4pt"/>
                                                        <span className="card-title text-white">Preview</span>
                                                    </span>
                                                </span>
                                            </a>

                                            <div className="mdk-reveal__content"><div className="mdk-reveal__partial"></div>
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="flex">
                                                            <a className="card-title" href="/">Angular Services</a>
                                                            <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                        </div>
                                                        <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window"><FavoriteBorder className="ml-4pt material-icons text-20 card-course__icon-favorite" data-original-title="" title=""/></a>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="rating flex">
                                                        <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                        </div>
                                                        <small className="text-50">6 hours</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/angular_routing_430x168.png" width="40" height="40" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title mb-0">Angular Services</div>
                                                    <p className="lh-1 mb-0">
                                                        <span className="text-50 small">with</span>
                                                        <span className="text-50 small font-weight-bold">Elijah Murray</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="my-16pt text-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>

                                            <div className="mb-16pt">
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                                </div>
                                            </div>

                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <div className="d-flex align-items-center mb-4pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>6 hours</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-4pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">assessment</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>Beginner</small></p>
                                                    </div>
                                                </div>
                                                <div className="col text-right">
                                                    <a href="/" className="btn btn-primary">Watch trailer</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mdk-carousel__item" >

                                        <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal overlay--duserselect" data-partial-height="44" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="mdk-reveal,overlay" >

                                            <a href="/" className="js-image" data-position="center" data-height="auto" data-domfactory-upgraded="image"
                                            style={{
                                                display: 'block',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                backgroundImage: 'url("https://luma.humatheme.com/public/images/paths/angular_patterns_430x168.png")',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'left center',
                                                height: '168px'
                                                }}>
                                                <span className="overlay__content align-items-start justify-content-start">
                                                    <span className="overlay__action card-body d-flex align-items-center">
                                                        <PlayCircleOutline className="material-icons mr-4pt"/>
                                                        <span className="card-title text-white">Preview</span>
                                                    </span>
                                                </span>
                                            </a>

                                            <div className="mdk-reveal__content"><div className="mdk-reveal__partial" ></div>
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="flex">
                                                            <a className="card-title" href="/">Angular Patterns</a>
                                                            <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                        </div>
                                                        <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window"><FavoriteBorder className="ml-4pt material-icons text-20 card-course__icon-favorite" data-original-title="" title=""/></a>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="rating flex">
                                                        <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                            <span className="rating__item"><StarBorder className="material-icons"/></span>
                                                        </div>
                                                        <small className="text-50">6 hours</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/angular_routing_430x168.png" width="40" height="40" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title mb-0">Angular Patterns</div>
                                                    <p className="lh-1 mb-0">
                                                        <span className="text-50 small">with</span>
                                                        <span className="text-50 small font-weight-bold">Elijah Murray</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="my-16pt text-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>

                                            <div className="mb-16pt">
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-50 mr-8pt">check</span>
                                                    <p className="flex text-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                                </div>
                                            </div>

                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <div className="d-flex align-items-center mb-4pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>6 hours</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-4pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">assessment</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>Beginner</small></p>
                                                    </div>
                                                </div>
                                                <div className="col text-right">
                                                    <a href="/" className="btn btn-primary">Watch trailer</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center justify-content-sm-start mt-8pt">
                            <a href="/" className="btn btn-accent flex-auto mb-8pt mb-sm-0 mr-sm-16pt">Begin Angular Intermediate</a>
                            <a href="/" className="btn btn-outline-secondary flex-auto">Explore other Angular paths</a>
                        </div>
                    </div>
                </div>

            </div>


 
  );
};

export default SkillResult;

