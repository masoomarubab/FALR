import '../../style.css';

const UserProfile = ({showProfile}) => {
    return (
        <div className={showProfile ? "profile-main-div-display && profile-main-div" : "profile-main-div"}>
            <div className="personal-info">
                <img src={require(`../../../images/user.png`)} alt="profileImage" />
                <p className="user-name">Monica Johnson</p>
                <p className="user-email">monica@john.co.uk</p>
            </div>

            <div className="profile-div">
                <i className="fa fa-user"></i>
                <span>Profile</span>
            </div>

            <div className="profile-logout">
                <i className="fa fa-power-off"></i>
                <span>Logout</span>
            </div>
        </div>
    )
}

export default UserProfile;