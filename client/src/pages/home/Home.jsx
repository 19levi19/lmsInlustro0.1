import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/widget/Widget"
import "./home.scss";
const Home = () => {
    return (
      <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
        </div>
          <div className="Widget">
            <Widget/>
            <Widget/>
            <Widget/>
            <Widget/>
            <Widget/>
          </div>
      </div>
    );
  };
  
  export default Home;