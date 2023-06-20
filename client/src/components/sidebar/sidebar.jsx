import "./sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import QuizIcon from '@mui/icons-material/Quiz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


const Sidebar = () => {
    return(
        <div className="Sidebar">
            <div className="top">
                <span className="Logo">LMS</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="Title"> STUDENT</p>
                    <li>
                    <HomeIcon className="Icon"/>
                        <span>Home</span>
                    </li>
                    <li>
                    <Link to="/list" style={{ textDecoration:"none"}}>
                    <MenuBookIcon className="Icon"/>
                        <span>Browse Courses</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/course" style={{ textDecoration:"none"}}>
                    <LocalLibraryIcon className="Icon"/>
                        <span>My Courses</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/List" style={{ textDecoration:"none"}}>
                    <QuizIcon className="Icon"/>
                        <span>Quiz </span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/List" style={{ textDecoration:"none"}}>
                    <NotificationsActiveIcon className="Icon"/>
                        <span>Notification</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/List" style={{ textDecoration:"none"}}>
                    <SettingsSuggestIcon className="Icon"/>
                        <span>Settings</span>
                        </Link>
                    </li>
                    <p className="Title"> USER</p>
                    <li>
                    <Link to="/List" style={{ textDecoration:"none"}}>
                    <AccountCircleIcon className="Icon"/>
                        <span>Profile</span>
                    </Link>
                    </li>
                    <li>
                    <SettingsSuggestIcon className="Icon"/>
                        <span>Settings</span>
                    </li>
                    <li>
                    <Link to="/List" style={{ textDecoration:"none"}}>
                    <LogoutIcon className="Icon"/>
                        <span>logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Sidebar