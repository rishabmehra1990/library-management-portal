import { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaUser, FaBars, FaSearch } from "react-icons/fa";
import AccountModal from "./AccountModal";
import "./header.css";

const Header = () => {
  const [cartCount] = useState(0);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const accountBtnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showAccountModal &&
        !e.target.closest(".account-dropdown") &&
        !e.target.closest(".account-button")
      ) {
        setShowAccountModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAccountModal]);

  return (
    <>
      <header className="header-container">
        <div className="header-left">
          <button className="category-button">
            <FaBars />
            <span className="category-text">All Categories</span>
          </button>
          <h1 className="logo">
            <span className="text-white">Bookify</span>
          </h1>
        </div>

        <div className="header-center">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search For Books"
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
        </div>

        <div className="header-right">
          <div className="cart-icon">
            <FaShoppingCart size={20} />
            <span className="cart-badge">{cartCount}</span>
          </div>
          <div className="account-wrapper">
            <button
              className="account-button"
              onClick={() => setShowAccountModal((prev) => !prev)}
              ref={accountBtnRef}
            >
              Account <FaUser />
            </button>
          </div>
        </div>
      </header>

      {showAccountModal && (
        <AccountModal
          onClose={() => setShowAccountModal(false)}
          buttonRef={accountBtnRef}
        />
      )}
    </>
  );
}

export default Header
