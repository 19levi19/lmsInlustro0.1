import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import UpdateIcon from '@mui/icons-material/Update';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './homepage.css'
import '../BrowsePath/BrowsePath.css'
function MyHomepage() {
  return (
    <div className="drawer-layout js-drawer-layout" data-responsive-width="992px">
      <div className="drawer-layout__content page-content">
        <div
          className="box box--bg-primary bg-dark js-box mb-0"
          data-effects="parallax-background blend-background"
          style={{
            backgroundImage: 'url(https://luma.humatheme.com/public/images/photodune-4161018-group-of-students-m.jpg)'}}>
          <div className="box__content justify-content-center">
            <div className="hero container page__container text-center py-112pt">
              <h1 className="text-white text-shadow">Learn to Code</h1>
              <p className="lead measure-hero-lead mx-auto text-white text-shadow mb-48pt">
                Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.
              </p>

              <a
                href="/BrowsePath"
                className="btn btn-lg btn-white btn--raised mb-16pt"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Browse Courses
              </a>
              <p className="mb-0">
                <a href="/" className="text-white text-shadow">
                  <strong>Are you a teacher?</strong>
                </a>
              </p>
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
          <a className="card-title" href="">Merge Duplicates Inconsistent Symbols</a>
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
            <a className="card-title" href="">Design Systems Essentials</a>
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
            <a className="card-title" href="">Semantic Logo Design</a>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid">
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

                            </div>

                        </div>

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