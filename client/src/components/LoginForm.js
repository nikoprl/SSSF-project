import * as React from "react";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#121212",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#FFF",
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const StyledOutlinedInput = styled(OutlinedInput)({
  backgroundColor: "#33303e",
});

const LoginForm = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={{ mt: 12, mb: 10 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          direction="column"
          columns={16}
        >
          <Grid item xs={7}>
            <Item
              sx={{ borderRadius: "16px", padding: "60px" }}
              style={{ minHeight: "auto" }}
            >
              <Typography component="h4" variant="h4" gutterBottom>
                Sign in
              </Typography>
              <form>
                <Grid container direction="column">
                  <FormControl sx={{ m: 1, width: "45ch" }} variant="outlined">
                    <InputLabel
                      sx={{ color: "white" }}
                      htmlFor="outlined-adornment-username"
                    >
                      Username
                    </InputLabel>
                    <StyledOutlinedInput
                      sx={{ color: "white" }}
                      id="outlined-adornment-username"
                      value={values.username}
                      onChange={handleChange("username")}
                      label="Username"
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "45ch" }} variant="outlined">
                    <InputLabel
                      sx={{ color: "white" }}
                      htmlFor="outlined-adornment-password"
                    >
                      Password
                    </InputLabel>
                    <StyledOutlinedInput
                      sx={{ color: "white" }}
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            style={{ color: "white" }}
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <ColorButton sx={{ mt: 5, mb: 2 }}>Submit</ColorButton>
                </Grid>
              </form>
              <p>Don't have account?</p> <Button component={Link} to="/register">Sign up!</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginForm;
