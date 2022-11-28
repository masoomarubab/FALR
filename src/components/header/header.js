import Logo from '../../images/logo-dark.svg';
import LogoCollpased from '../../images/logo-collapsed.svg';
import UsFlag from '../../images/us.svg';
import Maximize from '../../images/maximize.svg';
import Minimize from '../../images/minimize.svg';
import Bell from '../../images/bell.svg';
import Mail from '../../images/mail.svg';
import UserImage from '../../images/user.png';
import Flagdropdown from './flagdropdown/flagdropdown';
import NotificationDropdown from './notificationDropdown/notificationDropdown';
import MessageDropdown from './messagedropdown/messageDropdown';
import UserProfile from './profile/profile';

import '../style.css';
import { useState } from 'react';

function Header() {
    const [flag, dispalyFlag] = useState(false);
    const [profile, displayProfile] = useState(false);
    const [notifications, displayNotification] = useState(false);
    const [message, displayMessages] = useState(false);

    // click outside
    document.addEventListener('mouseup', function (event) {
        var flag = document.querySelector('.nav-flag-icon');
        var icon = document.querySelector('.nav-profile-icon');
        var icon2 = document.querySelector('.nav-notification-icon');
        var icon3 = document.querySelector('.nav-message-icon');
        if( (event.target !== flag && event.target.parentNode !== flag) || 
        (event.target !== icon && event.target.parentNode !== icon) || 
        (event.target !== icon2 && event.target.parentNode !== icon2) ||
        (event.target !== icon3 && event.target.parentNode !== icon3)
        ){
            document.querySelector('.nav-flag-dropdown').classList.remove('flag-dropdown-display');
            document.querySelector('.profile-main-div').classList.remove('profile-main-div-display');
            document.querySelector('.notification-main-div').classList.remove('notification-main-div-display');
            document.querySelector('.message-main-div').classList.remove('message-main-div-display');
        }
    });
    function flagOptions() {
        dispalyFlag(!flag);
    }
    function displayProfileOptions() {
        displayProfile(!profile);
    }
    function notificationsDisplayOptions() {
        displayNotification(!notifications);
    }
    function messageDisplayOptions() {
        displayMessages(!message)
    }

    var elem = document.documentElement;
    /* View in fullscreen */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        document.querySelector('.minimize-image').style.display = 'block';
        document.querySelector('.maximize-image').style.display = 'none';
    }
    /* Close fullscreen */
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }

        document.querySelector('.minimize-image').style.display = 'none';
        document.querySelector('.maximize-image').style.display = 'block';
    }

    function toggleSidebar() {
        var collapsedSideBar = document.getElementById("collapsed-sideBar");
        var openSideBar = document.getElementById("opened-sideBar");
        var openedSideBarForMbl = document.querySelector('.opened-navbar-menu ')
    
        var openedLogo = document.querySelector('.header-logo-open');
        var closedLogo = document.querySelector('.header-logo');
    
    
        collapsedSideBar.classList.toggle('header-col-1-open');
        openedLogo.classList.toggle('header-logo-not-opened');
    
        openSideBar.classList.toggle('opened-navbar-menu-close');
        closedLogo.classList.toggle('header-logo-collapsed')
    
    
        openedSideBarForMbl.classList.toggle('opened-navbar-menu-close');
    }
    return (
        <header>
            <nav className="header-col">
                <div className="nav-bar">
                    <div className="header-logo">
                        <img src={LogoCollpased} alt="logocollapsed" className="logo-collapsed" />
                    </div>

                    <div className="header-logo-open">
                        <img src={Logo} alt="logo-collapsed" className="logo-opened" />
                    </div>
                    <div className="nav-col-1">
                        <div className="nav-menu-btn">
                            <button onClick={toggleSidebar}>
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                        <div className="nav-input">
                            <form action="">
                                <i className="fa fa-search"></i>
                                <input type="text" placeholder="Search..." />
                            </form>

                        </div>
                    </div>
                    <div className="nav-col-2">
                        <div className="nav-flag-icon">
                            <img src={UsFlag} alt="flag" className="flag-image" onClick={flagOptions} />
                            <Flagdropdown showFlag={flag} />
                        </div>
                        <div className="nav-screen-size-icon">
                            <img src={Maximize} alt="maximize" className="maximize-image"
                                onClick={openFullscreen} />

                            <img src={Minimize} alt="minimize" className="minimize-image"
                                onClick={closeFullscreen} />
                        </div>
                        <div className="nav-notification-icon">
                            <img src={Bell} alt="bell" className="bell-image"
                                onClick={notificationsDisplayOptions} />
                            <span className="bell-icon-number-div">7</span>
                            <NotificationDropdown showNotifications={notifications}/>

                        </div>
                        <div className="nav-message-icon">
                            <img src={Mail} alt="email" className="email-image" onClick={messageDisplayOptions} />
                            <span className="notification_dot"></span>
                            <MessageDropdown showMessage={message}/>
                        </div>
                        <div className="nav-profile-icon">
                            <img src={UserImage} alt="User Profile" className="profile-user-image"
                                onClick={displayProfileOptions} />
                            <UserProfile showProfile={profile}/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;