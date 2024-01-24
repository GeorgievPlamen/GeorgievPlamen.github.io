import { Box, Typography } from "@mui/material";
import MyBox from "../app/components/MyBox";

export default function Skills() {
  return (
    <MyBox height="100vh">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="./icons-menu.png" alt="C-Sharp" />
        <Typography color={"textPrimary"}>Started with C#</Typography>
      </Box>
    </MyBox>
  );
}
