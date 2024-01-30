import { Box, Typography } from "@mui/material";
import MyBox from "../app/components/MyBox";
import NextButtion from "../app/components/NextButton";
import MyAccordion from "../app/components/MyAccordion";

export default function About() {
  const webTLDR =
    "Hello there! I'm a passionate software developer, living working and studying in the charming Bulgarian city of Plovdiv. For the past two years, I've been immersing myself in the world of programming, primarily as a self-taught. But this has changed recently as I am doing my Bachelor in computer science now.";
  const webFull =
    "So far my journey as a developer has been nothing short of thrilling. I find the process of creating software projects fascinating in its entirety, from front end to back end, business logic to software design, it is all very captivating and exciting. I am studying it with great interest and joy. Whether it is gaining high-level understanding of a component and figuring out how it connects with the rest of the software, or designing the low-level systems, endpoints and logic to serve the users' needs, I always look forward to practice the new concepts I come across and implement them in a project.";

  const personalTLDR =
    "Away from the keyboard, you'll often find me strumming or shredding on my guitar. I think this hobby balances my profession very well, as it also requires great dedication, concentration and practice to achieve the best results. Meanwhile it lets me relax and takes my mind to a completely different head space, so I can relax after a long day of work.";
  const personalFull =
    "If by chance I find myself some spare time, you can expect to find me playing some video games, escaping reality for a bit. In the evenings however, there's nothing bertter than a good horror movie or a thriller to keep me on the edge of my seat. All that being said, I'd like to travel abroad more. Even though I've lived in the UK for a couple of years and France for a few months I have spent most of my life in Bulgaria. I would love to explore more of what the world has to offer.";

  const learningTLDR =
    "I take pride in being a self-taught developer, navigating the huge amount of knowledge out there with determination and curiosity. My gratitude goes to platforms like freecodecamp.org, Udemy and of course YouTube. That being said, I have come to learn that various people hold different outlooks on similar problems. Their knowledge and approaches are similar but different, this sums up to immeasurable experience I can learn from. Therefore, I am now getting my Bachelor degree so that I can meet as many of these people as possible and in turn broaden my horizons even more.";
  const learningFull =
    "My coding journey began with Unity because I have a huge interest in video games and their development, and wanted to try to make one on my own. Due to Unity's preferred language being C#, it was also my first programming language. As many people looking for a course online I ended up at Udemy, picked up some C# begginer courses (shout out to Programming with Mosh) and began coding. As I continued to learn, I started to fall in love with it and decided to look for a computer science course. Every online resource led me to CS50(Best CS course available) and freecodecamp.org. These platforms gave me solid foundations on which I continue to build upon every day. At that point I decided I wanted to further solidify my knowledge and decided to pursue a Bachelor's degree at Plovdiv University, where I am currently engaged in remote studies in Software Technologies and Design. Latest courses I took are fullstack development with .Net & React to explore the full development cycle. So far everything is going smoothly and I even manage to finish my assignments and projects a bit ahead of time. This gives me the opportunity to work on a couple of exciting personal projects which I will upload here on GitHub soon, so look out for those if I managed to capture your interest!";
  return (
    <MyBox>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
        }}
      >
        <Typography
          variant="h3"
          padding={"0.5em"}
          sx={{
            marginTop: "20px",
            alignSelf: "start",
            color: "#be3144",
          }}
        >
          Web Development
        </Typography>
        <MyAccordion tldr={webTLDR} full={webFull} />
        <Typography
          variant="h3"
          padding={"0.5em"}
          sx={{ alignSelf: "end", color: "#be3144" }}
        >
          Beyond Code
        </Typography>
        <MyAccordion tldr={personalTLDR} full={personalFull} />
        <Typography
          variant="h3"
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
