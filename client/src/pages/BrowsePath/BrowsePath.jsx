import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "./BrowsePath.css"
function BrowsePath() {
  return (


    <div className="header-layout__content page-content " style={{paddingtop: '64px'}}>

                <div data-push="" data-responsive-width="992px" className="drawer-layout js-drawer-layout" data-domfactory-upgraded="drawer-layout">
                    <div className="drawer-layout__content" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>

                        <div className="page-section">
                            <div className="container page__container">

                                <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt" style={{ whiteSpace: 'nowrap' }}>
                                    <small className="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">Displaying 4 out of 10 paths</small>
                                    <div className="w-auto ml-sm-auto table d-flex align-items-center mb-2 mb-sm-0">
                                        <small className="text-muted text-headings text-uppercase mr-3 d-none d-sm-block">Sort by</small>

                                        <a href="#" className="sort desc small text-headings text-uppercase">Newest</a>

                                        <a href="#" className="sort desc small text-headings text-uppercase">Popularity</a>
                                    </div>

                                    <a href="#" data-target="#library-drawer" data-toggle="sidebar" className="btn btn-sm btn-white ml-sm-16pt">
                                        <TuneIcon className="material-icons icon--left"/> Filters
                                    </a>

                                </div>

                                <div className="page-separator">
                                    <div className="page-separator__text">Development Paths</div>
                                </div>

                                <div className="row card-group-row mb-lg-8pt">

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/react_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">React Native</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window"> <FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/react_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">React Native</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with React Native and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0"style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Dev Ops</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window"><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Dev Ops</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Dev Ops and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/redis_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Redis</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Redis</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Redis and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-overlay-onload-show="" data-popover-onload-show="" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/mailchimp_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">MailChimp</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Remove Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/mailchimp_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">MailChimp</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with MailChimp and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Angular</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Angular</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="	https://luma.humatheme.com/public/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Swift</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="	https://luma.humatheme.com/public/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Swift</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Swift and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="	https://luma.humatheme.com/public/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">WordPress</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="	https://luma.humatheme.com/public/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">WordPress</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with WordPress and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="mb-32pt">

                                    <ul className="pagination justify-content-start pagination-xsm m-0">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true" ChevronLeftIcon className="material-icons"></span>
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

                                <div className="page-separator">
                                    <div className="page-separator__text">Design Paths</div>
                                </div>

                                <div className="row card-group-row mb-lg-8pt">

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/sketch_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Sketch</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/sketch_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Sketch</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Sketch and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/flinto_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Flinto</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/flinto_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Flinto</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Flinto and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/photoshop_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Photoshop</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/photoshop_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Photoshop</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Photoshop and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/figma_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Figma</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/figma_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Figma</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Figma and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/xd_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Adobe XD</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/xd_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Adobe XD</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Adobe XD and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/invision_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">inVision App</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="	https://luma.humatheme.com/public/images/paths/invision_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">inVision App</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with inVision App and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 card-group-row__col">

                                        <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card overlay--duserselect" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                            <div className="card-body d-flex flex-column">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex">
                                                        <div className="d-flex align-items-center">
                                                            <div className="rounded mr-12pt z-0 o-hidden">
                                                                <div className="overlay">
                                                                    <img src="https://luma.humatheme.com/public/images/paths/craft_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                                    <span className="overlay__content overlay__content-transparent">
                                                                        <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                            <small className="h6 small text-white mb-0" style={{ fontWeight: 500 }}></small>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex">
                                                                <div className="card-title">Craft by inVision</div>
                                                                <p className="flex text-50 lh-1 mb-0"><small>18 courses</small></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" ><FavoriteBorderIcon className="material-icons text-white"/></a>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="popoverContainer d-none">
                                            <div className="media">
                                                <div className="media-left mr-12pt">
                                                    <img src="https://luma.humatheme.com/public/images/paths/craft_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="card-title">Craft by inVision</div>
                                                    <p className="text-50 d-flex lh-1 mb-0 small">18 courses</p>
                                                </div>
                                            </div>

                                            <p className="mt-16pt text-70">Learn the fundamentals of working with Craft by inVision and how to create basic applications.</p>

                                            <div className="my-32pt">
                                                <div className="d-flex align-items-center mb-8pt justify-content-center">
                                                    <div className="d-flex align-items-center mr-8pt">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">access_time</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="material-icons icon-16pt text-50 mr-4pt">play_circle_outline</span>
                                                        <p className="flex text-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="/" className="btn btn-primary mr-8pt">Resume</a>
                                                    <a href="/" className="btn btn-outline-secondary ml-0">Start over</a>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <small className="text-50 mr-8pt">Your rating</small>
                                                <div className="rating mr-8pt">
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star</span></span>
                                                    <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                                </div>
                                                <small className="text-50">4/5</small>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <ul className="pagination justify-content-start pagination-xsm m-0">
                                    <li className="page-item disabled">
                                    <a className="page-link" href="#" aria-label="Next">
                                            <span>Next</span>
                                            <span aria-hidden="true" ChevronLeftIcon className="material-icons"></span>
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
                                            <span aria-hidden="true" ChevronRightIcon className="material-icons"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
export default BrowsePath;