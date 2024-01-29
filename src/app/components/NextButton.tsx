import { ChevronRight } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

export default function NextButtion({ text, path }: Props) {
  const nav = useNavigate();
  return (
    <Button
      sx={{ marginTop: "2em" }}
      variant="contained"
      onClick={() => {
        nav(path);
      }}
    >
      <Typography align="center">{text}</Typography>
      <ChevronRight />
    </Button>
  );
}
