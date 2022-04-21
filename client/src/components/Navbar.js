import { NavLink } from "react-router-dom";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { styled, createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";


const navtheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Navbar = () => {
  return (
    <>
      <ThemeProvider theme={navtheme}>
        <AppBar>
          <Container>
            <Toolbar>
              <Typography sx={{ flexGrow: 1 }}>LOGO</Typography>
              <Button color="inherit" component={NavLink} to="/">Home</Button>
              <Button color="inherit" component={NavLink} to="/favourites">Favourites</Button>
              <Button color="inherit" component={NavLink} to="/create-new">Create new</Button>
              <ColorButton variant="contained" component={NavLink} to="/login">Sign in</ColorButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};


export default Navbar;
