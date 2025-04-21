import { useNavigate } from "react-router-dom";
import "../assets/styles/common.css";
import { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import image from "../assets/main-bg.jpg";
import { Box, Stack, TextField, Typography } from "@mui/material";
import "../App.css";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

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
        'https://todo-cloudy.onrender.com/api/auth/login',
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
        toast.error(error)
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        await setError(err.response.data.error);
        toast.error(error)
        console.error(error);
      } else {
        setError("An unexpected error occurred.");
        toast.error(error)
      }
    }finally{
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
    <Stack className="signup">
      <img alt="nature" className="bg-img" src={image} />
      <Box
        minHeight={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box className="signup-box">
          <Typography
            color={"white"}
            fontWeight={'bold'}
            variant="h4"
            textAlign={"center"}
            paddingTop={3}
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit} className="form mx-10 my-6">
            <Box display={'flex'} flexDirection={'column'} gap={2} >
              <Box>
                <Typography className="label">Email</Typography>
                <TextField
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-login text-white"
                />
              </Box>
              <Box>
                <Typography className="label pt-4">Password</Typography>
                <TextField
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="input-login text-white"
                />
              </Box>
            </Box>
            {loading? <Box className="pt-5"><Loader /></Box> : <Box className="submit-button mt-10">
              <button type="submit">Login</button>
            </Box>}
          </form>

          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={10}
            justifyContent={"center"}
          >
            <FcGoogle
              className="font-bold cursor-pointer text-2xl"
              onClick={handleGoogleLogin}
            />
            <SiGithub
              className="github-icon text-2xl"
              onClick={handleGithubLogin}
            />
          </Box>

          <Box className="bottom">
            Don't have an account?{" "}
            <span className="bottom-link" onClick={() => navigate("/Signup")}>
              Signup
            </span>
            .
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
