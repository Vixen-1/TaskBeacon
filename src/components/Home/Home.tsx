import { useNavigate } from "react-router-dom";
import image from "../../assets/main-bg.jpg";
import { Box, Button, Stack } from "@mui/material";
import "./home.scss"; // Update to use SCSS
import "../../App.css";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Stack position={"relative"} height={"100vh"} className="home">
      <Navbar />
      <img alt="nature" className="bg-img" src={image} />
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        className="content"
      >
        <h1 className="text-content animate-fadeIn">
          Welcome to INotes
        </h1>
        <Box className="sub-content animate-fadeIn">
          <div>Your ultimate solution for managing notes effortlessly on the cloud.</div>
          <div className="text-center">We will keep your notes private and accessible only to you.</div>
          <div className="text-center">To organize Your Thoughts</div>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={10}
          gap={1}
          className="lower-content"
        >
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            className="start-button animate-pulse"
          >
            Get Started
          </Button>
          <Box className="bottom-nav">
            To continue, please{" "}
            <span className="login-signup" onClick={() => navigate("/login")}>
              Log In
            </span>{" "}
            . Already a user?{" "}
            <span className="login-signup" onClick={() => navigate("/signup")}>
              Sign Up
            </span>
            .
          </Box>
          <p className="bottom-nav">Join us and take control of your notes today!</p>
        </Box>
      </Box>
    </Stack>
  );
}