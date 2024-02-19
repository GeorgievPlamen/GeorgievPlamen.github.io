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
            title={"MyWordle"}
            description={
              "My version of Wordle, building it for fun. Techstack is .Net, React+Redux and PostgreSQL. Hosted on fly.io, might take a couple of seconds to load initially. Still need to implement animations and clean a few things."
            }
            liveLink={"https://mywordle.fly.dev/"}
            sourceLink={"https://github.com/GeorgievPlamen/Wordle"}
          />
        </Grid>
      </MyBox>
    </>
  );
}
