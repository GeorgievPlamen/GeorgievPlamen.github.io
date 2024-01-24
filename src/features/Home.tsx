import { ChevronRight } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"100px"}
      id="home"
    >
      <Avatar sx={{ height: "200px", width: "200px" }} alt="My Picture" />
      <Typography variant="h2" padding={"0.3em"}>
        Hi, I'm Plamen
      </Typography>
      <Typography variant="h5">a software developer</Typography>
      <Button>
        <Typography padding={"0.5em"}>More about me</Typography>
        <ChevronRight />
      </Button>
    </Box>
  );
}
