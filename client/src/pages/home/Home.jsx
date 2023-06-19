import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Widget from "../../components/widget/Widget"
import CourseDetails from "../../pages/course_details/coursedetails";
import "./home.scss";
import Homepage from "../../pages/homepage/Homepage"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
         <div className="home">
          <Homepage />
          <div className="Coursedetails">
            <CourseDetails/>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;