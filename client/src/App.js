import { Home, Login, Logout, Favourites, CreateNew, Register, RecipeDetailed } from "./views/all";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";


const theme = createTheme({
  palette: {
    background: {
      default: "#242424",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-new" element={<CreateNew />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe/:id" element={<RecipeDetailed />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
