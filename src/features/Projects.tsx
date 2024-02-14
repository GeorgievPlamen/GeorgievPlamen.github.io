import { Grid } from "@mui/material";
import MyBox from "../app/components/MyBox";
import wordle from "/public/Images/wordle.png";
import MyCard from "../app/components/MyCard";

export default function Projects() {
  return (
    <>
      <MyBox>
        <Grid
          container
          columns={{ xs: 1, md: 2 }}
          columnSpacing={{ xs: 5 }}
          justifyContent={"center"}
          sx={{ marginTop: "20px" }}
        >
          <MyCard
            img={wordle}
            title={"Wordle Placeholder"}
            description={
              "My version of Wordle, building it for fun. Techstack is .Net, React and SQLite(will be PostgreSQL when ready). Plan is to host on fly.io, current live link takes you to the original, but feel free to check out the source code."
            }
            liveLink={"https://www.nytimes.com/games/wordle/index.html"}
            sourceLink={"https://github.com/GeorgievPlamen/Wordle"}
          />
        </Grid>
      </MyBox>
    </>
  );
}
