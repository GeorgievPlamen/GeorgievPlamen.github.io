import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  tldr: string;
  full: string;
}

export default function MyAccordion({ tldr, full }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      sx={{
        margin: "10px auto",
        padding: "0",
        maxWidth: "100%",
        backgroundColor: "#323232",
        borderRadius: "10px",
      }}
      square={true}
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography>{tldr}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{full}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
