import React, { useState, useEffect } from 'react';
import { Lock, AccountCircle, PlayArrow, PlayCircleOutline, StarBorderOutlined, Schedule, Assessment } from '@mui/icons-material';
import axios from 'axios';
import '../BrowsePath/BrowsePath.css';

function LessonPreview() {
  const [playerImage, setPlayerImage] = useState('');

  useEffect(() => {
    // Fetch player image URL
    axios
      .get('your-image-url')
      .then(response => {
        setPlayerImage(response.data.imageUrl);
      })
      .catch(error => {
        console.error('Error fetching player image:', error);
      });
  }, []);

  return (
    <div className="mdk-header-layout__content page-content">
      <div className="navbar navbar-light border-0 navbar-expand">
        <div className="container page__container">
          <div className="media flex-nowrap">
            <div className="media-left mr-16pt">
              <a href="/">
                <img src="https://luma.humatheme.com/public/images/paths/angular_64x64.png" width="40" className="rounded" alt="Angular" />
              </a>
            </div>
            <div className="media-body">
              <a href="/" className="card-title text-body mb-0">
                Angular Fundamentals
              </a>
              <p className="lh-1 d-flex align-items-center mb-0">
                <span className="text-50 small font-weight-bold mr-8pt">Shanu Rajput</span>
                <span className="text-50 small">Software Engineer and Developer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary pb-lg-64pt py-32pt">
        <div className="container page__container">
          <nav className="course-nav">
            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Introduction" href="" data-original-title="" title="">
              <Lock className="material-icons" />
            </a>
            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Introduction to TypeScript" href="" data-original-title="" title="">
              <AccountCircle className="material-icons text-primary" />
            </a>
            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Comparing Angular to AngularJS" href="" data-original-title="" title="">
              <Lock className="material-icons" />
            </a>
            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Lesson 4" href="" data-original-title="" title="">
              <Lock className="material-icons" />
            </a>
          </nav>
          <div className="js-player embed-responsive embed-responsive-16by9 mb-32pt" data-domfactory-upgraded="player">
            <div className="player embed-responsive-item">
              <div className="player__content">
                <div className="player__image" style={{ '--player-image': `url(${playerImage})` }}></div>
                <a href="" className="player__play bg-primary">
                  <PlayArrow className="material-icons" />
                </a>
              </div>
              <div className="player__embed d-none">
                <iframe className="embed-responsive-item" src="" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap align-items-end mb-16pt">
          <div className="d-flex flex-wrap align-items-end mb-16pt">
              <h1 className="text-white flex m-0">Introduction to TypeScript</h1>
            </div>

            <p className="hero__lead measure-hero-lead text-white-50 mb-24pt">
              JavaScript is now used to power backends, create hybrid mobile applications, architect cloud solutions, design neural networks, and even control robots. Enter TypeScript: a superset of JavaScript for scalable, secure, performant, and feature-rich applications.
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start">
              <a href="/" className="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt">
                Watch trailer <PlayCircleOutline className="material-icons icon--right" />
              </a>
              <a href="/" className="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-expand-sm navbar-light bg-white border-bottom-2 navbar-list p-0 m-0 align-items-center">
        <div className="container page__container">
          <ul className="nav navbar-nav flex align-items-sm-center">
            <li className="nav-item navbar-list__item">
              <div className="media align-items-center">
                <span className="media-left mr-16pt">
                  <img src="https://luma.humatheme.com/public/images/people/50/guy-6.jpg" width="40" alt="avatar" className="rounded-circle" />
                </span>
                <div className="media-body">
                  <a className="card-title m-0" href="/">
                    Shanu Rajput
                  </a>
                  <p className="text-50 lh-1 mb-0">Instructor</p>
                </div>
              </div>
            </li>
            <li className="nav-item navbar-list__item">
              <Schedule className="material-icons text-muted icon--left" />
              2h 46m
            </li>
            <li className="nav-item navbar-list__item">
              <Assessment className="material-icons text-muted icon--left" />
              Beginner
            </li>
            <li className="nav-item ml-sm-auto text-sm-center flex-column navbar-list__item">
              <div className="rating rating-24">
                <div className="rating__item">
                  <StarBorderOutlined className="material-icons" />
                </div>
                <div className="rating__item">
                  <StarBorderOutlined className="material-icons" />
                </div>
                <div className="rating__item">
                  <StarBorderOutlined className="material-icons" />
                </div>
                <div className="rating__item">
                  <StarBorderOutlined className="material-icons" />
                </div>
                <div className="rating__item">
                  <StarBorderOutlined className="material-icons" />
                </div>
              </div>
              <p className="lh-1 mb-0">
                <small className="text-muted">20 ratings</small>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LessonPreview;
