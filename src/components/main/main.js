import '../style.css';
import BrowserDetails from './browserDetails/browserDetails';
import ChartSectionHeader from './chartSection/chartSectionHeader';
import Footer from './footer/Footer';
import MainGraph from './maingraphsection/maingraph';
import ProductTable from './productTable/productTable';
import ClosedSidebar from './sidebar/closedSidebar/closedSidebar';
import OpenedSidebar from './sidebar/openedSidebar/openedSidebar';
import Statistics from './stats/stats';
import TodoListSection from './todolistSection/todolistSection';

const Main = () => {
    return (
        <div className='main'>
            <ClosedSidebar />
            <OpenedSidebar />
            <div className="main-content-div">
                <ChartSectionHeader />
                <Statistics />
                <MainGraph />
                <BrowserDetails />
                <TodoListSection />
                <ProductTable />
                <Footer />
            </div>
        </div>
    )
}

export default Main;