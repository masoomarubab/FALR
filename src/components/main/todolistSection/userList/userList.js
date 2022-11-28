import '../../../../components/style.css';
const UserList = () => {
    const userData = [
        {
            index: 1,
            date: "24 Jan 2019",
            activity: "User Logged in Successfully"
        },
        {
            index: 2,
            date: "25 Mar 2019",
            activity: "Architecto atque cupiditate"
        },
        {
            index: 3,
            date: "26 Aug 2019",
            activity: "Fugit illum laborum minima"
        },
        {
            index: 4,
            date: "27 Nov 2019",
            activity: "Consectetur adipisicing elit"
        },
        {
            index: 5,
            date: "24 Jan 2019",
            activity: "Consectetur adipisicing elit"
        },
    ]
    return (
        <div className="todolist-col-3">
            <h4 className="browser-col-1-title">users activity</h4>
            <ul className="bullet-line-list">
                {userData.map(({ index, date, activity }) => (
                    <li key={index}>
                        <p className="list-date">{date}</p>
                        <p className="list-text">{activity}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default UserList;