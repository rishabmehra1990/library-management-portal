import './dashboardstats.css';
import { FaUserAlt, FaUserFriends, FaDesktop } from 'react-icons/fa';

const DashboardStats = () => {
  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <div className="icon-circle">
          <FaUserAlt className="icon" />
        </div>
        <div>
          <p className="label">Total Customers</p>
          <h2 className="value">2,143</h2>
        </div>
      </div>

      <div className="stat-card">
        <div className="icon-circle">
          <FaUserFriends className="icon" />
        </div>
        <div>
          <p className="label">Members</p>
          <h2 className="value">345</h2>
        </div>
      </div>

      <div className="stat-card">
        <div className="icon-circle">
          <FaDesktop className="icon" />
        </div>
        <div>
          <p className="label">Active Now</p>
          <h2 className="value">40</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
