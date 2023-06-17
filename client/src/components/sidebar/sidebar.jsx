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
                    <MenuBookIcon className="Icon"/>
                        <span>Browse Courses</span>
                    </li>
                    <li>
                    <LocalLibraryIcon className="Icon"/>
                        <span>My Courses</span>
                    </li>
                    <li>
                    <QuizIcon className="Icon"/>
                        <span>Quiz </span>
                    </li>
                    <li>
                    <NotificationsActiveIcon className="Icon"/>
                        <span>Notification</span>
                    </li>
                    <li>
                    <AccountCircleIcon className="Icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                    <SettingsSuggestIcon className="Icon"/>
                        <span>Settings</span>
                    </li>
                    <li>
                    <LogoutIcon className="Icon"/>
                        <span>logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Sidebar