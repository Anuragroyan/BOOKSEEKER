import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { registerUser } from '../../Redux/actions/users/usersActions';
import '../Users/Register.css';
import swal from 'sweetalert';
import adduser from '../Users/user-male.png';

const RegisterUser = ({history}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo, error } = userLogin;


  useEffect(()=>{
   if(userInfo) {
     history.push('/dashboard');
   }
  },[userInfo]);
 
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(registerUser(name,email,password,genre));
    Message();
  };

  const Message = () => {
    swal({
        title:"User is registered Successfully",
        text:"Thanks for Registering!!!",
        icon:adduser,
    });
 }
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container-register'>
          <h1 className='text-center' id='register'>Register</h1>
            <form id='registers' onSubmit={formSubmitHandler}>
            <fieldset style={{textAlign:"center",marginLeft:"23px"}}>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Name</label>
                <input
                 value ={name}
                 onChange={e => setName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                 value={password}
                 onChange={e=>setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Genre</label>
                <input
                 value={genre}
                 onChange={e=>setGenre(e.target.value.split(','))}
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Enter Genre'
                  required
                />
              </div>
              <div id="btn">
              <button type='submit' className='btn btn-info m-auto' onClick={Message}>
                <b>Register</b>
              </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;