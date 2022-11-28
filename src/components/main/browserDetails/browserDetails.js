import '../../../components/style.css';
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const BrowserDetails = () => {
    const browsers = [
        {
            index: 1,
            divMainClasss: 'browser-details-sub-div1',
            image: 'chrome',
            title: 'Chrome Users',
            date: '14-03-2021',
            badgeClass: 'badge',
            badgeNum: '+155'
        },
        {
            index: 2,
            divMainClasss: 'browser-details-sub-div2',
            image: 'firefox',
            title: 'Firefox Users',
            badgeClass: 'badge-red',
            date: '14-03-2021',
            badgeNum: '+54'
        },
        {
            index: 3,
            divMainClasss: 'browser-details-sub-div3',
            image: 'safari',
            title: 'Safari Users',
            date: '14-03-2021',
            badgeClass: 'badge',
            badgeNum: '+22'
        },
        {
            index: 4,
            divMainClasss: 'browser-details-sub-div1',
            image: 'opera',
            title: 'Opera Users',
            date: '14-03-2021',
            badgeClass: 'badge',
            badgeNum: '+122'
        },
    ]
    const browserChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Users',
            data: [34, 19, 16, 22, 35, 25, 40, 70, 85, 50, 23, 20],
            backgroundColor: '#5b46c0',
            borderColor: '#5b46c0',
            borderWidth: 1
        }]
    }
    const browserOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    display: false,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            y: {
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
    };
    const tableData = [
        {
            index: 1,
            rowClass: 'row1',
            image: 'author-img1',
            userName: 'Dennis A. Short',
            OrderID: 547,
            sales: '100$',
            Company: 'David Co.',
            date: '12-06-2019'
        },
        {
            index: 2,
            rowClass: 'row2',
            image: 'author-img4',
            userName: 'Jason A. Short',
            OrderID: 547,
            sales: '100$',
            Company: 'David Co.',
            date: '12-06-2019'
        },
        {
            index: 3,
            rowClass: 'row3',
            image: 'user',
            userName: 'Barbara J.',
            OrderID: 6547,
            sales: '8000$',
            Company: 'David Co.',
            date: '12-06-2019'
        },
        {
            index: 4,
            rowClass: 'row4',
            image: 'author-img2',
            userName: 'Enthony E. Hurst',
            OrderID: 4547,
            sales: '100$',
            Company: 'David Co.',
            date: '12-06-2019'
        },
        {
            index: 5,
            rowClass: 'row5',
            image: 'author-img4',
            userName: 'Wendy B. Fenklin',
            OrderID: 547,
            sales: '100$',
            Company: 'David Co.',
            date: '12-06-2019'
        },
    ]
    return (
        <div className="main-browser-details-div">
            <div className="browser-col-1">
                <h4 className="browser-col-1-title">visitors by browser</h4>
                <div className="browser-details-main-div">
                    {
                        browsers.map(({ index, divMainClasss, image, title, date, badgeClass, badgeNum }) => (
                            <div className={divMainClasss} key={index}>
                                <div className="detail-col-1">
                                    <div className="browser-img">
                                        <img src={require(`../../../images/${image}.png`)} alt="chrome" className="chrome" />
                                    </div>
                                    <div className="browser-head">
                                        <h5>
                                            {title}

                                        </h5>
                                        <span className="browser-span">
                                            {date}
                                        </span>
                                    </div>
                                </div>
                                <div className="detail-col-2">
                                    <span className={badgeClass}>{badgeNum}</span>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className="browser-graph">
                    <Bar
                        data={browserChart}
                        options={browserOptions}
                    />
                </div>
            </div>

            <div className="browser-col-2">
                <div className="browser-col-2-heading">
                    <div className="browser-hheading">
                        <h4 className="browser-col-1-title">daily traffic statistics</h4>
                    </div>
                    <div className="browser-day-selector">
                        <select>
                            <option>Month</option>
                            <option>Yesterday</option>
                            <option>Today</option>
                        </select>
                    </div>

                </div>
                <div className="divForTable">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Avatar</td>
                                <td>Name</td>
                                <td>Order ID</td>
                                <td>Sales</td>
                                <td>Company</td>
                                <td>Date Created</td>
                                <td>Rating</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map(({ index, rowClass, image, userName, OrderID, sales, Company, date }) => (
                                    <tr className={rowClass} key={index}>
                                        <td>
                                            <div className="img-data">
                                                <img src={require(`../../../images/${image}.png`)} alt="image1" />
                                            </div>
                                        </td>
                                        <td>
                                            {userName}
                                        </td>
                                        <td>
                                            {OrderID}
                                        </td>
                                        <td>
                                           {sales}
                                        </td>
                                        <td>
                                            {Company}
                                        </td>
                                        <td>
                                            {date}
                                        </td>
                                        <td>
                                            <i className="fa fa-star table-stars"></i>
                                            <i className="fa fa-star table-stars"></i>
                                            <i className="fa fa-star table-stars"></i>
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default BrowserDetails; 