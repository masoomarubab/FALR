import '../../../style.css';
import Home from '../../../../images/home.svg';
import Calendar from '../../../../images/calendar.svg';
import Gallery from '../../../../images/image.svg';
import Email from '../../../../images/mail.svg';
import Gitlab from '../../../../images/gitlab.svg';
import Briefcase from '../../../../images/briefcase.svg';
import Award from '../../../../images/award.svg';
import Mappin from '../../../../images/map-pin.svg';
import Creditcard from '../../../../images/credit-card.svg';
import Clipboard from '../../../../images/clipboard.svg';
import Edit from '../../../../images/edit.svg';
import Piechart from '../../../../images/pie-chart.svg';
import Users from '../../../../images/users.svg';
import Anchor from '../../../../images/anchor.svg';
import Fileplus from '../../../../images/file-plus.svg';
const ClosedSidebar = () => {
    return (
        <div className="header-col-1" id="collapsed-sideBar">
            <ul className="header-sidebar-list">
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Home} alt="home-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Dashboard</a>
                        </li>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Calendar} alt="calendar-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Calendar</a>
                        </li>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Gallery} alt="gallery-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Gallery</a>
                        </li>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Email} alt="mail-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Email</a>

                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Inbox</a>
                            </li>
                            <li>
                                <a href="#">Compose Email</a>
                            </li>
                            <li>
                                <a href="#">Read Email</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Gitlab} alt="features-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">UI Features</a>

                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Alert</a>
                            </li>
                            <li>
                                <a href="#">Accordian</a>
                            </li>
                            <li>
                                <a href="#">Buttons</a>
                            </li>
                            <li>
                                <a href="#">Badges</a>
                            </li>
                            <li>
                                <a href="#">Cards</a>
                            </li>
                            <li>
                                <a href="#">Carousels</a>
                            </li>
                            <li>
                                <a href="#">Dropdown</a>
                            </li>
                            <li>
                                <a href="#">List Group</a>
                            </li>
                            <li>
                                <a href="#">Modals</a>
                            </li>
                            <li>
                                <a href="#">Popover</a>
                            </li>
                            <li>
                                <a href="#">Progressbar</a>
                            </li>
                            <li>
                                <a href="#">Tabs</a>
                            </li>
                            <li>
                                <a href="#">Typography</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Briefcase} alt="advanceKit-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Advane Kit</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Toastr</a>
                            </li>
                            <li>
                                <a href="#">Sweet Alert</a>
                            </li>
                            <li>
                                <a href="#">Image Cropper</a>
                            </li>
                            <li>
                                <a href="#">Css Loaders</a>
                            </li>
                            <li>
                                <a href="#">App Tour</a>
                            </li>
                            <li>
                                <a href="#">Ladda Button</a>
                            </li>
                            <li>
                                <a href="#">Dropzone</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Award} alt="awards-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Icons</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Font Awesome</a>
                            </li>
                            <li>
                                <a href="#">Themify</a>
                            </li>
                            <li>
                                <a href="#">Ionicons V2</a>
                            </li>
                            <li>
                                <a href="#">ET Line Icons</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Mappin} alt="map-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Maps</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Google Maps</a>
                            </li>
                            <li>
                                <a href="#">AM Chart Maps</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Creditcard} alt="tables-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Tables</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Basic Tables</a>
                            </li>
                            <li>
                                <a href="#">Datatable</a>
                            </li>
                            <li>
                                <a href="#">JS Grid Table</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Clipboard} alt="clipboard-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Forms</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Basic Elements</a>
                            </li>
                            <li>
                                <a href="#">Form Layouts</a>
                            </li>
                            <li>
                                <a href="#">Input Groups</a>
                            </li>
                            <li>
                                <a href="#">Form Validation</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Edit} alt="edit-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Editors</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Text Editor</a>
                            </li>
                            <li>
                                <a href="#">Code Editor</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Piechart} alt="charts-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Charts</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Chart JS</a>
                            </li>
                            <li>
                                <a href="#">Morris Chart JS</a>
                            </li>
                            <li>
                                <a href="#">C3 Chart JS</a>
                            </li>
                            <li>
                                <a href="#">Chartist JS</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Users} alt="users-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Session</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Login</a>
                            </li>
                            <li>
                                <a href="#">Register</a>
                            </li>
                            <li>
                                <a href="#">Lock Screen</a>
                            </li>
                            <li>
                                <a href="#">Reset Password</a>
                            </li>
                            <li>
                                <a href="#">Forget Password</a>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Anchor} alt="anchor-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Errors</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">404</a>
                            </li>
                            <li>
                                <a href="#">500</a>
                            </li>
                            <li>
                                <a href="#">505</a>
                            </li>

                        </ul>
                    </ul>
                </li>
                <li className="header-sidebar-listItem">
                    <a href="#">
                        <img src={Fileplus} alt="add-icon" />
                    </a>
                    <ul className="header-sidebar-dropdown">
                        <li>
                            <a href="">Other Pages</a>
                        </li>
                        <ul className="header-sidebar-dropdown-list">
                            <li>
                                <a href="#">Blank Page</a>
                            </li>
                            <li>
                                <a href="#">Invoice</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>

                        </ul>
                    </ul>
                </li>
            </ul>
        </div>
    )

}
export default ClosedSidebar;