import { Box, Typography } from "@mui/material";
import MyBox from "../app/components/MyBox";
import NextButtion from "../app/components/NextButton";
import MyAccordion from "../app/components/MyAccordion";

export default function About() {
  const webTLDR =
    "I love working with C# and JS/TS - .Net as backend and React as frontend. I'm currently living, working and studying in the charming Bulgarian city of Plovdiv. For the past two years, I've been immersing myself in the world of programming, primarily as a self-taught. I'm currently working on my Bachelor's degree to further solidify my knowledge. If you are looking for a developer who can write clean and maintainable code and assist with designing frontend and backend technologies, feel free to contact me on LinkedIn.";
  const webFull =
    "So far my journey as a developer has been nothing short of thrilling. I find the process of creating software fascinating in its entirety, from front end to back end, business logic to software design. Whether it is gaining high-level understanding of a component and figuring out how it connects with the rest of the software, or designing the low-level systems, endpoints and logic to serve the users' needs, I always look forward to practice the new concepts I come across and implement them in a project.";

  const personalTLDR =
    "Away from the keyboard, you'll often find me strumming or shredding on my guitar. I think this hobby balances my profession very well, as it also requires great dedication, concentration and practice to achieve the best results. Meanwhile it lets me relax and takes my mind to a completely different head space, so I can relax after a long day of work.";
  const personalFull =
    "If by chance I find myself some spare time, you can expect to find me playing some video games, escaping reality for a bit. In the evenings however, there's nothing bertter than a good horror movie or a thriller to keep me on the edge of my seat. All that being said, I'd like to travel abroad more. Even though I've lived in the UK for a couple of years and France for a few months I have spent most of my life in Bulgaria. I would love to explore more of what the world has to offer.";

  const learningTLDR =
    "It takes a lot of discipline to learn a new skill on your own. I had to learn how to manage my time, set reachable goals, and keep myself motivated. Finding the best resources to learn from was not the easiest either, but it showed me just how large the world of programming really is and how many people have different views and principles. My gratitude goes to platforms like freecodecamp.org, Udemy, and, of course, YouTube. It has been amazing so far, and I'm really excited to keep going and learning new things.";
  const learningFull =
    "My coding journey began with Unity because I have a huge interest in video games and their development, and wanted to try to make one on my own. Due to Unity's preferred language being C#, it was also my first programming language. As many people looking for a course online I ended up at Udemy, picked up some C# beginner courses (shout out to Programming with Mosh) and began coding. As I continued to learn, I started to fall in love with it and decided to look for a computer science course. Every online resource led me to CS50(Best CS course available) and freecodecamp.org. These platforms gave me solid foundations on which I continue to build upon every day. At that point I decided I wanted to further solidify my knowledge and decided to pursue a Bachelor's degree at Plovdiv University, where I am currently engaged in remote studies in Software Technologies and Design. Latest courses I took are fullstack development with .Net & React to explore the full development cycle. So far everything is going smoothly and I even managed to finish my assignments and projects a bit ahead of time. This gives me the opportunity to work on a couple of exciting personal projects which I will upload here on GitHub soon, so look out for those if I managed to capture your interest!";
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

      <NextButtion text="Projects" path="../projects" />
    </MyBox>
  );
}
