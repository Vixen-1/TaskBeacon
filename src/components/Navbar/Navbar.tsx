import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar({ buttonName, handleLogout }: { buttonName?: string, handleLogout?: () => void }) {
  const navigate = useNavigate();
  return (
    <motion.nav initial="hidden"
    animate="show" variants={fadeIn('up', 'spring', 0, 0.5)} className="navbar-data">
      <div className="navbar">
        <div onClick={() => navigate('/')} className="navbar-logo-heading">
          INotes
          <span className="navbar-logo-desc">your notes on the cloud</span>
        </div>
        {buttonName && (
          <IconButton className="signup-button" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        )}
      </div>
    </motion.nav>
  );
}