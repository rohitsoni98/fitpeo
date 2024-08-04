import {
  Description,
  Home,
  InsertChart,
  Storefront,
  Wallet,
} from "@mui/icons-material";

import { ROUTES_PATHS } from "./routes";

const config = [
  { pathName: ROUTES_PATHS["DASHBOARD"], Icon: <Home /> },
  { pathName: ROUTES_PATHS["STATICS"], Icon: <InsertChart /> },
  { pathName: ROUTES_PATHS["NOTES"], Icon: <Description /> },
  { pathName: ROUTES_PATHS["WALLET"], Icon: <Wallet /> },
  { pathName: ROUTES_PATHS["STORE"], Icon: <Storefront /> },
];

export default config;
