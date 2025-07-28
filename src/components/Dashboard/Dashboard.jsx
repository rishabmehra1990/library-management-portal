import './dashboard.css'
import DashboardHeader from './DashboardHeader'
import Sidebar from './Sidebar'
import DashboardStats from './DashboardStats'
import StudentTable from './StudentTable';

function Dashboard() {
    return (
        <div className='grid-container'>
            <DashboardHeader />
            <Sidebar />
            <div className="main-content">
                <DashboardStats />
                <StudentTable />
            </div>
        </div>
    )
}

export default Dashboard;
