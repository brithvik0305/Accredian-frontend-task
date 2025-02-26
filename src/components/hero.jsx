import React, { useState } from 'react';
import { submitReferral } from './api';
import { Box, ButtonBase, Typography, useMediaQuery, useTheme, Button } from "@mui/material";
import ReferImg from "../assets/c90be82b93f2066608be1f96ef347467.png"; 
import MoneyImg from "../assets/10470aa903b54e8e9e856c5046a0fc6f.png"; 
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import ss from "../assets/Screenshot 2025-02-26 113504.png"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {md:"70%", xs: "90%"},
  bgcolor: 'rgb(245, 247, 248)',
  border: '2px',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};
const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));



const ReferBanner = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 
    
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({ 
      FriendName: "",
      FriendMail: "",
      FriendNumber: "",
      ReferredByName: "",
      ReferredByMail: "",
      ReferredByNumber: "",});
    const [message, setMessage] = useState('');
    const [step, setStep] = useState(1);
   
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
        console.log("Submitting form data:", formData);
        const result = await submitReferral(formData);

        if (result.error) {
            console.error("Submission failed:", result.error);
            setMessage('Error: ' + result.error);
        } else {
            setMessage('Referral submitted successfully!');
            setFormData({
                FriendName: "",
                FriendMail: "",
                FriendNumber: "",
                ReferredByName: "",
                ReferredByMail: "",
                ReferredByNumber: "",
            });
        }
    } catch (error) {
        console.error("Unexpected error:", error);
        setMessage("Error: Something went wrong");
    }
};

  

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(238, 245, 255, 1)",
          borderRadius: "16px",
          paddingLeft: { xs: "20px", md: "40px" }, 
          height: {md:"80vh", xs:"fit-content"},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: "8px 8px 20px 20px rgba(0, 0, 0, 0.07)",
          width: "70%",
          flexDirection: isSmallScreen ? "column" : "row",
          textAlign: isSmallScreen ? "center" : "left", 
        }}
      >
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "50%",
            height: "100%",
            display: "flex",
            alignItems: {xs:"center", md:"flex-start"},
            justifyContent: isSmallScreen ? "center" : "center",
            flexDirection: "column",
            padding: isSmallScreen ? "20px" : "0",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "70px" },
            }}
          >
            Let's Learn & Earn
          </Typography>

          <Typography
            variant="h5"
            fontWeight="500"
            color="rgba(26,32,44,1)"
            sx={{ fontSize: { xs: "16px", sm: "20px", md: "24px" } }} 
          >
            Get a chance to win
          </Typography>
           

          <Box sx={{ display: "flex", gap: 1, justifyContent:{xs:"center", md:"flex-start"} }}>
            <Typography
              variant="h5"
              fontWeight="500"
              color="rgba(26,32,44,1)"
              sx={{ fontSize: { xs: "16px", sm: "20px", md: "24px" } }} 
            >
              up-to
            </Typography> 
            <Typography
              variant="h5"
              fontWeight="500"
              color="rgba(26,32,44,1)"
              sx={{ fontSize: { xs: "18px", sm: "22px", md: "26px" }, color: "blue" }} 
            >
              Rs 15,000
            </Typography>
          </Box>
 <br />
          <Button onClick={handleOpen} variant="contained" sx={{width:"fit-content",paddingRight:"2rem", paddingLeft:"2rem"}}>Refer Now</Button>
        </Box>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2" sx={{fontWeight:'500', color:'blue'}}>
              Who's joining the Fam?
            </Typography><br />
            
             
      
      <form onSubmit={handleSubmit}>
              
      <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 12 }}>
        <FormLabel htmlFor="first-name" required>
          Friend's Name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="FriendName"
          type="name"
          placeholder="John"
          autoComplete="friendname"
          required
          size="small"
          value={formData.FriendName} 
          onChange={handleChange}
          
        />
      </FormGrid>
     
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="address1" required>
          Friend's E-Mail
        </FormLabel>
        <OutlinedInput
          id="friendmail"
          value={formData.FriendMail} 
          name="FriendMail"
          type="email"
          placeholder="example@example.com"
          autoComplete="E-mail"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="address2">Friend's Mobile Number</FormLabel>
        <OutlinedInput
          id="friend's mobile number"
          name="FriendNumber"
          type="tel"
          value={formData.FriendNumber} 
          placeholder="1234567890"
          autoComplete="1234567890"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 12}}>
        <FormLabel htmlFor="city" required>
          Your Name
        </FormLabel>
        <OutlinedInput
          id="ReferredByName"
          name="ReferredByName"
          value={formData.ReferredByName} 
          type="name"
          placeholder="Jane"
          autoComplete="City"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="state" required>
          Your E-Mail
        </FormLabel>
        <OutlinedInput
          id="ReferredByMail"
          value={formData.ReferredByMail} 
          name="ReferredByMail"
          type="email"
          placeholder="example@example.com"
          autoComplete="State"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12   }}>
        <FormLabel htmlFor="zip" required>
          Your Mobile Number
        </FormLabel>
        <OutlinedInput
          id="ReferredByNumber"
          value={formData.ReferredByNumber} 
          name="ReferredByNumber"
          type="tel"
          placeholder="1234567890"
          autoComplete="shipping postal-code"
          required
          size="small"
          onChange={handleChange}
        />
      </FormGrid>
     
      
      <Button variant='contained' type='submit' sx={{width:{xs: "100%"}}}>Submit</Button>
    </Grid>
    </form>
    {message && <p>{message}</p>}
          </Box>
           
        </Fade>
      </Modal>
       
        {!isSmallScreen && (
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={ReferImg} alt="Refer" height={"100%"} />
          </Box>
        )}

        
        {!isSmallScreen && (
          <>
            <Box
              component="img"
              src={MoneyImg}
              alt="Money"
              sx={{
                position: "absolute",
                top: "35%",
                left: "20%",
                width: "100px",
              }}
            />
            <Box
              component="img"
              src={MoneyImg}
              alt="Money"
              sx={{
                position: "absolute",
                bottom: "5%",
                right: "20%",
                width: "100px",
              }}
            />
          </>
        )}
      </Box>
    </Box>
  )
};


export default ReferBanner;
