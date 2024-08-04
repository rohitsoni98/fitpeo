import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import sidePanelConfig from "../../helpers/constants/sidePanelConfig";
import classNames from "classnames";

import "./sidePanel.scss";

const SidePanel = () => {
  const activePathName = useLocation().pathname;
  return (
    <Box className="sidebar_container">
      <Stack padding="16px" spacing="16px">
        {sidePanelConfig.map((elem, index) => (
          <Link key={index} to={elem["pathName"]}>
            <IconButton
              className={classNames({
                active_link: elem["pathName"] === activePathName,
              })}
              color={
                activePathName === elem["pathName"] ? "primary" : "default"
              }
            >
              {elem["Icon"]}
            </IconButton>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default SidePanel;
