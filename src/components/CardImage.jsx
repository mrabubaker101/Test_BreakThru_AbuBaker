import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid } from '@mui/material';
import { Download, DownloadDone } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default class CardImage extends React.Component   {
    constructor(props){
        super(props);
        this.state = {         
            LogErr: "",
            itemData :this.props.data,
            isFave:false,
            FavColor:"silver"
          };
    }
componentDidMount(){ 
    console.log(this.state.itemData);
} 
Click=(e)=>{
    e.preventDefault();
    debugger;
    this.setState({isFave:!this.state.isFave})
     
}
render(){
  return ( 
  <Grid display="flex"   md={12} spacing={2}> 
      {this.state.itemData.map((items, index) => (
                              <Card key={index} md={{ maxWidth: 345 }}> 
                              <CardMedia
                                component="img"
                                height="194"
                                image={items.img}
                                alt="Paella dish"
                              />
                              <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                {items.author }
                                </Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                                <IconButton onClick={this.Click} aria-label="add to favorites">
                                  <FavoriteIcon color="red" />
                                </IconButton> 

                                <Button  style={{marginLeft:"190px"}} variant ="contained" color="secondary">Download</Button>
                              </CardActions> 
                            </Card>  
                          ))} 
   
</Grid>     
  );
}
}
