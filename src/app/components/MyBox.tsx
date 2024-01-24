import { Box } from "@mui/material";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  height?: string;
}
export default function MyBox({ children, height }: Props) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      id="home"
      sx={{
        height: { height },
        padding: { xs: "70px", md: "100px" },
      }}
    >
      {children}
    </Box>
  );
}
