import "./homepage.scss";
import{Link} from "react-router-dom";
function homepage(props){
return(
    <>
    <div className="homepage">
        <img alt = "homeImage" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"/>
        <div className="text">
            <h1> Learn to Code </h1>
            <p>Business, technology and Creative Skills taught by industry experts.</p>
            <p>Explore a wide range of skills with our professional tutorials.</p>
            <Link to="/list" style={{ textDecoration:"none"}}>
            <button id ="button">BROWSE COURSE</button>
            </Link>
        </div>
        <div className="section">
          <p>user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p> 
          <p>Copyright 2019 © All rights reserved.</p> 
            
        </div>
    </div>
    </>
)
}
export default homepage;