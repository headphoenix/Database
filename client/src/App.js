import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";

import Layout from "../src/scenes/layout/index";
import Dashboard from "../src/scenes/dashboard/index";

import Regions from "../src/scenes/regions/index";
import Members from "../src/scenes/members/index";
import Overview from "../src/scenes/overview/index";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Admin from "scenes/admin";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/regions" element={<Regions />} />
              <Route path="/members" element={<Members />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/admin" element={<Admin />} />
              </Route>
          </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
