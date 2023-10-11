import { ArrowForward } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

function Footer({ switchPage, setSwitchPage }) {
  return (
    <Box
      className="footer"
      marginLeft={switchPage ? { xs: "0", md: "280px" } : 0}
      width={switchPage ? { xs: "100vw", md: "calc(100% - 280px)" } : "100%"}
    >
      <IconButton size="small" onClick={() => setSwitchPage(!switchPage)}>
        <Typography textAlign={switchPage ? "center" : "right"}>
          {switchPage ? "User" : "Admin"}
        </Typography>
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

export default Footer;
