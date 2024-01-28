import { Box, Grid, Typography } from "@mui/material";

interface Props {
  img: string;
  description: string;
}

export default function SkillsContainer({ img, description }: Props) {
  return (
    <Grid item xs={0} justifyContent={"center"}>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: { xs: "80px", md: "100px" },
          width: { xs: "80px", md: "100px" },
        }}
      >
        <img src={img} height={"50px"} width={"50px"} />
        <Typography variant="h6" textAlign={"center"} color={"primary"}>
          {description}
        </Typography>
      </Box>
    </Grid>
  );
}
