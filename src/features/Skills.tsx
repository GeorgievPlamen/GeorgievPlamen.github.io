import { Grid } from "@mui/material";
import cSharp from "/public/Images/cSharp.png";
import css3 from "/public/Images/css3.png";
import html5 from "/public/Images/html5.png";
import database from "/public/Images/database.png";
import docker from "/public/Images/docker.png";
import github from "/public/Images/github.png";
import javascript from "/public/Images/javascript.png";
import reactLogo from "/public/Images/react.png";
import restApi from "/public/Images/restApi.png";
import vscode from "/public/Images/vscode.png";
import SkillsContainer from "../app/components/SkillsContainer";
import Skill from "../app/models/skill";

export default function Skills() {
  const skills = [
    new Skill(cSharp, "C#"),
    new Skill(restApi, "REST"),
    new Skill(database, "SQL"),
    new Skill(javascript, "JavaScript"),
    new Skill(reactLogo, "React"),
    new Skill(vscode, "VS Code"),
    new Skill(github, "GitHub"),
    new Skill(html5, "HTML5"),
    new Skill(css3, "CSS"),
    new Skill(docker, "Docker"),
  ];

  return (
    <>
      <Grid
        container
        columns={{ xs: 3, md: 5 }}
        rowSpacing={3}
        columnSpacing={{ xs: 5 }}
        justifyContent={"center"}
        maxWidth={"800px"}
        sx={{
          marginTop: "10px",
        }}
      >
        {skills.map((skill) => (
          <SkillsContainer
            key={skill.description}
            img={skill.img}
            description={skill.description}
          />
        ))}
      </Grid>
    </>
  );
}
