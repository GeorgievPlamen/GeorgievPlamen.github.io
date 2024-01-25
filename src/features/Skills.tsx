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
        1
        <img
          src="./portfolio/Images/icons8-c-sharp-logo-50.png"
          alt="C-Sharp"
        />
        2<img src="public/Images/icons8-c-sharp-logo-50.png" alt="C-Sharp" />
        3<img src="./Images/icons8-c-sharp-logo-50.png" alt="C-Sharp" />
        4<img src="./public/Images/icons8-c-sharp-logo-50.png" alt="C-Sharp" />
        5
        <img
          src="./portfolio/public/Images/icons8-c-sharp-logo-50.png"
          alt="C-Sharp"
        />
        6
        <img
          src="../portfolio/Images/icons8-c-sharp-logo-50.png"
          alt="C-Sharp"
        />
        7<img src="public/Images/icons8-c-sharp-logo-50.png" alt="C-Sharp" />
        8<img src="../Images/icons8-c-sharp-logo-50.png" alt="C-Sharp" />
        9<img src="../public/Images/icons8-c-sharp-logo-50.png" alt="C-Sharp" />
        10
        <img
          src="../portfolio/public/Images/icons8-c-sharp-logo-50.png"
          alt="C-Sharp"
        />
        <Typography color={"textPrimary"}>Started with C#</Typography>
      </Box>
    </MyBox>
  );
}
