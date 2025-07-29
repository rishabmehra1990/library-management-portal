import './dashboard.css'
import DashboardHeader from './DashboardHeader'
import Sidebar from './Sidebar'
import DashboardStats from './DashboardStats'
import BooksTable from './BooksTable';

const Dashboard = () => {
    return (
        <div className='grid-container'>
            <DashboardHeader />
            <Sidebar />
            <div className="main-content">
                <DashboardStats />
                <BooksTable />
            </div>
        </div>
    )
}

export default Dashboard;
