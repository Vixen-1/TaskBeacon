import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar({ buttonName, handleLogout }: { buttonName?: string, handleLogout?: () => void }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar-data animate-fadeIn">
      <div className="navbar">
        <div onClick={() => navigate('/')} className="navbar-logo-heading">
          INotes
          <span className="navbar-logo-desc">your notes on the cloud</span>
        </div>
        {buttonName && (
          <div>
            <button
              className="signup-button"
              onClick={handleLogout}
            >
              <span>{buttonName}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}