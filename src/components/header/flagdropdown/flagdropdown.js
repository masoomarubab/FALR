import '../../style.css';


const Flagdropdown = ({showFlag}) => {
    const countries = [
        {
            index: 1,
            name: 'Italy',
            flag: 'italy'
        },
        {
            index: 2,
           name: 'Germany',
            flag: 'germany'
        },
        {
            index: 3,
            name: 'Spain',
            flag: 'spain'
        },
        {
            index: 4,
            name: 'Turkey',
            flag: 'turkey'
        },
        {
            index: 5,
            name: 'United Kingdom',
            flag: 'uk'
        },
    ];

    return (
        <ul className={showFlag ? "nav-flag-dropdown && flag-dropdown-display" : "nav-flag-dropdown"}>{
            countries.map(({ index, name, flag }) => (
                <li key={index}>
                    <a href="#">
                        <img src={require(`../../../images/${flag}.svg`)} alt="flag" className="dropdown-flag" /><span
                            className="flag-span">{name}</span>
                    </a>
                </li>
            )
            )
        }
        </ul>

    )
}


export default Flagdropdown;