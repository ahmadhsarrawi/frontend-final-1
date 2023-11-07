import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

function isValidEmail(email) {
  const emailRegex = /^\S+@\S+$/i;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
}

function PasswordValidationText() {
  return (
    <div>
      Password must contain at least 8 characters, including upper and lower case letters, and a number.
    </div>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const { handleSubmit, control, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const fullName = `${data.firstName} ${data.lastName}`;

    try {
      const response = await axios.post(
        "https://e-store-comerce.onrender.com/auth/signup",
        {
          name: fullName,
          email: data.email,
          password: data.password,
        }
      );
      console.log(response.data);
      
      reset();
    } catch (error) {
      console.log(error);
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
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'First name is required' }}
                  render={({ field }) => (
                    <TextField
                      autoComplete="given-name"
                      label="First Name"
                      fullWidth
                      id="firstName"
                      {...field}
                      error={!!errors.firstName}
                      helperText={errors.firstName ? errors.firstName.message : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Last name is required' }}
                  render={({ field }) => (
                    <TextField
                      label="Last Name"
                      fullWidth
                      id="lastName"
                      {...field}
                      error={!!errors.lastName}
                      helperText={errors.lastName ? errors.lastName.message : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Email is required',
                    validate: (value) => isValidEmail(value) || 'Invalid email format',
                  }}
                  render={({ field }) => (
                    <TextField
                      label="Email Address"
                      fullWidth
                      id="email"
                      {...field}
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Password is required',
                    validate: (value) => isValidPassword(value) || 'Invalid password format',
                  }}
                  render={({ field }) => (
                    <TextField
                      label="Password"
                      type="password"
                      fullWidth
                      id="password"
                      {...field}
                      error={!!errors.password}
                      helperText={errors.password ? <PasswordValidationText /> : null}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions, and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to="/sign-in" variant="body2">
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
