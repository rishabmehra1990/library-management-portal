import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <i className="fa-solid fa-user-tie"></i>
          <span>Admin</span>
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#"><i className="fa-solid fa-book"></i><span>Books</span></a>
        </li>
        <li className="sidebar-list-item">
          <a href="#"><i className="fa-solid fa-upload"></i><span>Publisher</span></a>
        </li>
        <li className="sidebar-list-item">
          <a href="#"><i className="fa-solid fa-list"></i><span>Categories</span></a>
        </li>
        <li className="sidebar-list-item">
          <a href="#"><i className="fa-solid fa-cart-flatbed"></i><span>Inventory</span></a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
