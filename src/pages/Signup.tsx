import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { Button } from "@mui/material";
import axios from "axios";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import image from "../assets/main-bg.jpg";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

interface OtpFormData {
  otp: string;
  email: string;
}

const Signup: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });

  const [otpData, setOtpData] = useState<OtpFormData>({
    otp: "",
    email: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [viewOtp, setViewOtp] = useState<boolean>(false);

  const validateFields = () => {
    const newErrors = { name: "", email: "", password: "" };

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must have minimum 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email.";
    }

    if (formData.password.trim().length < 5) {
      newErrors.password = "Password must contain a minimum of 5 characters.";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleOtpGeneration = async () => {
    if (!validateFields()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        "https://todo-cloudy.onrender.com/api/auth/createuser",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.message) {
        setViewOtp(true);
        toast.info(response.data.message);
        setError(null);
      } else if (response.status === 400 && response.data.error) {
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

  const handleSignup = async () => {
    if (!validateFields()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        "https://todo-cloudy.onrender.com/api/auth/verify-otp-createuser",
        otpData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.authToken) {
        secureLocalStorage.setItem("authToken", response.data.authToken);
        navigate("/mainpage");
        setError(null);
      } else if (response.status === 400 && response.data.error) {
        await setError(response.data.error);
        toast.error(`${error}`);
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
      setViewOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleOtpGeneration();
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://todo-cloudy.onrender.com/api/auth/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "https://todo-cloudy.onrender.com/api/auth/github";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setOtpData((prev) => ({ ...prev, email: formData.email }));
  }, [formData.email]);

  // ...

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and max 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOtpData({
        ...otpData,
        otp: value,
      });
    }
  };

  return (
    <Stack>
      <img alt="nature" className="bg-img" src={image} />
      <Box
        minHeight={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box className="signup-box">
          <Typography
            variant="h4"
            color={"white"}
            textAlign={"center"}
            fontWeight={"bold"}
            pt={3}
          >
            Signup
          </Typography>
          <form onSubmit={handleSubmit} className="my-1 mx-6">
          
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <Box>
                  <Typography className="label">Name</Typography>
                  <TextField
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    className="input-login"
                  />
                </Box>
                <Box>
                  <Typography className="label">Email</Typography>
                  <TextField
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    className="input-login"
                  />
                </Box>
                {!viewOtp ? (
                  <Box>
                    <Typography className="label">Password</Typography>
                    <TextField
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      error={!!errors.password}
                      helperText={errors.password}
                      className="input-login"
                    />
                  </Box>
                ) : (
                  <Box>
                    <Typography className="label">OTP</Typography>
                    <TextField
                      type="otp"
                      name="OTP"
                      id="otp"
                      value={otpData.otp}
                      onChange={handleOtpChange}
                      // error={otpData.otp.length !== 6}
                      // helperText={
                      //   otpData.otp.length !== 6
                      //     ? "Enter a valid 6-digit OTP"
                      //     : ""
                      // }
                      className="input-login"
                    />
                  </Box>
                )}
              </Box>
         
            {loading ? (
              <Loader />
            ) : !viewOtp ? (
              <Box className="submit-button mt-6">
                <button type="submit">Generate OTP</button>
              </Box>
            ) : (
              <Box className="submit-button mt-6">
                <Button
                  onClick={handleSignup}
                  // disabled={otpData.otp.length !== 6}
                >
                  Signup
                </Button>
              </Box>
            )}
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
              Already have an account?{" "}
              <span className="bottom-link" onClick={() => navigate("/login")}>
                Login
              </span>
              .
            </Box>
          </form>
        </Box>
      </Box>
    </Stack>
  );
};

export default Signup;
