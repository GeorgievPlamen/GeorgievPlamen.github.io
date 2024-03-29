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
        margin: "0 auto",
        minHeight: "100vh",
        maxWidth: "1200px",
        height: { height },
        padding: { xs: "20px", md: "100px" },
      }}
    >
      {children}
    </Box>
  );
}
