import "../models/styles.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "7em",
          margin: "0",
          padding: "0",
          height: "minmax(100vh, 100%)",
          background: "linear-gradient(62deg, #3a3d40 0%, #181719 100%)",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default App;
