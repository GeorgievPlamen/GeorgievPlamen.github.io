import { Box, Typography } from "@mui/material";
import MyBox from "../app/components/MyBox";
import NextButtion from "../app/components/NextButton";

export default function About() {
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
          Personal
        </Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error
          quae optio voluptatibus, nisi perferendis sunt? Qui praesentium
          obcaecati velit provident magni tempora? Dolore delectus possimus eos
          pariatur in excepturi. Molestiae consequatur cumque accusamus,
          asperiores veniam explicabo, dicta quidem aliquid earum inventore
          animi quaerat consequuntur distinctio delectus labore hic facilis.
          Odio, modi voluptatem aut doloremque doloribus suscipit illo. Ullam,
          illo? Adipisci atque esse impedit magnam laborum corrupti magni
          voluptates. Fugit dolores pariatur at voluptas vel incidunt! Esse
          commodi perspiciatis veritatis? Mollitia dignissimos, velit sunt
          officia totam fugiat tempora quae voluptatum!
        </Typography>
        <Typography
          variant="h2"
          padding={"0.5em"}
          sx={{ alignSelf: "end", color: "#be3144" }}
        >
          Learning
        </Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error
          quae optio voluptatibus, nisi perferendis sunt? Qui praesentium
          obcaecati velit provident magni tempora? Dolore delectus possimus eos
          pariatur in excepturi. Molestiae consequatur cumque accusamus,
          asperiores veniam explicabo, dicta quidem aliquid earum inventore
          animi quaerat consequuntur distinctio delectus labore hic facilis.
          Odio, modi voluptatem aut doloremque doloribus suscipit illo. Ullam,
          illo? Adipisci atque esse impedit magnam laborum corrupti magni
          voluptates. Fugit dolores pariatur at voluptas vel incidunt! Esse
          commodi perspiciatis veritatis? Mollitia dignissimos, velit sunt
          officia totam fugiat tempora quae voluptatum!
        </Typography>
      </Box>

      <NextButtion text="My Skills" path="../skills" />
    </MyBox>
  );
}
