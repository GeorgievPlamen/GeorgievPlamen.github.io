import { Avatar, Typography } from "@mui/material";
import me from "/public/Images/IMG_portfolio.jpg";
import MyBox from "../app/components/MyBox";
import NextButtion from "../app/components/NextButton";
import Skills from "./Skills";

export default function Home() {
  return (
    <MyBox>
      <Avatar
        src={me}
        sx={{ marginTop: "50px", height: "220px", width: "200px" }}
        alt="My Picture"
      />
      <Typography variant="h2" padding={"0.3em"} align="center">
        Hi, I'm Plamen
      </Typography>
      <Typography
        variant="h5"
        color={"textSecondary"}
        align="center"
        sx={{ fontStyle: "italic" }}
      >
        a software developer
      </Typography>
      <Skills />
      <NextButtion text="More about me" path="../about" />
    </MyBox>
  );
}
