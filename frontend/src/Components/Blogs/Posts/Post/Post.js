import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likeblog, deleteblog } from '../../../../Redux/actions/blogs/blogaction';


const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch();
  return(
    <Card style={{marginTop:"auto", marginLeft:"53px"}}>
    <CardMedia title={post.title}/>
    <div style={{float:"left", marginLeft:"13px",marginRight:"23px"}}>
      <Typography variant="h6" style={{fontSize:"22px",fontStyle:"italic"}}><b>{post.creator}</b></Typography>
      <Typography variant="body2" style={{fontSize:"17px"}}>{moment(post.createdAt).fromNow()}</Typography>
    </div>
    <div style={{float:"right", marginBottom:"-63px"}}>
      <Button style={{ color: 'blue' }} size="small" onClick={() => setCurrentId(post._id)} ><MoreHorizIcon fontSize="default" /></Button>
    </div>
    <div style={{marginTop:"22px"}}>
          <img src={post.selectedFile} width="350px" height="200px" alt="memory.png"/>
    </div>
    <div style={{marginTop:"33px"}}>
      <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> 
      <Typography  gutterBottom variant="h5" component="h2">{post.title}</Typography>
    </div>  
    <CardContent style={{margin:"23px"}}>
      <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"22px"}}>{post.message}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" style={{marginLeft:"12px"}} ><ThumbUpAltIcon fontSize="small" onClick={() => dispatch(likeblog(post._id))} /> <b>Like  {post.likeCount} </b></Button>
      <Button size="small" color="primary" style={{marginLeft:"198px"}}  ><DeleteIcon fontSize="small" onClick={() => dispatch(deleteblog(post._id))} /> <b>Delete</b></Button>
    </CardActions>
  </Card>
  );
};

export default Post;