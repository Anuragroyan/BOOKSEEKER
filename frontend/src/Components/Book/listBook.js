import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch} from 'react-redux';
import { likebook,deletebook} from '../../Redux/actions/books/bookActions';


const ListBook = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return(
        <Card style={{marginTop:"33px",marginBottom:"12px"}}>
            <CardMedia title={post.title} style={{fontStyle:"italic"}} />
                <div style={{marginTop:"12px",fontSize:"12px",fontStyle:"italic"}}>
                <Typography variant="h5"><b>{post.author}</b></Typography>
                <Typography variant="body2"><b>{moment(post.createdAt).fromNow()}</b></Typography>
                <div>
                <Button style={{ color: 'blue' }} size="small" onClick={() => setCurrentId(post._id)} ><MoreHorizIcon fontSize="default" /></Button>
                </div>
                <div style={{borderRadius:"12px"}}>
                <img src={post.selectedFile} width="250px" height="250px"/>
                </div>
                <Typography variant="h6"><b>{post.createdBy}</b></Typography>
            </div>
            <CardContent style={{marginTop:"-14px"}}>
                <Typography variant="body1"><b>{post.AboutBook}</b></Typography>
            </CardContent>
            <div style={{marginTop:"-14px"}}>
                <Typography variant="body4"><b>{post.category}</b></Typography><br/>
                <Typography variant="body4"><b>Rs: {post.Price}</b></Typography>
            </div>
            <CardActions>
                <Button size="small" color="primary" style={{marginLeft:"2px"}}><ThumbUpAltIcon fontSize="small"  onClick={() => dispatch(likebook(post._id))}/><b style={{marginLeft:"2px"}}>Like {post.likeCount} </b></Button>
                <Button size="small" color="primary" style={{marginLeft:"138px"}}  ><DeleteIcon fontSize="small"  onClick={() => dispatch(deletebook(post._id))} /> <b>Delete</b></Button>
            </CardActions>
        </Card>
    );
}

export default ListBook;