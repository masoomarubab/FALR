import '../../../../components/style.css';
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

var x = ["Ads", "Affilaite", "Advertisements", "Yandex"];
var yValues = [26, 15, 39, 26];
var barColors = [
    "#5b46c0",
    "#47bd2a",
    "#ff8a32",
    "#e8c3b9",
];
const doughnutData = {
    labels: x,
    datasets: [{
        backgroundColor: barColors,
        data: yValues
    }]
}
const doughnutOptions = {
    plugins: {
        legend: {
            display: false,
        },
    },
};

const tableData = [
    {
        index : 1,
        tableClass: 'doughnut-table-row1',
        tableTitle: 'Ads',
        price: '$3800',
        views: '2.2K',
        spanClass: 'doughnut-span1',
        spanData: 2.59
    },
    {
        index : 2,
        tableClass: 'doughnut-table-row2',
        tableTitle: 'Affiliates',
        price: '$3150',
        views: '1.3K',
        spanClass: 'doughnut-span2',
        spanData: 2.01
    },
    {
        index : 3,
        tableClass: 'doughnut-table-row3',
        tableTitle: 'Yandex',
        price: '$1800',
        views: '0.5K',
        spanClass: 'doughnut-span3',
        spanData: 1.12
    },
]
const SalesList = () => {
    return (
        <div className="todolist-col-2">
            <div className="country-col-2-heading">
                <div className="country-hheading">
                    <h4 className="browser-col-1-title">Sales by country</h4>
                </div>
                <div className="country-day-selector">
                    <select>
                        <option>Month</option>
                        <option>Yesterday</option>
                        <option>Today</option>
                    </select>
                </div>

            </div>

            <div className="doughnut-graph">

                <Doughnut
                    data={doughnutData}
                    options={doughnutOptions}
                />
            </div>
            <div className="parent-table">
                <table className="doughnut-table">
                    <tbody>
                        {
                            tableData.map(({index,tableClass,tableTitle,price,views,spanClass,spanData}) => (
                                <tr className={tableClass} key={index}>
                                    <td className="ads">{tableTitle}</td>
                                    <td className="doughnut-price">{price}</td>
                                    <td className="total-views">{views}</td>
                                    <td className={`doughnut-span ${spanClass}`}>
                                        <span>{spanData}</span>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default SalesList;