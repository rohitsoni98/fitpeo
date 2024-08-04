import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import { DonutSmall } from "@mui/icons-material";
import { Navigate, Route, Routes } from "react-router-dom";

import TopNav from "./views/topNav/TopNav";
import SidePanel from "./views/sidePanel/SidePanel";

import Dashboard from "./views/pages/dashboard";
import OtherRouteComponent from "./views/pages/otherRouteComponent";

import { ROUTES_PATHS } from "./helpers/constants/routes";

const AppLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Stack direction="row">
        <SidePanel />
        <Box
          flexGrow={1}
          height="calc(100vh - 50px)"
          sx={{ overflowY: "scroll" }}
        >
          {children}
        </Box>
      </Stack>
    </React.Fragment>
  );
};

function App() {
  return (
    <>
      <TopNav />
      <AppLayout>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={ROUTES_PATHS["DASHBOARD"]} />}
          />
          <Route path={ROUTES_PATHS["DASHBOARD"]} element={<Dashboard />} />
          <Route
            path={ROUTES_PATHS["STATICS"]}
            element={<OtherRouteComponent />}
          />
          <Route
            path={ROUTES_PATHS["NOTES"]}
            element={<OtherRouteComponent />}
          />
          <Route
            path={ROUTES_PATHS["WALLET"]}
            element={<OtherRouteComponent />}
          />
          <Route
            path={ROUTES_PATHS["STORE"]}
            element={<OtherRouteComponent />}
          />
        </Routes>
      </AppLayout>
      <IconButton
        sx={{ position: "fixed", bottom: "16px", left: "16px", zIndex: 300 }}
      >
        <DonutSmall fontSize="small" />
      </IconButton>
    </>
  );
}

export default App;
