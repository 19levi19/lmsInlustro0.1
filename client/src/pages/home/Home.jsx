import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
// import Widget from "../../components/widget/Widget"
import Courses from "../courses_catalog/courses";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="Courses">
          <Courses />
        </div>
        <footer>
        <div class="bg-white border-top-2 mt-auto">
                    <div class="container page__container page-section d-flex flex-column">
                        <p class="text-70 brand mb-24pt">
                            <img class="brand-icon"
                                 src="data:image/png;base64,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"
                                 width="100"
                                 alt="Luma"/>
                        </p>
                        <p class="measure-lead-max text-50 small mr-8pt">Inlustro is a beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>
                        <p class="mb-8pt d-flex">
                            <a href=""
                               class="text-70 text-underline mr-8pt small">Terms</a>
                            <a href=""
                               class="text-70 text-underline small">Privacy policy</a>
                        </p>
                        <p class="text-50 small mt-n1 mb-0">Copyright 2019 &copy; All rights reserved.</p>
                    </div>
                </div>
        </footer>
        
      </div>
    </div>
  );
};

export default Home;