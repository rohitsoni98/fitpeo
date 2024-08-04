import { Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const OtherRouteComponent = () => {
  const pathName = useLocation().pathname;
  const heading = pathName?.replaceAll("/", "");
  return (
    <Stack padding="16px" spacing="16">
      <Typography fontSize="20px" fontWeight={500}>
        {heading?.[0]?.toUpperCase() + heading?.slice(1, heading?.length)}
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
      </Typography>
    </Stack>
  );
};

export default OtherRouteComponent;
