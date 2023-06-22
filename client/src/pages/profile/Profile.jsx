import React from 'react';
import "./profile.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/Footer';
const Profile = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
    
    <div className="box">
    <div className="page-section container page__container">
      <div className="page-separator">
        <div className="page-separator__text">PROFILE &amp; PRIVACY</div>
      </div>
      <div>
            <label className="form-label">YOUR PHOTO</label>
            </div>
      <div className="col-md-7 p-0">
        <div className="form-group">
          <div className="media align-items-center">
            <a href="user" className="media-left mr-16pt">
              <img
                src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                alt="people"
                width="56"
                className="rounded-circle"
              />
            </a>
            <div className="media-body">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label"> PROFILE NAME</label>
          <div>
          <input type="text"
            className="form-control"
            value="inlustro/shanu"
            placeholder="Your profile name ..."
          />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">ABOUT YOU</label>
          <div>
          <textarea
            rows="5"
            col="5"
            className="form-control"
            placeholder="About you ..."
          />
          </div>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              checked
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Display your real name on your profile
            </label>
          </div>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              checked
              id="customCheck2"
            />
            <label className="custom-control-label" htmlFor="customCheck2">
              Allow everyone to see your profile
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
        <div className="Footer">
        <Footer />
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Profile;
