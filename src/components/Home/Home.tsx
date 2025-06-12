import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import "./home.scss";
import "../../App.css";
import { motion } from "framer-motion";
import { slideIn, zoomIn } from "../../utils/motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      height="100vh"
      width="100%"
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <motion.h1
        initial="hidden"
        animate="show"
        variants={slideIn("up", "tween", 0.75, 1)}
        className="text-content"
      >
        <div className="text-[44px] font-semibold text-[#BBF7D0]">
          Welcome to TaskBeacon
        </div>
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="show"
        variants={zoomIn(1, 1)}
        className="sub-content"
      >
        <div>
          Your ultimate solution for managing tasks effortlessly on the cloud.
        </div>
        <div className="text-center">
          We will keep your tasks private and accessible only to you.
        </div>
        <div className="text-center">To organize Your Thoughts</div>
      </motion.div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingTop={4}
        gap={1}
        className="lower-content"
      >
        <Button
          onClick={() => navigate("/login")}
          variant="contained"
          className="custom-add-button animate-pulse"
        >
          Get Started
        </Button>
        <motion.div initial="hidden" animate="show" variants={zoomIn(1, 1)}>
          To continue, please{" "}
          <span className="text-xl font-serif text-[#BBF7D0]" onClick={() => navigate("/login")}>
            Log In
          </span>{" "}
          . Already a user?{" "}
          <span className="text-xl font-serif text-[#BBF7D0]" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
          .
        </motion.div>
        <p>Join us and take control of your notes today!</p>
      </Box>
    </Box>
  );
}
