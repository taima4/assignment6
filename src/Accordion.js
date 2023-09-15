import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicAccordion() {
    const [isON, setIsON] = React.useState(false);
    const [boxWidth, setBoxWidth] = React.useState("100px");
    const check = () => {
      if (boxWidth === "100px") {
        setBoxWidth("300px");
      } else {
        setBoxWidth("100px");
      }
      setIsON(!isON);
    };
  
    return (
      <div
        style={{
          width: "800px",
          height: "800px",
          display: "flex",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <container>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
  
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Switch {...label} checked={isON} onClick={check} />
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "orange",
              height: boxWidth,
            }}
          >
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Hello word
            </Typography>
          </Box>
        </container>
      </div>
    );
  }
  