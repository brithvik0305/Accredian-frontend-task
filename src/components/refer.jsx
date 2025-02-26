import React from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const programs = [
  { name: "Professional Certificate Program in Product Management", referrer: "₹ 7,000", referee: "₹ 9,000" },
  { name: "PG Certificate Program in Strategic Product Management", referrer: "₹ 8,000", referee: "₹ 10,000" },
  { name: "Executive Program in Data Driven Product Management", referrer: "₹ 10,000", referee: "₹ 11,000" },
];

export default function ReferralPage() {
  return (
    <Box sx={{ bgcolor: "#F0F5FF", py: 5, px: 3 }}>
      {/* Title Section */}
      <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
        What Are The <Typography component="span" variant="h5" color="primary">Referral Benefits?</Typography>
      </Typography>
      
      {/* Referral Benefits Table */}
      <TableContainer component={Paper} sx={{ maxWidth: 900, mx: "auto", my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Programs</b></TableCell>
              <TableCell><b>Referrer Bonus</b></TableCell>
              <TableCell><b>Referee Bonus</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programs.map((program, index) => (
              <TableRow key={index}>
                <TableCell>{program.name}</TableCell>
                <TableCell>{program.referrer}</TableCell>
                <TableCell>{program.referee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Box textAlign="center">
        <Button variant="contained"  color="primary">Refer Now</Button>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ maxWidth: 900, mx: "auto", my: 5, p: 2, border: "1px solid blue", borderRadius: 2 }}>
        <Typography variant="h6">Frequently Asked <Typography component="span" variant="h6"  color="primary">Questions</Typography></Typography> <br />
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is the minimum system configuration required?</Typography>
          </AccordionSummary>
          <hr />
          <AccordionDetails>
            <Typography>Operating System: Windows 10/11, macOS, or Linux, Processor: Intel Core i3 or equivalent. RAM: At least 4GB (8GB recommended).</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Do I need to have prior Product Management and Project Management experience to enroll in the program?</Typography>
          </AccordionSummary>
          <hr />
          <AccordionDetails>
            <Typography>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      
      <Card sx={{ maxWidth: 900, mx: "auto", my: 5, p: 2, background: "#0056D2", color: "white" }}>
        <CardContent>
          <Typography variant="h6">Want to delve deeper into the program?</Typography>
          <Typography>Share your details to receive expert insights.</Typography>
          <Box mt={2}>
            <Button variant="contained" color="secondary">Get in touch</Button>
          </Box>
        </CardContent>
      </Card>
      
      
    </Box>
  );
}