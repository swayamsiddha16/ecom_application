import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0", // Purple color
    },
  },
});

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform sign-in logic here
    console.log("Sign In:", email, password);
    navigate("/shop")
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform validation
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(true);
      return;
    }
    if (!validatePhone(phone)) {
      setPhoneError(true);
      return;
    }
    navigate("/shop")

    // Perform sign-up logic here
    console.log("Sign Up:", name, email, phone, gender, birthdate, password);
  };

  const validateEmail = (email) => {
    // Simple email validation using regex pattern
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Password validation: at least 8 characters, including both alphabet and number
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  };

  const validatePhone = (phone) => {
    // Phone number validation: exactly 10 digits
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          style={{ marginBottom: "20px" }}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </Typography>
        <Box
          component="form"
          onSubmit={isSignIn ? handleSignIn : handleSignUp}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
          }}
        >
          {!isSignIn && (
            <TextField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
          )}
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError && "Invalid email format"}
            style={{ marginBottom: "10px" }}
          />
          {!isSignIn && (
            <TextField
              label="Phone Number"
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              error={phoneError}
              helperText={phoneError && "Invalid phone number (10 digits)"}
              style={{ marginBottom: "10px" }}
            />
          )}
          {!isSignIn && (
            <TextField
              label="Gender"
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
          )}
          {!isSignIn && (
            <TextField
              label="Birthdate"
              type="text"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
          )}
          <TextField
            label="Create New Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={
              passwordError &&
              "Invalid password format (at least 8 characters with alphabets and numbers)"
            }
            style={{ marginBottom: "20px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
          <Typography variant="body2" style={{ marginTop: "20px" }}>
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <Button
              variant="text"
              color="primary"
              onClick={() => {
                setIsSignIn(!isSignIn);
              }}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </Button>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
