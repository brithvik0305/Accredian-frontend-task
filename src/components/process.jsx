import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import circleLarge from "../assets/2c05e77a4b76d26c35bb05a554cb6838.png"
import circleSmall from "../assets/Untitled (16).png"
import { useTheme, useMediaQuery } from "@mui/material";

const steps = [
  {
    icon: <PersonAddIcon fontSize="large" color="primary" />,
    text: "Refer friends easily via our seamless referral system.",
  },
  {
    icon: <AssignmentTurnedInIcon fontSize="large" color="primary" />,
    text: "Earn rewards once your referred joins the program.",
  },
  {
    icon: <AccountBalanceWalletIcon fontSize="large" color="primary" />,
    text: "Referrer receives a bonus 30 days after program enrollment.",
  },
];

export default function ReferralProcess() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#F0F5FF" }}>
      <Typography variant="h6" gutterBottom>
        How Do I <Typography variant="h6" component="span" color="primary">Refer?</Typography>
      </Typography>

      <Box sx={{}}>
        <img src={isSmallScreen ? circleSmall : circleLarge} alt=""  
        style={{
            width: isSmallScreen ? "80%" : "57%",
            height: isSmallScreen?"fit-content":"fit-content",
            
          }}/>
      </Box>



      {/* <Box mt={4}>
        <Button variant="contained" color="primary" size="large">
          Refer Now
        </Button>
      </Box> */}
    </Box>
  );
}
