 import React,{useState} from 'react'
 import {Box,AppBar,Toolbar,IconButton,Typography} from '@mui/material'
 import FastFoodIcon from '@mui/icons-material/Fastfood'
 import {Link} from 'react-router-dom'
 import "../../src/styles/HeaderStyles.css"
 import MenuIcon from '@mui/icons-material/Menu'
 
 function Header() {
    const [mobileOpen,setMobileOpen] =useState(false)
const handleDrawerToggle =() =>{
    setMobileOpen(!mobileOpen)
}

    const drawer =(
        <Box onClick ={handleDrawerToggle} sx={{textAlign : "center"}}>
       
        </Box>
    )
   return (
   <>
   {/* <Box>
    <AppBar component = {'nav'} sx={{bgcolor: "black"}}>
        <Toolbar>
            <IconButton color = "inherit" arial-label="open drawer" edge="start" sx={{
                mr:2,
                display:{sm:"none"},
            }}>
                <MenuIcon>

                </MenuIcon>
            </IconButton>
          
            <Typography
            color={"goldenrod"}
            variant ="h6"
            component = "div"
            sx ={{flexGrow:1}}
            >
                  <FastFoodIcon/>
                  My Restaurant</Typography>
                  <Box sx={{display:{xs:'none',sm:'block'}}}>
<ul className ="navigation-menu">
    <li>
        <Link to ={"/"}>Home </Link>
        </li>

        <li>
        <Link to={"/menu"}>Menu</Link>
        </li>

        <li>
        <Link to={"/about"}>About</Link>
        </li>

        <li>
        <Link to={"/contact"}>Contact</Link>
        </li>
    
</ul>
                  </Box>
        </Toolbar>

    </AppBar>
   </Box> */}

   <h1>Hekllo world!!</h1>
   
   </>
   )
 }
 
 export default Header