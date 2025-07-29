import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import "./dashboardheader.css";

const handleLogout = async (navigate) => {
    
    try {
        const response = await fetch('http://localhost:4000/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Logout failed');
        }
        navigate('/');
    } catch (err) {
        console.error('Logout failed', err);
    }
};

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
