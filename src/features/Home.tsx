import { Avatar, Typography } from "@mui/material";
import MyBox from "../app/components/MyBox";
import NextButtion from "../app/components/NextButton";

export default function Home() {
  return (
    <MyBox>
      <Avatar sx={{ height: "200px", width: "200px" }} alt="My Picture" />
      <Typography variant="h2" padding={"0.3em"} align="center">
        Hi, I'm Plamen
      </Typography>
      <Typography variant="h5" color={"textSecondary"} align="center">
        a software developer
      </Typography>
      <NextButtion text="More about me" path="../about" />
    </MyBox>
  );
}
