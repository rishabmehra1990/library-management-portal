import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import "./dashboardheader.css";
import handleLogout from '../util/handleLogout';

const DashboardHeader = () => {
    const navigate = useNavigate();

    return (
        <header className='dashboard-header'>
            <div className='dashboard-header-left'>
                <h3 className='dashboard-greeting'>Hello Admin</h3>
            </div>

            <div className='dashboard-header-right'>
                <BsSearch className='dashboard-icon' />
                <input
                    type='text'
                    className='dashboard-search-bar'
                    placeholder='Search...'
                />
            </div>
            <div>
                <button className='dashboard-logoutButton' onClick={() => handleLogout(navigate)}>Logout</button>
            </div>
        </header>
    );
}

export default DashboardHeader;
