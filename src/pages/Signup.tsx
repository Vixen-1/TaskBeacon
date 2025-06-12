import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { Button } from "@mui/material";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
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
        toast.success("Signup Successful!");
        setError(null);
        navigate("/login");
      } else if (response.status === 400 && response.data.error) {
        await setError(response.data.error);
        toast.error(`${error}`);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        await setError(err.response.data.error);
        toast.error(error);
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
    <motion.div
      style={{ width: "100vw", height: "100vh", pointerEvents: 'auto',  zIndex: 10,
    position: "relative", }}
      initial="hidden"
      animate="show"
      variants={slideIn("left", "tween", 0.1, 1)}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
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
            Signup
          </Typography>
          <form className="flex flex-col gap-2">
            <Box className="flex flex-col">
              <span className="text-[#6f5f5f] font-semibold">Name</span>
              <input
                type="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              {errors.name && (
                <span className="text-red-600 text-[11px]">{errors.name}</span>
              )}
            </Box>
            <Box className="flex flex-col">
              <span className="text-[#6f5f5f] font-semibold">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              {errors.email && (
                <span className="text-red-600 text-[11px]">{errors.email}</span>
              )}
            </Box>
            {!viewOtp ? (
              <Box className="flex flex-col">
                <span className="text-[#6f5f5f] font-semibold">Password</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="What's your password?"
                  className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                {errors.password && (
                  <span className="text-red-600 text-[11px]">
                    {errors.password}
                  </span>
                )}
              </Box>
            ) : (
              <Box className="flex flex-col">
                <span className="text-[#6f5f5f] font-semibold">OTP</span>
                <input
                  type="text"
                  name="otp"
                  value={otpData.otp}
                  onChange={handleOtpChange}
                  placeholder="What's your OTP?"
                  className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </Box>
            )}
          </form>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={1}
          pt={2}
          px={4}
        >
          { !viewOtp ? (
            <Box mt={1} mb={2} display={"flex"} justifyContent={"center"}>
              <Button
                variant="contained"
                type="submit"
                className="custom-add-button"
                onClick={handleSubmit}
              >
                {!loading? `Generate OTP`:`Generating...`}
              </Button>
            </Box>
          ) : (
            <Box mt={1} mb={2} display={"flex"} justifyContent={"center"}>
              <Button
                variant="contained"
                className="custom-add-button"
                onClick={handleSignup}
              >
                {!loading? `Signup`: `Singing up...`}
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
              className="font-bold text-2xl"
              onClick={handleGoogleLogin}
            />
            <SiGithub
              className="text-2xl text-[#BBF7D0]"
              onClick={handleGithubLogin}
            />
          </Box>
          <Box>
            Already have an account?{" "}
            <span
              className="font-serif text-[#BBF7D0] text-xl cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
            .
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Signup;
