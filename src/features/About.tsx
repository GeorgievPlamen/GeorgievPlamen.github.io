import { Box, Typography } from "@mui/material";
import MyBox from "../app/components/MyBox";
import NextButtion from "../app/components/NextButton";
import MyAccordion from "../app/components/MyAccordion";

export default function About() {
  const webTLDR =
    "Hello there! I'm a passionate software developer based in the charming city of Plovdiv, Bulgaria. For the past two years, I've been immersing myself in the world of coding, primarily as a self-taught.";
  const webFull =
    "My journey as a developer has been nothing short of thrilling. I find the whole process of building the entire solution, from front to back, fascinating. Whether it's gaining a high-level understanding of the components and figuring out how they should connect or designing the low-level systems and endpoints to serve users' needs, I'm always up for the challenge.";

  const personalTLDR =
    "Away from the keyboard, you'll often find me strumming (or shredding) the strings of my guitar, providing a perfect balance to the intricacies of coding. ";
  const personalFull =
    "Back at the keyboard again, I'll probably be playing some video game, lost in the world for a bit. And when the evening sets in, there's nothing like a good horror or thriller movie to keep me on the edge of my seat. I'd love to travel abroad more, while I've spent most of my life in Bulgaria, I've also lived in the UK for a couple of years, France for a few weeks, and Greece for a few days. Nevertheless, there's still a lot more to explore out there.";

  const learningTLDR =
    "I take pride in being a self-taught developer, navigating the huge amount of knowledge out there with determination and curiosity. My gratitude goes to platforms like freecodecamp.org, Udemy and of course YouTube.";
  const learningFull =
    "My coding journey began with Unity, had a huge interest in game development and given Unity's preferred language I started with C#. As many people looking for a course online I ended up at Udemy, picked up some C# begginer courses (shout out to Programming with Mosh) and began coding. As I continued to learn, I started to fall in love with it and decided to look for a computer science course. Every online resource led me to CS50(Best CS course available) and freecodecamp.org. These platforms laid a solid foundation I continue to build upon every day. To further solidify my knowledge, I decided to pursue a bachelor's degree at Plovdiv University, where I am currently engaged in remote studies in 'Software Technologies and Design.'. Latest courses I took are fullstack development with .Net & React to explore the full development cycle. And now I'm in the middle of a couple of exciting projects.";
  return (
    <MyBox>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
        }}
      >
        <Typography
          variant="h2"
          padding={"0.5em"}
          sx={{ alignSelf: "start", color: "#be3144" }}
        >
          Web Development
        </Typography>
        <MyAccordion tldr={webTLDR} full={webFull} />
        <Typography
          variant="h2"
          padding={"0.5em"}
          sx={{ alignSelf: "end", color: "#be3144" }}
        >
          Beyond Code
        </Typography>
        <MyAccordion tldr={personalTLDR} full={personalFull} />
        <Typography
          variant="h2"
          padding={"0.5em"}
          sx={{ alignSelf: "start", color: "#be3144" }}
        >
          Learning
        </Typography>
        <MyAccordion tldr={learningTLDR} full={learningFull} />
      </Box>

      <NextButtion text="My Skills" path="../skills" />
    </MyBox>
  );
}
