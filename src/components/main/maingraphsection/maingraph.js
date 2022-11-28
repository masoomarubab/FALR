import '../../../components/style.css';
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const lineChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [{
        label: ['Pre-order sale'],
        data: [550, 620, 530, 610, 540, 770, 700, 800],
        borderColor: "#47bd2a",
        fill: true,
        borderWidth: 4,
        tension: 0.3,
    }, {
        label: ['Order sale'],
        data: [750, 800, 670, 1000, 790, 1020, 800, 920],
        borderColor: "#5b46c0",
        fill: true,
        borderWidth: 4,
        tension: 0.3,
    },]
}
const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
};
const reportOptions = {
    layout: {
        padding : {
            left: 15
        }
    },
    indexAxis: 'y',
    plugins: {
        legend: {
            display: false,
        },
       
    },
    scales: {
        // to remove the labels
        x: {
            ticks: {
                display: false,
            },
            // to remove the x-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },
        // to remove the y-axis labels
        y: {
            ticks: {
                display: false,
                beginAtZero: true,
            },
            // to remove the y-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },
    },
    plotOptions: {
        bar: {
          horizontal: true,
          
        }
      },
}
const reportChart = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
        {
            axis : 'y',
            label: "Week 1 sales",
            backgroundColor: "#5b46c0",
            data: [4463, 6221, 4783, 2478]
        }, {
            axis : 'y',
            label: "Week 2 sales",
            backgroundColor: "#47bd2a",
            data: [4108, 6547, 1675, 7234]
        }, {   
            axis : 'y',
            label: "Week 3 sales",
            backgroundColor: "#ff8a32",
            data: [1408, 4547, 2675, 7734]
        }, {
            axis : 'y',
            label: "Week 4 sales",
            backgroundColor: "#5555",
            data: [4408, 5447, 6275, 8734]
        }

    ]
}

const MainGraph = () => {
    return (
        <div className="main-graphs">
            <div className="main-graph-div">
                <h4 className="graph-heading">
                    USER SALES OVERVIEW
                </h4>
                <p className="graph-para">Eum perspiciatis autem vero, corporis, itaque placeat voluptates. Molestias
                    molestiae cum fugiat.</p>
                <Line
                    data={lineChart}
                    options={options}
                />
            </div>

            <div className="main-bar-graph">
                <h4 className="graph-bar-heading">
                    Recent Average Sales
                </h4>
                <h1 className="graph-bar-dollar-price">
                    $956.78
                </h1>
                <h4 className="graph-bar-per-sale">
                    per sale
                </h4>
                <p className="graph-bar-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis dolor. Cconsectetur
                    adipisicing elit. Atque debitis dolor.
                </p>
                <button className="graph-btn">View Report</button>

                <Bar
                    data={reportChart}
                    options={reportOptions}
                />
            </div>
        </div>
    )
}
export default MainGraph;