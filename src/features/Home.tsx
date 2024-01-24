import { ChevronRight } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      id="home"
      sx={{
        padding: { xs: "20px", md: "100px" },
      }}
    >
      <Avatar sx={{ height: "200px", width: "200px" }} alt="My Picture" />
      <Typography variant="h2" padding={"0.3em"}>
        Hi, I'm Plamen
      </Typography>
      <Typography variant="h5">a software developer</Typography>
      <Button
        sx={{ margin: "2em" }}
        onClick={() => {
          nav("../about");
        }}
      >
        <Typography>More about me</Typography>
        <ChevronRight />
      </Button>
    </Box>
  );
}
