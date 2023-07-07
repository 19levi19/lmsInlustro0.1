import React, { useState, useEffect } from 'react';
import { StarBorderOutlined, AccountCircle, PlayCircle, HourglassEmpty } from '@mui/icons-material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckIcon from '@mui/icons-material/Check';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from 'axios';
import '../BrowsePath/BrowsePath.css';

function TakeLesson() {
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
      <div className="navbar navbar-light border-0 navbar-expand-sm">
        <div className="container page__container flex-column flex-sm-row">
          <nav className="nav navbar-nav">
            <div className="nav-item py-16pt py-sm-0">
              <div className="media flex-nowrap">
                <div className="media-left mr-16pt">
                  <a href="/">
                    <img src="https://luma.humatheme.com/public/images/paths/angular_64x64.png" width="40" className="rounded" />
                  </a>
                </div>
                <div className="media-body d-flex flex-column">
                  <a href="/" className="card-title">
                    Angular Fundamentals
                  </a>
                  <div className="d-flex">
                    <span className="text-50 small font-weight-bold mr-8pt">Shanu Rajput</span>
                    <span className="text-50 small">Software Engineer and Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg-primary pb-lg-64pt py-32pt">
        <div className="container page__container">
          <nav className="course-nav">
            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Introduction" href="/" data-original-title="" title="">
              <CheckIcon className="material-icons" />
            </a>
            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Introduction to TypeScript" href="/" data-original-title="" title="">
              <AccountCircle className="material-icons text-primary" />
            </a>
            <a data-toggle="tooltip" data-placement="bottom" data-title="Getting Started with Angular: Comparing Angular to AngularJS" href="/" data-original-title="" title="">
              <PlayCircle className="material-icons" />
            </a>
            <a data-toggle="tooltip" data-placement="bottom" data-title="Quiz: Getting Started with Angular" href="/TakeQuiz" data-original-title="" title="">
              <HourglassEmpty className="material-icons" />
            </a>
          </nav>
          <div className="js-player bg-primary embed-responsive embed-responsive-16by9 mb-32pt" data-domfactory-upgraded="player">
            <div className="player embed-responsive-item">
              <div className="player__content">
                <div className="player__image" style={{ '--player-image': `url(${playerImage})` }}></div>
               
                <a href="" className="player__play bg-primary">
                  <PlayArrowIcon className="material-icons" />
                </a>
              </div>
              <div className="player__embed d-none">
                <iframe className="embed-responsive-item" src="" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap align-items-end mb-16pt">
            <h1 className="text-white flex m-0">Introduction to TypeScript</h1>
            <p className="h1 text-white-50 font-weight-light m-0">50:13</p>
          </div>

          <p className="hero__lead measure-hero-lead text-white-50 mb-24pt">
            JavaScript is now used to power backends, create hybrid mobile applications, architect cloud solutions, design neural networks, and even control robots. Enter TypeScript: a superset of JavaScript for scalable, secure, performant, and feature-rich applications.
          </p>

          <a href="" className="btn btn-white">
            Resume lesson
          </a>
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
              <ScheduleIcon className="material-icons text-muted icon--left" />
              2h 46m
            </li>
            <li className="nav-item navbar-list__item">
              <AssessmentIcon className="material-icons text-muted icon--left" />
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

export default TakeLesson;
