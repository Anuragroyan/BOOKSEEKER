import React from 'react';
import { Typography,Button, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Subcription = () => {
    return(
        <>
          <div style={{marginTop:"15px", float:'left', marginLeft:"42px"}}>
             <h1 style={{fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Subscription Plans</h1>
          </div>
          <div className="container_plan" style={{width: "500px", marginLeft:"410px",paddingTop:"72px",paddingBottom:"32px", display:"flex"}}>
              <div style={{flex:"8",paddingRight:"22px"}}>
                 <Paper style={{width:"300px",height:"350px",padding:"12px", color:"olive", backgroundColor:"whitesmoke"}}>
                     <Typography  variant="h4" style={{padding:"22px"}}>Trial Plan</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Active for 3 days</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Only Purchase allowed</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Not Download</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Rs 99/month</Typography>
                     <Button variant="contained" color="primary"  size="auto" type="select" fullwidth style={{marginTop:"42px"}}>
                     <Link className="Link" to="/plan"><b>select</b></Link>
                     </Button>
                 </Paper>
              </div>
             <div style={{flex:"8",paddingRight:"22px"}}>
                 <Paper style={{width:"300px",height:"350px",padding:"12px", color:"seagreen",backgroundColor:"whitesmoke"}}>
                     <Typography variant="h4" style={{padding:"22px"}}>Silver Plan</Typography>
                     <Typography variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Active for 2 months</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Download and Purchase</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>only 4 books Download</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Rs 149.50/month</Typography>
                     <Button variant="contained" color="primary"  size="auto" type="select" fullwidth style={{marginTop:"42px"}}>
                     <Link className="Link" to="/plan"><b>select</b></Link>
                     </Button>
                 </Paper>
             </div>
             <div style={{flex:"8"}}>
                 <Paper style={{width:"300px",height:"350px",padding:"12px", color:"steelblue", backgroundColor:"whitesmoke"}}>
                     <Typography variant="h4" style={{padding:"22px"}}>Gold Plan</Typography>
                     <Typography variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Active for 3 months</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>7 books Download</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Purchase with offers</Typography>
                     <Typography  variant="h6" style={{alignContent:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Rs 166.50/month</Typography>
                     <Button variant="contained" color="primary"  size="auto" type="submit" fullwidth style={{marginTop:"42px"}}>
                     <Link className="Link" to="/plan1"><b>select</b></Link>
                    </Button>
                 </Paper>
             </div>
             <br style={{clear: "left"}} />
         </div>
         <div>
             <a href='/viewplan'>View Subscription</a>
         </div><br/>
     </>    
    );
};


export default Subcription;