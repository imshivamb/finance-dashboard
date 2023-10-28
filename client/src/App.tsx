import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "@/theme";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Navbar from "@/components/navbar";
import Dashboard from "@/components/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/predictions"
                element={<div>Predictions Page</div>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
