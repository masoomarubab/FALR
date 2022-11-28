import '../../../components/style.css';

const Statistics = () => {
    const statistics = [
        {
            index : 1,
            statsClass : "statistics-div1",
            statsTitle : "Number Of Sales",
            statsNumber : '5,001',
            statsPercent : '1.92%',
            statsIconClass : 'stats-icon',
            statsArrow : 'fa fa-arrow-up',
        },
        {
            index : 2,
            statsClass : "statistics-div2",
            statsTitle : "New Products",
            statsNumber : '94,356',
            statsPercent : '1.92%',
            statsIconClass : 'stats-icon2',
            statsArrow : 'fa fa-arrow-down',
        },
        {
            index : 3,
            statsClass : "statistics-div3",
            statsTitle : "New Users",
            statsNumber : '1,253',
            statsPercent : '1.27%',
            statsIconClass : 'stats-icon3',
            statsArrow : 'fa fa-arrow-up',
        },
        {
            index : 4,
            statsClass : "statistics-div4",
            statsTitle : "Today Earning",
            statsNumber : '5,224',
            statsPercent : '1.92%',
            statsIconClass : 'stats-icon4',
            statsArrow : 'fa fa-arrow-up',
        },
    ]
    return (
        <div className="main-statistics-div">
            {
                statistics.map(({index, statsClass, statsTitle, statsNumber,statsPercent,statsIconClass,statsArrow  }) => (
                    <div className={statsClass} key={index}>
                    <div className="statistics-card">
                        <p>{statsTitle}</p>
    
                        <div className="stats-number">
                            <h3 className="stats-heading">{statsNumber}</h3>
                            <div className={statsIconClass}>
                                <i className={statsArrow}></i>
                            </div>
                        </div>
                        <p>{statsPercent} <small>(Since last month)</small> </p>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Statistics;