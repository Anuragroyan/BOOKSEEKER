import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getbooks } from '../../Redux/actions/books/bookActions';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import img1_auth from '../Author/Banner.jpg';
import img2_auth from '../Author/author.jfif';
import img3_auth from '../Author/award.png';
import img4_auth from '../Author/book.jpg';
import img5_auth from '../Author/writer.jpg';
const Author = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);

    useEffect(() => {
        dispatch(getbooks()); 
     },[ currentId,dispatch]);
    return(
        <>
        <div id="demo" className="carousel slide" data-ride="carousel" style={{padding:"10px",marginBottom:"22px"}}>
        <ul className="carousel-indicators" style={{marginBottom:"-15px"}}>
         <li data-target="#demo" data-slide-to="0" className="active"></li>
         <li data-target="#demo" data-slide-to="1" ></li>
         <li data-target="#demo" data-slide-to="2" ></li>
         <li data-target="#demo" data-slide-to="3" ></li>
         <li data-target="#demo" data-slide-to="4" ></li>
        </ul>
        <div className="carousel-inner">
            <div className="carousel-item active">
               <img src={img1_auth} width="1480px" height="450px"/>
            </div>
            <div className="carousel-item ">
               <img src={img2_auth} width="1480px" height="450px" />
            </div>
            <div className="carousel-item ">
               <img src={img3_auth} width="1480px" height="450px" />
            </div>
            <div className="carousel-item ">
               <img src={img4_auth} width="1480px" height="450px" />
            </div>
            <div className="carousel-item ">
               <img src={img5_auth} width="1480px" height="450px" />
            </div>
        </div>   
    </div>
    <div>
       <a href='/reward'>Author Rewards</a>
    </div><br/>
    <Paper style={{width:"1470px",height:"auto",marginLeft:"207px",padding:"-12px"}}>
    <Table style={{width:"1285px"}}>
      <TableHead>
        <TableRow style={{fontFamily:"cursive",fontVariant:"all-petite-caps"}}>
          <TableCell align="right"><b>Author_ID</b></TableCell>
          <TableCell align="right"><b>Author Name</b></TableCell>
          <TableCell align="right"><b>Book Name</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody style={{textAlign:"justify",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>
      {books.map((post) => (
          <TableRow post={post} setCurrentId={setCurrentId}>
            <TableCell align="right"><b>{post.author_id}</b></TableCell>
            <TableCell align="right"><b>{post.author}</b></TableCell>
            <TableCell align="right"><b>{post.title}</b></TableCell>
          </TableRow>
      ))}
      </TableBody>
    </Table>
  </Paper><br/>
  </>
    );
};

export default Author;