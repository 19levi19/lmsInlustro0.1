import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Widget from "../../components/widget/Widget"
import CourseDetails from "../../pages/course_details/coursedetails";
import "./home.scss";
import Homepage2 from "../../pages/homepage/homepage2"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
         <div className="Homepage2">
          <Homepage2 />

        </div>

      </div>
    </div>
  );
};

export default Home;