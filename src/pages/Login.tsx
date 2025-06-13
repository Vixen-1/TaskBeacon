import { useNavigate } from "react-router-dom";
import { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://todo-cloudy.onrender.com/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.authToken) {
        secureLocalStorage.setItem("authToken", response.data.authToken);
        setError(null);
        navigate("/mainpage");
      }
      if (response.data.error) {
        await setError(response.data.error);
        toast.error(error);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        await setError(err.response.data.error);
        toast.error(error);
        console.error(error);
      } else {
        setError("An unexpected error occurred.");
        toast.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "api/auth/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "api/auth/github";
  };

  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
        pointerEvents: "auto",
        zIndex: 10,
        position: "relative",
      }}
      initial="hidden"
      animate="show"
      variants={slideIn("right", "tween", 0.1, 1)}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={1}
          pt={2}
          px={4}
        >
          
            <Box display={"flex"} justifyContent={"center"} mt={3}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                className="custom-add-button"
                disabled={loading}
              >
                {!loading? `Login` : `Logging in...`}
              </Button>
            </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={10}
            justifyContent={"center"}
            pt={2}
          >
            <FcGoogle
              className="font-bold cursor-pointer text-2xl"
              onClick={handleGoogleLogin}
            />
            <SiGithub
              className="text-2xl text-[#BBF7D0]"
              onClick={handleGithubLogin}
            />
          </Box>

          <Box>
            Don't have an account?
            <span
              className="text-[#BBF7D0] text-xl font-serif cursor-pointer"
              onClick={() => navigate("/Signup")}
            >
              {" "}Signup
            </span>
            .
          </Box>
        </Box>
        <Box
          padding={4}
          sx={{
            backgroundColor: "#BBF7D0",
            borderRadius: "20px",
            width: "100%",
            maxWidth: "550px",
          }}
        >
          <Typography
            fontSize={"24px"}
            textAlign={"center"}
            fontWeight={600}
            fontFamily={"Poppins"}
            className={"text-primary"}
          >
            Login
          </Typography>
          <form className="flex flex-col gap-2">
            <Box className="flex flex-col">
              <span className="text-[#6f5f5f] font-semibold">Email</span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </Box>

            <Box className="flex flex-col">
              <span className="text-[#6f5f5f] font-semibold">Password</span>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="What's your password?"
                className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </Box>
          </form>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Login;
