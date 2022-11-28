import '../../style.css';

const MessageDropdown = ({showMessage}) => {
    const messageDetails = [
        {
            index: 1,
            image: 'author-img1',
            senderName: 'John Doe',
            msg: 'Hello are you there?',
            time: '3:15 PM'
        },
        {
            index: 2,
            image: 'author-img4',
            senderName: 'David Boss',
            msg: 'Waiting for your response..',
            time: '3:15 PM'
        },
        {
            index: 3,
            image: 'user',
            senderName: 'Jason Roy',
            msg: 'Hi there! Hope you are well',
            time: '3:15 PM'
        },
        {
            index: 4,
            image: 'author-img2',
            senderName: 'Malika Roy',
            msg: 'Hi there! Hope you are well',
            time: '3:15 PM'
        },
        {
            index: 5,
            image: 'author-img1',
            senderName: 'John Doe',
            msg: 'Hello are you there?',
            time: '3:15 PM'
        },
        {
            index: 6,
            image: 'author-img4',
            senderName: 'David Boss',
            msg: 'Waiting for your response..',
            time: '3:15 PM'
        },
        {
            index: 7,
            image: 'user',
            senderName: 'Rebecca',
            msg: 'Waiting for your response..',
            time: '3:15 PM'
        }

    ]
    return (
        <div className={showMessage ? "message-main-div-display && message-main-div" : "message-main-div"}>
            <div className="message-main-heading">
                You have 3 new messages
            </div>

            <div style={{ padding: '60px 0 0 0' }}></div>

            {
            messageDetails.map( ({index, image, senderName, msg, time}) => (
            <div className="message-sub-div" key={index}>
                <div className="message-icon-div">
                    <img src={require(`../../../images/${image}.png`)} alt="author1" />
                </div>
                <div className="message-details-div">
                    <h3>{senderName}</h3>
                    <span>{msg}</span>
                    <span>{time}</span>
                </div>
            </div>
            ))
            }
           

        </div>
    )
}
export default MessageDropdown;