import { Avatar, Badge, IconButton, OutlinedInput, Stack } from "@mui/material";
import {
  AutoAwesomeMosaic,
  Mail,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";

// css file
import "./topnav.scss";

const navIconsList = [
  <Mail fontSize="small" />,
  <Settings fontSize="small" />,
  <Notifications fontSize="small" />,
];

const TopNav = () => {
  return (
    <Stack
      direction="row"
      bgcolor="#f2f2f2"
      alignItems="center"
      className="top_nav_container"
      justifyContent="space-between"
    >
      <Stack
        spacing="24px"
        direction="row"
        alignItems="center"
        className="left_container"
      >
        <IconButton color="primary">
          <AutoAwesomeMosaic />
        </IconButton>

        <OutlinedInput
          size="small"
          placeholder="Search"
          className="search_input"
          sx={{ height: "32px" }}
          startAdornment={
            <Search sx={{ mr: "6px", ml: "-3px" }} color="primary" />
          }
        />
      </Stack>

      <Stack
        spacing="16px"
        direction="row"
        alignItems="center"
        className="right_container"
      >
        <Stack direction="row" className="icon_container" spacing={"8px"}>
          {navIconsList.map((icon, index) => (
            <IconButton key={index} className="button">
              <Badge
                variant="dot"
                color="primary"
                invisible={index !== navIconsList.length - 1}
              >
                {icon}
              </Badge>
            </IconButton>
          ))}
        </Stack>

        <Avatar
          alt="Avatar Name"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
      </Stack>
    </Stack>
  );
};

export default TopNav;
