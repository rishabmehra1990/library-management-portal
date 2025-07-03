import { useEffect, useRef, useState } from "react";
import "./modal-popup.css";

const AccountModal = ({ onClose, buttonRef }) => {
  const modalRef = useRef();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 6,
        left: rect.right - 220,
      });
    }
  }, [buttonRef]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!position) return null;

  return (
    <div
      className="account-dropdown"
      ref={modalRef}
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <ul>
        <li><button>My Account</button></li>
        <li><button>Support Requests</button></li>
        <li><button>Request A Book</button></li>
        <li><button>Donate Books</button></li>
        <li><button>Promote Books</button></li>
        <li><button>Checkout</button></li>
        <li><button>Wishlist</button></li>
        <li><button>Login</button></li>
        <li><button>Register</button></li>
      </ul>
    </div>
  );
}

export default AccountModal