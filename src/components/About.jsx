import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

function About() {
  return (
    <Stack>
      <Accordion sx={{ bgcolor: "#00804a", color: "#fff" }} disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Our Mission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "#005339", color: "#fff" }} disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h4">Our Vision</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default About;
