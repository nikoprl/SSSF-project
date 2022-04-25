import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  // InputLabel,
  // OutlinedInput,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useForm from "../hooks/FormHooks";
import registerUser from "../hooks/apihooks";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1a1a1a",
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

// const StyledOutlinedInput = styled(OutlinedInput)({
//   backgroundColor: "#33303e",
// });

const RegisterForm = () => {
  const validators = {
    username: ["required", "minStringLength: 3", "isAvailable"],
    password: ["required", "minStringLength:5"],
    confirmpassw: ["required", "isPasswordMatch"],
    // email: ["required", "isEmail"],
    // eslint-disable-next-line max-len
    // full_name: [
    //   "matchRegexp:^[a-zA-ZåäöÅÄÖ]+(([',. -][a-zA-ZåäöÅÄÖ ])?[a-zA-ZåäöÅÄÖ]*)*$",
    // ],
  };
  const errorMessages = {
    username: ["vaadittu kenttä", "Has to be atleast 3 letters", "tunnus ei oo vapaa"],
    password: ["vaadittu kenttä", "Has to be atleast 5 letters"],
    confirmpassw: ["vaadittu kenttä", "Passwords do not match"],
    // email: ["vaadittu kenttä", "sähköposti väärää muotoa"],
    // full_name: ["vain kirjamia siis hei pliis jooko"],
  };

  /* 
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    confirmpassw: "",
    showPassword: false,
  });
*/
  const registeroiUser = async () => {
    try {
      registerUser(values.username, values.password);
    } catch (e) {
      console.log(e.message);
    }
  };

  const { values,handleSubmit, handleInputChange, handleInputChangeByName } = useForm(registeroiUser, {
    username: "",
    password: "",
    confirmpassw: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    console.log("prop",prop);
    console.log("event",event);
    handleInputChange({ ...values, [prop]: event.target.value });
  };

  // const handleChange2 = (prop) => {

  // }

  const handleClickShowPassword = () => {
    // handleInputChange({
    //   ...values,
    //   showPassword: !values.showPassword,
    // });
    handleInputChangeByName(values,"showPassword", !values.showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isAvailable", async (value) => {
      return true;
    });
    ValidatorForm.addValidationRule(
      "isPasswordMatch",
      (value) => value === values.password
    );
  }, [values]);

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
              elevation={15}
              sx={{ borderRadius: "16px", padding: "60px" }}
              style={{ minHeight: "auto" }}
            >
              <Typography component="h4" variant="h4" gutterBottom>
                Sign up
              </Typography>
              <ValidatorForm onSubmit={handleSubmit}>
                <Grid container direction="column">
                  <FormControl sx={{ m: 1, width: "45ch" }} variant="outlined">
                    {/* <InputLabel
                      sx={{ color: "white" }}
                      htmlFor="outlined-adornment-username"
                    >
                      Username
                    </InputLabel> */}
                    {/* <StyledOutlinedInput
                      sx={{ color: "white" }}
                      id="outlined-adornment-username"
                      value={values.username}
                      onChange={handleChange("username")}
                      label="Username"
                    /> */}
                    <TextValidator
                      sx={{
                        backgroundColor: "#33303e",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      fullWidth
                      id="outlined-adornment-username"
                      name="username"
                      label="Username"
                      onChange={handleInputChange}
                      value={values.username}
                      validators={validators.username}
                      errorMessages={errorMessages.username}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end"></InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "45ch" }} variant="outlined">
                    {/* <InputLabel
                      sx={{ color: "white" }}
                      htmlFor="outlined-adornment-password"
                    >
                      Password
                    </InputLabel> */}
                    {/* <StyledOutlinedInput
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
                    /> */}
                    <TextValidator
                      sx={{
                        backgroundColor: "#33303e",
                        borderRadius: "5px",
                      }}
                      fullWidth
                      color="warning"
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      name="password"
                      label="Password"
                      onChange={handleInputChange}
                      value={values.password}
                      validators={validators.password}
                      errorMessages={errorMessages.password}
                      InputProps={{
                        endAdornment: (
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
                        ),
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "45ch" }} variant="outlined">
                    {/* <InputLabel
                      sx={{ color: "white" }}
                      htmlFor="outlined-adornment-confirmpassw"
                    >
                      Confirm Password
                    </InputLabel> */}
                    {/* <StyledOutlinedInput
                      sx={{ color: "white" }}
                      id="outlined-adornment-confirmpassw2"
                      type={values.showPassword ? "text" : "password"}
                      value={values.confirmpassw}
                      onChange={handleChange("confirmpassw")}
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
                      label="Confirm password"
                    /> */}
                    <TextValidator
                      sx={{
                        backgroundColor: "#33303e",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      fullWidth
                      id="outlined-adornment-confirmpassw"
                      type={values.showPassword ? "text" : "password"}
                      name="confirmpassw"
                      label="Confirm password"
                      onChange={handleInputChange}
                      value={values.confirmpassw}
                      validators={validators.confirmpassw}
                      errorMessages={errorMessages.confirmpassw}
                      InputProps={{
                        endAdornment: (
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
                        ),
                      }}
                    />
                  </FormControl>
                  <ColorButton sx={{ mt: 5, mb: 2 }}  type="submit" >Submit</ColorButton>
                </Grid>
              </ValidatorForm>
              <p>Already got account?</p>{" "}
              <Button component={Link} to="/login">
                Sign in!
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RegisterForm;
