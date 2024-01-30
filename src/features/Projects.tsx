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
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima debitis numquam ad esse id enim, nisi, iusto corporis sed eaque cumque, repellendus labore itaque earum delectus laboriosam architecto at. Quis!"
            }
            liveLink={"https://www.nytimes.com/games/wordle/index.html"}
            sourceLink={
              "https://github.com/GeorgievPlamen/GeorgievPlamen.github.io"
            }
          />
        </Grid>
      </MyBox>
    </>
  );
}
