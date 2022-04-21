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
              <Button color="inherit">Home</Button>
              <Button color="inherit">Favourites</Button>
              <Button color="inherit">Create new</Button>
              <ColorButton variant="contained">Sign in</ColorButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
