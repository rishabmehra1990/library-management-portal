import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import "./dashboardheader.css";

function DashboardHeader() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:4000/auth/logout', {}, { withCredentials: true });
            navigate('/');
        } catch (err) {
            console.error('Logout failed', err);
        }
    };

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
                <button className='dashboard-logoutButton' onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
}

export default DashboardHeader;
