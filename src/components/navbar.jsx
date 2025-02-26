import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dropdown from './dropdown';
import logo from "../assets/Link.jpg"

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav"
      position='static'
      sx={
        {
            height: "50px",   
            background:"transparent",
            color: "black",
            display: 'flex',
            justifyContent: 'flex-end',
            paddingLeft: { xs: "5%", sm: "10%", md: "20%" }, 
            paddingRight: { xs: "5%", sm: "10%", md: "20%" },
            boxShadow: "none",

        }
      }>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
           
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div style={{display:'flex', alignItems: 'center', gap: 15}}>
            <img src={logo} alt="" style={{ height: "25px" , marginTop:'0px' }}/>
            <Dropdown/>
            </div>
            
            
          </Box>
          
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black', fontSize:'13px', fontWeight:400 }}>
                {item}
              </Button>
              
            ))}
            <Button variant='contained' sx={{boxShadow:'none',fontSize:'13px', fontWeight:400 }} >Login</Button>
            <Button variant='contained' sx={{boxShadow:'none',fontSize:'13px', fontWeight:400  }}>Try For Free</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}

DrawerAppBar.propTypes = {
 
  window: PropTypes.func,
};

export default DrawerAppBar;
