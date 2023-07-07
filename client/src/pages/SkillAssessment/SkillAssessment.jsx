import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ScheduleIcon from '@mui/icons-material/Schedule';

const SkillAssessment = () => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Fetch the question using axios and update the question state
    axios
      .get('https://api.example.com/question')
      .then(response => {
        setQuestion(response.data.question);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Function to handle user answer selection
  const handleAnswerSelect = answer => {
    const newAnswers = [...answers];
    if (newAnswers.includes(answer)) {
      newAnswers.splice(newAnswers.indexOf(answer), 1);
    } else {
      newAnswers.push(answer);
    }
    setAnswers(newAnswers);
  };

  return (
    <div className="mdk-header-layout__content page-content">
      <nav className="navbar navbar-expand-sm navbar-list navbar-light bg-white border-bottom-2">
      <div className="container">
                        <ul className="nav navbar-nav w-100">
                            <li className="nav-item navbar-list__item py-16pt py-sm-0">
                                <a href="/" className="nav-link">
                                    <KeyboardBackspaceIcon className="material-icons icon--left"/> Back to Learning Path</a>
                            </li>
                            <li className="nav-item navbar-list__item py-16pt py-sm-0">
                                <div className="media align-items-center">
                                    <div className="media-left mr-12pt">
                                        <a href="/">
                                            <img src="https://luma.humatheme.com/public/images/paths/angular_64x64.png" width="40" alt="Angular" className="rounded"/></a>
                                    </div>
                                    <div className="media-body d-flex flex-column">
                                        <a href="/" className="card-title">Learn Angular</a>
                                        <p className="text-50 lh-1 mb-0 small">24 courses</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
      </nav>
      <div className="mdk-box bg-primary mdk-box--bg-gradient-primary2 js-mdk-box mb-0" data-effects="blend-background" data-domfactory-upgraded="mdk-box">
      <div className="mdk-box__bg"><div className="mdk-box__bg-front">
        </div>
        <div className="mdk-box__bg-rear" >
            </div>
            </div>
            <div className="mdk-box__content">
                        <div className="py-64pt text-center text-sm-left">
                            <div className="container d-flex flex-column justify-content-center align-items-center">
                                <h1 className="text-white mb-0">Skill Assessment</h1>
                                <p className="lead text-white-50 measure-lead-max">Measure your skill to find out where to start.</p>
                            </div>
                        </div>
                        <div className="navbar navbar-expand-sm navbar-list navbar-light bg-white border-bottom-2 p-0 m-0 align-items-center">
                            <div className="container page__container">
                                <ul className="nav navbar-nav flex align-items-sm-center">
                                    <li className="nav-item navbar-list__item">30 Questions</li>
                                    <li className="nav-item navbar-list__item">
                                        <ScheduleIcon className="material-icons text-muted icon--left"/>
                                        1m 10s
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
      </div>

      <div className="container page__container">
        <form action="/">
          <div className="row">
            <div className="col-lg-7">
              <div className=" border-left-2 page-section pl-32pt">
                <div className="d-flex align-items-center page-num-container mb-16pt">
                  <div className="page-num">2</div>
                  <h4>{question}</h4>
                </div>

                <p className="text-70 mb-32pt mb-lg-64pt">An angular 2 project written in typescript is transpiled to javascript during the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?</p>

                <p className="text-50">Note: There can be multiple correct answers to this question.</p>
                <div className="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                  <a href="/SkillResult" className="btn btn-outline-secondary flex mb-8pt mb-sm-0 mr-sm-16pt">Previous question</a>
                  <button type="submit" className="btn btn-accent flex">Next question</button>
                </div>

              </div>
            </div>
            <div className="col-lg-5">
              <div className="page-section">
                <div className="page-separator">
                  <div className="page-separator__text">Your Answer</div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      id="customCheck01"
                      type="checkbox"
                      className="custom-control-input"
                      checked={answers.includes('Ability to use newer syntax and offers reliability')}
                      onChange={() => handleAnswerSelect('Ability to use newer syntax and offers reliability')}
                    />
                    <label htmlFor="customCheck01" className="custom-control-label">
                      Ability to use newer syntax and offers reliability
                    </label>
                  </div>
                </div>
                <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                      id="customCheck02"
                      type="checkbox"
                      className="custom-control-input"
                      checked={answers.includes('Compatibility')}
                      onChange={() => handleAnswerSelect('Compatibility')}
                    />
                    <label htmlFor="customCheck02" className="custom-control-label">
                      Compatibility
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      id="customCheck03"
                      type="checkbox"
                      className="custom-control-input"
                      checked={answers.includes('Usage of missing features')}
                      onChange={() => handleAnswerSelect('Usage of missing features')}
                    />
                    <label htmlFor="customCheck03" className="custom-control-label">
                      Usage of missing features
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillAssessment;

