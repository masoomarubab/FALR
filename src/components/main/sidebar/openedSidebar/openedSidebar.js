import React, { useRef } from 'react';
import { useState } from 'react';
import '../../../style.css';

const OpenedSidebar = () => {
    const handleDropdownDisplay = (e) => {
        let el = e.target;
        let parent = el.parentElement;
        // console.log(parent)
        let child = parent.nextElementSibling;
        // console.log(child)
        child.classList.toggle('dropdownListDisplay');
    }

    return (
        <div className="opened-navbar" id="opened-sideBar">
            <ul className="opened-navbar-menu">
                <li className="menu-title">main</li>
                <li className="menu-list">
                    <a href="#">
                        <i className="fa fa-home"></i><span>Dashboard</span>
                    </a>
                </li>

                <li className="menu-next-title">apps</li>
                <li className="menu-next-list">
                    <a href="#">
                        <i className="fa fa-calendar"></i><span>Calendar</span>
                    </a>
                </li>

                <li className="menu-next-list">
                    <a href="#">
                        <i className="fa fa-image"></i><span>Gallery</span>
                    </a>
                </li>

                <li className="menu-next-list">
                    <a href="#"  onClick={handleDropdownDisplay}>
                        <i className="fa fa-envelope"></i>
                        <span>Email</span>
                        <i className="arrow down"></i>
                    </a>
                    <ul className='opened-navbar-dropdown'>
                        <li><a href="#">Inbox</a></li>
                        <li><a href="#">Compose Email</a></li>
                        <li><a href="#">Read Email</a></li>
                    </ul>
                </li>


                <li className="menu-next-title">components</li>
                <li className="menu-next-list" >
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-gitlab"></i><span>UI Features</span> <i className="arrow down" ></i>
                    </a>
                    <ul className='opened-navbar-dropdown'>
                        <li><a href="#">Alert</a></li>
                        <li><a href="#">Accordian</a></li>
                        <li><a href="#">Buttons</a></li>
                        <li><a href="#">Badges</a></li>
                        <li><a href="#">Cards</a></li>
                        <li><a href="#">Carousels</a></li>
                        <li><a href="#">List Group</a></li>
                        <li><a href="#">Modals</a></li>
                        <li><a href="#">Pogination</a></li>
                        <li><a href="#">Popover</a></li>
                        <li><a href="#">Progressbar</a></li>
                        <li><a href="#">Tabs</a></li>
                        <li><a href="#">Typograpgy</a></li>
                        <li><a href="#">Grid</a></li>
                    </ul>
                </li>
                <li className="menu-next-list">
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-briefcase"></i><span>Advance Kit</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">Toastr</a></li>
                        <li><a href="#">Sweet Alert</a></li>
                        <li><a href="#">Image Cropper</a></li>
                        <li><a href="#">CSS Loaders</a></li>
                        <li><a href="#">App Tour</a></li>
                        <li><a href="#">Ladda Button</a></li>
                        <li><a href="#">Dropzone</a></li>
                    </ul>

                </li>

                <li className="menu-next-list">
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-trophy"></i><span>Icons</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">Font Awesome</a></li>
                        <li><a href="#">Themify</a></li>
                        <li><a href="#">Ionicons V2</a></li>
                        <li><a href="#">ET Line Icons</a></li>
                    </ul>
                </li>
                <li className="menu-next-list">
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-map-marker"></i><span>Maps</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">Google Maps</a></li>
                        <li><a href="#">AM Chart Maps</a></li>
                    </ul>
                </li>

                <li className="menu-next-list">
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-credit-card"></i><span>Tables</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">Basic Tables</a></li>
                        <li><a href="#">Datatable</a></li>
                        <li><a href="#">JS Grid Table</a></li>
                    </ul>
                </li>

                <li className="menu-next-list">
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-clipboard"></i><span>Forms</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">Basic Elements</a></li>
                        <li><a href="#">Form Layouts</a></li>
                        <li><a href="#">Input Groups</a></li>
                        <li><a href="#">Form Validation</a></li>
                    </ul>
                </li>

                <li className="menu-next-list">
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-edit"></i><span>Editors</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">Text Editor</a></li>
                        <li><a href="#">Code Editor</a></li>
                    </ul>
                </li>

                <li className="menu-next-title">charts</li>
                <li className="menu-next-list">
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-pie-chart"></i><span>Charts</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">Chart Js</a></li>
                        <li><a href="#">Morris Chart Js</a></li>
                        <li><a href="#">C3 Chart Js</a></li>
                        <li><a href="#">Chartist Js</a></li>
                    </ul>
                </li>

                <li className="menu-next-title">pages</li>
                <li className="menu-next-list">
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-users"></i><span>Session</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Lock Screen</a></li>
                        <li><a href="#">Reset Password</a></li>
                        <li><a href="#">Forgot Password</a></li>
                    </ul>

                </li>

                <li className="menu-next-list" >
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-anchor"></i><span>Error Pages</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">404</a></li>
                        <li><a href="#">500</a></li>
                        <li><a href="#">505</a></li>
                    </ul>
                </li>

                <li className="menu-next-list" >
                    <a href="#" onClick={handleDropdownDisplay}>
                        <i className="fa fa-file-o"></i><span>Other Pages</span> <i className="arrow down"></i>
                    </a>
                    <ul className="opened-navbar-dropdown">
                        <li><a href="#">Blank Page</a></li>
                        <li><a href="#">Invoice</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Timeline</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    )
}

export default OpenedSidebar;