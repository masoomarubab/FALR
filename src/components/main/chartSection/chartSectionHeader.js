import { useState } from 'react';
import '../../../components/style.css';

const ChartSectionHeader = () => {
    const [date, displayDate] = useState(false);

     function displayBtnDate() {
        displayDate(!date);
        // console.log(date)
        // var btnDate = document.querySelector('.btn-dates-div');
        // btnDate.classList.toggle('btn-dates-div-display');
    }
    const tabs = [
        {
            index: 1,
            tab: "App"
        },
        {
            index: 2,
            tab: "Dashboard"
        },
        {
            index: 3,
            tab: "Analytics"
        },
    ]

    return (
        <div className="main-content-subdiv">
            <div className="main-content-subdiv1">
                <h5 className="main-dashboard-heading">Dashboard</h5>
                <div className="main-tabs">
                    {
                        tabs.map(({ index, tab }) => (
                            <p key={index}>
                                {tab}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className="main-content-subdiv2">
                <button className="main-btn-date">02 Aug 2021
                    <a href="#" className="btn-date-arrow" onClick={displayBtnDate}>
                        <i className="fa fa-angle-down"  style={{ paddingLeft: "15px" }}></i>
                    </a>
                </button>
                <div className={date ? "btn-dates-div-display && btn-dates-div" : "btn-dates-div"}>
                        <p>
                            Sept 2021
                        </p>
                        <p>
                            Oct 2021
                        </p>
                        <p>
                            Nov 2021
                        </p>
                    </div>
                <button className="main-btn-report">Download Report
                </button>
            </div>
        </div>
    )
}

export default ChartSectionHeader;

