import { Box, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";

import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m = "20px ">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Box
            p = "15px 40px"
            >
            <Accordion defaultExpanded>
          
          <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
              <Box 
              justifyContent = "space-between" 
              display = "flex"
              width = "100%"
              >
              <Typography color={colors.greenAccent[500]} variant= "h5" >
                  An Important Question 
              </Typography> 
              <QuestionAnswer />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
        </Accordion>

            </Box>
            <Box
            p = "15px 40px"
            >
            <Accordion defaultExpanded>
          
          <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
              <Box 
              justifyContent = "space-between" 
              display = "flex"
              width = "100%"
              >
              <Typography color={colors.greenAccent[500]} variant= "h5" >
                  An Important Question 
              </Typography> 
              <QuestionAnswer />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
        </Accordion>

            </Box>
            <Box
            p = "15px 40px"
            >
            <Accordion defaultExpanded>
          
          <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
              <Box 
              justifyContent = "space-between" 
              display = "flex"
              width = "100%"
              >
              <Typography color={colors.greenAccent[500]} variant= "h5" >
                  Another Important Question 
              </Typography> 
              <QuestionAnswer />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
        </Accordion>

            </Box>
            <Box
            p = "15px 40px"
            >
            <Accordion defaultExpanded>
          
          <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
              <Box 
              justifyContent = "space-between" 
              display = "flex"
              width = "100%"
              >
              <Typography color={colors.greenAccent[500]} variant= "h5" >
                  Your Favorite Question 
              </Typography> 
              <QuestionAnswer />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
        </Accordion>

            </Box>
           
    </Box>
};
  
  export default FAQ;