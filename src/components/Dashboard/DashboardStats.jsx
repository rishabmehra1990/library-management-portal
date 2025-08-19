import './dashboardstats.css';
import { FaUserAlt, FaUserFriends, FaDesktop } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import GetData from '../util/GetData';

const DashboardStats = () => {

  const [stats, setStats] = useState({
    totalQuantity: 0,
    totalBooks: 0,
    availableBooks: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await GetData("inventory/stats"); 
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <div className="icon-circle">
          <FaUserAlt className="icon" />
        </div>
        <div>
          <p className="label">Total Quantity</p>
          <h2 className="value">{stats.totalQuantity}</h2>
        </div>
      </div>

      <div className="stat-card">
        <div className="icon-circle">
          <FaUserFriends className="icon" />
        </div>
        <div>
          <p className="label">Books</p>
          <h2 className="value">{stats.totalBooks}</h2>
        </div>
      </div>

      <div className="stat-card">
        <div className="icon-circle">
          <FaDesktop className="icon" />
        </div>
        <div>
          <p className="label">Available Books</p>
          <h2 className="value">{stats.availableBooks}</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
