import '../../style.css';

const NotificationDropdown = ({showNotifications}) => {
    const notificationDetails = [
        {
            index : 1,
            iconDivClass: 'notification-icon-div',
            iconClass: 'fa fa-user-tie',
            messageHeading: 'You add your Location',
            messageTime: 'Just Now'
        },
        {
            index : 2,
            iconDivClass: 'notification-icon-div2',
            iconClass: 'fa fa-bolt',
            messageHeading: 'Your Subscription Expired',
            messageTime: '30 seconds ago'
        },
        {
            index : 3,
            iconDivClass: 'notification-icon-div3',
            iconClass: 'fa fa-heart',
            messageHeading: 'Someone special like you',
            messageTime: 'Just Now'
        },
        {
            index : 4,
            iconDivClass: 'notification-icon-div4',
            iconClass: 'fa fa-message',
            messageHeading: 'New Comments on Post',
            messageTime: '30 seconds ago'
        },
        {
            index : 5,
            iconDivClass: 'notification-icon-div5',
            iconClass: 'fa fa-gear',
            messageHeading: 'You changed your settings',
            messageTime: 'Just Now'
        },
        {
            index : 6,
            iconDivClass: 'notification-icon-div6',
            iconClass: 'fa fa-image',
            messageHeading: 'Image uploaded successfully',
            messageTime: 'Just Now'
        },
    ]
    return (
        <div className={showNotifications ? "notification-main-div-display && notification-main-div" : "notification-main-div"}>
            <div className="notifi-main-heading">
                You have 3 new notifications
            </div>
            {
                notificationDetails.map(({index, iconDivClass, iconClass, messageHeading, messageTime}) => (
                    <div className="notification-main-sub-div" key={index}>
                        <div className={iconDivClass}>
                            <i className={iconClass}></i>
                        </div>
                        <div className="notification-msg-div">
                            <h3>{messageHeading}</h3>
                            <span>{messageTime}</span>
                        </div>
                    </div>
                ))
            }

        </div>
    )

}

export default NotificationDropdown;