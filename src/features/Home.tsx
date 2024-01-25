import { ChevronRight } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyBox from "../app/components/MyBox";

export default function Home() {
  const nav = useNavigate();
  return (
    <MyBox>
      <Avatar sx={{ height: "200px", width: "200px" }} alt="My Picture" />
      <Typography variant="h2" padding={"0.3em"}>
        Hi, I'm Plamen
      </Typography>
      <Typography variant="h5" color={"textSecondary"}>
        a software developer
      </Typography>
      <Button
        sx={{ margin: "2em" }}
        onClick={() => {
          nav("../about");
        }}
      >
        <Typography>More about me</Typography>
        <ChevronRight />
      </Button>
    </MyBox>
  );
}
