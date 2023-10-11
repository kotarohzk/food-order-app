import { Stack, Typography } from "@mui/material";

function Banner() {
  return (
    <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
      <Typography
        sx={{ typography: { xs: "h5", md: "h4" } }}
        width="50%"
        align="center"
        fontWeight={700}
        p={"30px"}
        flex={1}
      >
        Satisfy every craving with our exceptional
        <span className="accent"> food delivery service</span>
      </Typography>
      <img
        src="https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
        alt=""
        style={{ width: "100%", flex: "1" }}
      />
    </Stack>
  );
}

export default Banner;
