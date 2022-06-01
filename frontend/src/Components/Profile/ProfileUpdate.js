import React, { useState } from 'react';
import '../Profile/Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../Redux/actions/users/usersActions';
import SuccessMessage from '../SuccessMessage';
import swal from 'sweetalert';
import profile1 from '../Profile/user-edit.jpg';
const ProfileUpdate = () => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const [ name, setname ] = useState(userInfo ? userInfo.name : '');
  const [ email, setemail ] = useState(userInfo ? userInfo.email : '');
  const [ password, setpassword ] = useState(userInfo ? userInfo.password : '');
  const [ genre, setGenre ] = useState(userInfo ? userInfo.genre : '');
  const updatedUser = useSelector(state => state.updatedUser);
  const { user, loading, success } = updatedUser;
 
  const dispatch = useDispatch();
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(updateUser(name,email,password,genre));
    Message();
  };
  const Message = () => {
    swal({
        title:"User profile updated  Successfully",
        text:"thanks for updating profile!!!",
        icon:profile1,
    });
 }
  const msg='Updated successfully. Logout and login with your new credentials';
   return(
    <div className='row container-height'>
    <div className='col-lg-6 col-md-6 m-auto'>
      <div className='container_2'>
        {user && !loading && success && (
            <SuccessMessage>{msg}</SuccessMessage>
          )}
        <h1 className='text-center' id="update">Update</h1>
        <form onSubmit={formSubmitHandler}>
          <fieldset>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Name</label>
              <input
               value={name}
               onChange={e => setname(e.target.value)}
                type='text'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
              value={email}
              onChange={e => setemail(e.target.value)}
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                value={password}
                onChange={e => setpassword(e.target.value)}
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Genre</label>
              <input
              value={genre}
              onChange={e => setGenre(e.target.value.split(','))}
                type='text'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter genre'
              />
            </div>
            <div id="btn">
            <button type='submit' className='btn btn-primary m-auto' onClick={Message}>
              Update your profile
            </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
   );
};

export default ProfileUpdate;