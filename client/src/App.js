import React, { useContext, useState, useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import { AuthContext } from "context/authentication/authentication.context";

import Layout from "../src/scenes/layout/index";
import Dashboard from "../src/scenes/dashboard/index";

import Regions from "../src/scenes/regions/index";
// import Members from "../src/scenes/members/index";
// import Overview from "../src/scenes/overview/index";
// import Daily from "scenes/daily";
// import Monthly from "scenes/monthly";
// import Admin from "scenes/admin";
import Login from "pages/authentication/login";
import Bacentas from "scenes/bacentas";

//import { AuthenticationContext } from "context/authentication/authentication.context";
import AddMember from "scenes/add-member/add-member.component";
import LoginPage from "components/login-page/login-page.component";
import FellowshipData from "scenes/fellowship-data/fellowship-data.component";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('token');
    if (userData) {
      setIsAuthenticated(true);
    }
  }, []);


  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const { user } = useContext(AuthContext)

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {!user ? (
             <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated}/>} />
            ) : (
              <Route element={<Layout />} >
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="regions" element={<Regions />} >
                <Route index element={<Regions />} />
              </Route>
              {/* <Route path="bacentas" element={<Bacentas />} />
              <Route path="/members" element={<Members />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/admin" element={<Admin />} /> */}
              <Route path="/add-member" element={<AddMember/>} />
              <Route path="/fellowship-data" element={<FellowshipData/>} />
              </Route>
            )}
          </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
