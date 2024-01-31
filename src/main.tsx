import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./app/layout/App";
import Home from "./features/Home";
import About from "./features/About";
import Skills from "./features/Skills";
import Projects from "./features/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

const theme = createTheme({
  palette: {
    background: {
      default: "white",
      // #3a3d40
    },
    primary: {
      main: "#be3144",
      contrastText: "#f0f0f0",
    },
    secondary: {
      main: "#45567d",
      contrastText: "#f0f0f0",
    },
    text: {
      primary: "#f0f0f0",
      secondary: "#be3144",
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "::before": {
            display: "none",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
