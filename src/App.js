import './App.css';
import CardImage from './components/CardImage'; 
import userData from "../src/DataSeeds/UserCardData"
import { Fragment, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Grid, Typography } from '@mui/material';
function App() {
  useEffect(() => {
    //console.log(itemData);
    }, [])
    
  return (
    <Fragment >
      <br />
       <Container >
         <Typography variant="h5" >
         Favorite the image
         </Typography><br />
       <TextField    
       fullWidth  
         label="Search Images by name" 
         size="small"
       />      
        <br /><br /><br />
     <Grid  >
         <CardImage data={userData}  />    
      </Grid> 

      <br /><br />
      <hr />
      <h4>Recents</h4>
       </Container>
    </Fragment>
  );
}

export default App;
