import React from "react";
import { Box, TextField, Paper, Typography, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { toast } from "material-react-toastify";
import axios from "axios";
import Lottie from "react-lottie";
import welcome from "../lotties/welcome";
import pw from "../lotties/pw";
import typing from "../lotties/typing";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [active, setActive] = React.useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      active === "email" ? typing : active === "password" ? pw : welcome,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://192.168.29.253:8000/login/", {
        username,
        password,
      });
      toast.success("successfully logged in!");
      window.sessionStorage.setItem("token", response.data.access);
      window.sessionStorage.setItem("refresh", response.data.refresh);
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(error.response.data.detail);
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Paper sx={{ px: 3, py: 3, width: 350 }}>
          <Box>
            <Lottie options={defaultOptions} height={200} width={200} />
          </Box>
          <Box>
            <Typography variant="body1">Welcome to Tabnine</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box sx={{ m: 1 }}>
              <TextField
                onFocus={() => setActive("email")}
                onBlur={() => setActive("")}
                autoComplete="off"
                required
                fullWidth
                label="email"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="small"
                variant="filled"
              />
            </Box>
            <Box sx={{ m: 1 }}>
              <TextField
                onFocus={() => setActive("password")}
                onBlur={() => setActive("")}
                required
                fullWidth
                label="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                variant="filled"
              />
            </Box>
            <Box sx={{ mx: 1, my: 3 }}>
              <LoadingButton
                fullWidth
                type="submit"
                variant="contained"
                loading={loading}
              >
                Login
              </LoadingButton>
            </Box>
          </form>
        </Paper>
      </Box>
    </div>
  );
}
