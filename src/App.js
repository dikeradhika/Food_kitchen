// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
// <div>
//   <center>Welcome to Leela's Kitchen</center>
//     </div>
//   );
// }

// export default App;

import React  from 'react'
// import Parent from './component/Parent'
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { pink } from '@mui/material/colors';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Layout from './component/Layout';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';



import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
// import Contact from './pages/Contact';
import Header from './component/Header';
// import About from './pages/About'



export default function App() {
  // const [first, setfirst] = useState(false)
  // const [value, setvalue] = useState([])   //see value is taken as empty array ..so that's why we can put data.push
  // const [radio, setradio] = useState("roti")

  // function customMe(){
  //   setfirst(true)
  // }

  // function getValue(e){
  //   let data = value
  //   data.push(e.target.value)
  //   console.warn(e.target.value)
  // }

  // function handleChange(event) {
  //   setradio(event.target.value) 
  // }

  // function setAlert(){

  //   alert("hello alert on clicking Basic_kadi")
  // }
  return (
//     <div className='container'>
//       <a>I am parent component</a>

//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined" onClick={()=>{customMe()}}>Outlined</Button>

//       <p><Checkbox color ="success" value = "asit"  onChange={(e)=>{getValue(e)}}/></p>
//       <p><Checkbox color ="success" value = "Radhika"  onChange={(e)=>{getValue(e)}}/></p>
//       <p><Checkbox color ="success" value = "Krishna"  onChange={(e)=>{getValue(e)}}/></p>


      

//       <FormGroup>
//       <FormControlLabel control={<Checkbox defaultChecked />} label="Breakfast"  sx={{
//           color: pink[800],
//           '&.Mui-checked': {
//             color: pink[600],
//           },
//         }} />
//       <FormControlLabel required control={<Checkbox />} label="Lemon Water" />
//       <FormControlLabel disabled control={<Checkbox />} label="Brunch" />
//     </FormGroup>


//     <FormControl>
//       <FormLabel id="demo-row-radio-buttons-group-label">Sabji of the day</FormLabel>
//       <RadioGroup
//       row
//         aria-labelledby="demo-row-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//         value = {radio}
//         onChange={handleChange}
//       >
//         <FormControlLabel value="female" control={<Radio />} label="Bhindi" />
//         <FormControlLabel value="male" control={<Radio />} label="Aloo mutter" />
//         <FormControlLabel value="other" control={<Radio />} label="Laukii" />
//       </RadioGroup>
//     </FormControl>

// <p>
//   <div>
//     <Radio 
//     color = "secondary"
//     value ="basic kadi"
//     onChange={setAlert} 
//     />
//     </div>
//     <div>
//       <span>Basic Kadi</span>
//     </div>
//     </p>



//     {/* <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> */}

//      {/* <p><Checkbox {...label} defaultChecked /></p>  */}

// <Parent/>
//       </div>
  
<>
<BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
    </Routes>
    </BrowserRouter>
    </>
   
   

  )
}