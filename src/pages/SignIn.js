import React, { useContext, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Context from "../store/context";
const defaultTheme = createTheme();

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const ctx = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    handleValidation({ ...formData, [name]: value });
  };

  const handleValidation = (data) => {
    const errors = { email: '', password: '' };

    if (!data.email) {
      errors.email = 'Email is required';
    }

    if (!data.password) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);

    // Enable or disable the "Sign In" button based on form validation
    const isDisabled = Object.values(errors).some((error) => error !== '');
    setIsButtonDisabled(isDisabled);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleValidation(formData);

    if (!isButtonDisabled) {
      try {
        const response = await axios.post(
          'https://e-store-comerce.onrender.com/auth/signin',
          formData
        );
  
        // Check if the response contains a valid token and user information
        if (response.data.token && response.data.user) {
          // Store user information and token in local storage
          localStorage.setItem('user', JSON.stringify(response.data.user));
          localStorage.setItem('token', response.data.token);
          ctx.setIsSignedIn(true);
          navigate(`/`, { replace: true });
        } else {
          console.error('Invalid response format');
          // Handle invalid response format
        }
      } catch (error) {
        console.error('Sign-in error', error);
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              error={!!formErrors.password}
              helperText={formErrors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isButtonDisabled}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink to="/" variant="body2">
                  Home Page
                </RouterLink>
              </Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <RouterLink to="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
