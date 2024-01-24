import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"100px"}
    >
      <Typography variant="h2" padding={"0.3em"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi est
        repellendus fugit laborum facilis ab ea assumenda dolores commodi nemo
        at magni eveniet laboriosam, qui nisi cupiditate adipisci recusandae
        debitis!
      </Typography>
      <Typography variant="h5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error
        quae optio voluptatibus, nisi perferendis sunt? Qui praesentium
        obcaecati velit provident magni tempora? Dolore delectus possimus eos
        pariatur in excepturi. Molestiae consequatur cumque accusamus,
        asperiores veniam explicabo, dicta quidem aliquid earum inventore animi
        quaerat consequuntur distinctio delectus labore hic facilis. Odio, modi
        voluptatem aut doloremque doloribus suscipit illo. Ullam, illo? Adipisci
        atque esse impedit magnam laborum corrupti magni voluptates. Fugit
        dolores pariatur at voluptas vel incidunt! Esse commodi perspiciatis
        veritatis? Mollitia dignissimos, velit sunt officia totam fugiat tempora
        quae voluptatum!
      </Typography>
    </Box>
  );
}
