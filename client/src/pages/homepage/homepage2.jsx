import React from 'react';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import UpdateIcon from '@mui/icons-material/Update';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { StarBorderOutlined, StraightOutlined } from '@mui/icons-material';
import './homepage.css'
import '../BrowsePath/BrowsePath.css'
function MyHomepage() {
  return (
    <div className="drawer-layout js-drawer-layout"
         data-responsive-width="992px">
      <div className="drawer-layout__content page-content"> 
      <div className="box box--bg-primary bg-dark js-box mb-0"
         data-effects="parallax-background blend-background">
      <div className="box__bg">
        <div className="box__bg-front"
             style={{backgroundImage: 'url(https://luma.humatheme.com/public/images/photodune-4161018-group-of-students-m.jpg)'}}></div>
      </div>
      <div className="box__content justify-content-center">
        <div className="hero container page__container text-center py-112pt">
          <h1 className="text-white text-shadow">Learn to Code</h1>
          <p className="lead measure-hero-lead mx-auto text-white text-shadow mb-48pt">Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>

          <a href="/" className="btn btn-lg btn-white btn--raised mb-16pt" style={{ textDecoration: 'none', color: 'inherit' }}>Browse Courses</a>
          <p className="mb-0"><a href="/"
             className="text-white text-shadow"><strong>Are you a teacher?</strong></a></p>
        </div>
      </div>
      </div>
      <div className="border-bottom-2 py-16pt navbar-light bg-white border-bottom-2">
      <div className="container page__container">
        <div className="row align-items-center">
          <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
            <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
              <SubscriptionsIcon className="material-icons text-white"/>
            </div>
            <div className="flex">
              <div className="card-title mb-4pt">8,000+ Courses</div>
              <p className="card-subtitle text-70">Explore a wide range of skills.</p>
            </div>
          </div>
          <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
            <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
            <VerifiedUserIcon className="material-icons text-white"/>
            </div>
            <div className="flex">
              <div className="card-title mb-4pt">By Industry Experts</div>
              <p className="card-subtitle text-70">Professional development from the best people.</p>
            </div>
          </div>
          <div className="d-flex col-md align-items-center">
            <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
            <UpdateIcon className="material-icons text-white"/>
            </div>
            <div className="flex">
              <div className="card-title mb-4pt">Unlimited Access</div>
              <p className="card-subtitle text-70">Unlock Library and learn any topic with one subscription.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="page-section border-bottom-2">
                    <div className="container page__container">

                        <div className="page-separator">
                            <div className="page-separator__text">From the blog</div>
                        </div>
                        <div className="row card-group-row">

                            <div className="col-md-6 col-lg-4 card-group-row__col">

                        <div className="card card--elevated posts-card-popular overlay card-group-row__card">
      <img src="https://luma.humatheme.com/public/images/paths/sketch_430x168.png" alt="" className="card-img" />
      <div className="fullbleed bg-primary" style={{ opacity: 0.5 }}></div>
      <div className="posts-card-popular__content">
        <div className="card-body d-flex align-items-center">
          <div className="avatar-group flex">
            <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
              <a href=""><img src="https://luma.humatheme.com/public/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
            </div>
          </div>
          <a style={{ textDecoration: 'none' }} className="d-flex align-items-center" href="">
            <RemoveRedEyeIcon className="material-icons mr-1" style={{ fontSize: 'inherit' }}/>
            <small>327</small>
          </a>
        </div>
        <div className="posts-card-popular__title card-body">
          <small className="text-muted text-uppercase">sketch</small>
          <a className="card-title" href="blog-post.html">Merge Duplicates Inconsistent Symbols</a>
        </div>
      </div> 
      </div>
      </div>
      <div className="col-md-6 col-lg-4 card-group-row__col">
      <div className="card card--elevated posts-card-popular overlay card-group-row__card">
        <img src="	https://luma.humatheme.com/public/images/paths/invision_430x168.png" alt="" className="card-img" />
        <div className="fullbleed bg-primary" style={{ opacity: 0.5 }}></div>
        <div className="posts-card-popular__content">
          <div className="card-body d-flex align-items-center">
            <div className="avatar-group flex">
              <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                <a href=""><img src="https://luma.humatheme.com/public/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
              </div>
            </div>
            <a style={{ textDecoration: 'none' }} className="d-flex align-items-center" href="">
                <RemoveRedEyeIcon className="material-icons mr-1" style={{ fontSize: 'inherit' }}/>
              <small>327</small>
            </a>
          </div>
          <div className="posts-card-popular__title card-body">
            <small className="text-muted text-uppercase">invision</small>
            <a className="card-title" href="blog-post.html">Design Systems Essentials</a>
          </div>
        </div>
      </div>
      </div>   
      <div className="col-md-6 col-lg-4 card-group-row__col">
      <div className="card card--elevated posts-card-popular overlay card-group-row__card">
        <img src="	https://luma.humatheme.com/public/images/paths/photoshop_430x168.png" alt="" className="card-img" />
        <div className="fullbleed bg-primary" style={{ opacity: 0.5 }}></div>
        <div className="posts-card-popular__content">
          <div className="card-body d-flex align-items-center">
            <div className="avatar-group flex">
              <div className="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                <a href=""><img src="	https://luma.humatheme.com/public/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" /></a>
              </div>
            </div>
            <a style={{ textDecoration: 'none' }} className="d-flex align-items-center" href="">
              <RemoveRedEyeIcon className="material-icons mr-1" style={{ fontSize: 'inherit' }}/>
              <small>327</small>
            </a>
          </div>
          <div className="posts-card-popular__title card-body">
            <small className="text-muted text-uppercase">photoshop</small>
            <a className="card-title" href="blog-post.html">Semantic Logo Design</a>
          </div>
        </div>
      </div>
    </div>

    <div className="page-section border-bottom-2">
                    <div className="container page__container">
                        <div className="page-separator">
                            <div className="page-separator__text">Learning Paths</div>
                        </div>

                        <div className="row card-group-row">

                            <div className="col-sm-4 card-group-row__col">

                                <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex align-items-center">
                                            <div className="flex">
                                                <div className="d-flex align-items-center">
                                                    <div className="rounded mr-12pt z-0 o-hidden">
                                                        <div className="overlay">
                                                            <img src="https://luma.humatheme.com/public/images/paths/react_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                            <span className="overlay__content overlay__content-transparent">
                                                                <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                    <small className="h6 small text-white mb-0">80%</small>
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

                                            <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" >
                                                <FavoriteBorderIcon className="ml-4pt material-icons text-20 card-course__icon-favorite"/></a>

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
                                                <AccessTimeIcon className="material-icons icon-16pt text-50 mr-4pt"/>
                                                <p className="flex text-50 lh-1 mb-0"><small>50 minutes left</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <PlayCircleOutlineIcon className="material-icons icon-16pt text-50 mr-4pt"/>
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
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                        </div>
                                        <small className="text-50">4/5</small>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-4 card-group-row__col">

                                <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex align-items-center">
                                            <div className="flex">
                                                <div className="d-flex align-items-center">
                                                    <div className="rounded mr-12pt z-0 o-hidden">
                                                        <div className="overlay">
                                                            <img src="https://luma.humatheme.com/public/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                            <span className="overlay__content overlay__content-transparent">
                                                                <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                    <small className="h6 small text-white mb-0" >80%</small>
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

                                            <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window"><FavoriteBorderIcon className="ml-4pt material-icons text-20 card-course__icon-favorite" data-original-title="" title=""/></a>

                                        </div>

                                    </div>
                                </div>

                                <div className="popoverContainer d-none">
                                    <div className="media">
                                        <div className="media-left mr-12pt">
                                            <img src="https://luma.humatheme.com/public/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
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
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                        </div>
                                        <small className="text-50">4/5</small>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-4 card-group-row__col">

                                <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex align-items-center">
                                            <div className="flex">
                                                <div className="d-flex align-items-center">
                                                    <div className="rounded mr-12pt z-0 o-hidden">
                                                        <div className="overlay">
                                                            <img src="https://luma.humatheme.com/public/images/paths/redis_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                            <span className="overlay__content overlay__content-transparent">
                                                                <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                    <small className="h6 small text-white mb-0" >80%</small>
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

                                            <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window">
                                            <FavoriteBorderIcon className="ml-4pt material-icons text-20 card-course__icon-favorite"/></a>

                                        </div>

                                    </div>
                                </div>

                                <div className="popoverContainer d-none">
                                    <div className="media">
                                        <div className="media-left mr-12pt">
                                            <img src="https://luma.humatheme.com/public/images/paths/redis_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
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
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                        </div>
                                        <small className="text-50">4/5</small>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row card-group-row mb-lg-8pt">

                            <div className="col-sm-4 card-group-row__col">

                                <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card mb-lg-0" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex align-items-center">
                                            <div className="flex">
                                                <div className="d-flex align-items-center">
                                                    <div className="rounded mr-12pt z-0 o-hidden">
                                                        <div className="overlay">
                                                            <img src="https://luma.humatheme.com/public/images/paths/mailchimp_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                            <span className="overlay__content overlay__content-transparent">
                                                                <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                    <small className="h6 small text-white mb-0" >80%</small>
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

                                            <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" >
                                            <FavoriteBorderIcon className="ml-4pt material-icons text-20 card-course__icon-favorite"/></a>

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
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                        </div>
                                        <small className="text-50">4/5</small>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-4 card-group-row__col">

                                <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card mb-lg-0" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex align-items-center">
                                            <div className="flex">
                                                <div className="d-flex align-items-center">
                                                    <div className="rounded mr-12pt z-0 o-hidden">
                                                        <div className="overlay">
                                                            <img src="	https://luma.humatheme.com/public/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                            <span className="overlay__content overlay__content-transparent">
                                                                <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                    <small className="h6 small text-white mb-0" >80%</small>
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

                                            <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" >
                                            <FavoriteBorderIcon className="ml-4pt material-icons text-20 card-course__icon-favorite"/></a>

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
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                        </div>
                                        <small className="text-50">4/5</small>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-4 card-group-row__col">

                                <div className="card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 card-group-row__card mb-lg-0" data-toggle="popover" data-trigger="click" data-original-title="" title="" data-domfactory-upgraded="overlay">

                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex align-items-center">
                                            <div className="flex">
                                                <div className="d-flex align-items-center">
                                                    <div className="rounded mr-12pt z-0 o-hidden">
                                                        <div className="overlay">
                                                            <img src="	https://luma.humatheme.com/public/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded"/>
                                                            <span className="overlay__content overlay__content-transparent">
                                                                <span className="overlay__action d-flex flex-column text-center lh-1">
                                                                    <small className="h6 small text-white mb-0" >80%</small>
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

                                            <a href="/" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" >
                                            <FavoriteBorderIcon className="ml-4pt material-icons text-20 card-course__icon-favorite"/></a>

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
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><StarBorderOutlined className="material-icons text-primary"/></span>
                                            <span className="rating__item"><span className="material-icons text-primary">star_border</span></span>
                                        </div>
                                        <small className="text-50">4/5</small>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            <div className="bg-white border-top-2 mt-auto">
                <div className="container page__container page-section d-flex flex-column">
                    <p className="text-70 brand mb-24pt">
                        <img className="brand-icon" src="" width="30" alt=""></img>
                    </p>
                    <p className="measure-lead-max text-50 small mr-8pt">InLustro is a beautifully crafted user interface for modern Education Platforms, including Courses &amp; Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>
                    <p className="mb-8pt d-flex">
                        <a href="" className="text-70 text-underline mr-8pt small">Terms</a>
                        <a href="" className="text-70 text-underline small">Privacy policy</a>
                    </p>
                    <p className="text-50 small mt-n1 mb-0">Copyright 2019 © All rights reserved.</p>
                </div>
            </div>
            </div>
      

            </div>
            </div>
            </div>
      </div>
  );
}

export default MyHomepage;