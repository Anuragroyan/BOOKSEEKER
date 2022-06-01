import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser} from '../../Redux/actions/users/usersActions';
import ErrorMessage from '../ErrorMessages';
import '../Users/Login.css';

const LoginUsers = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const state = useSelector(state => {
     return state.userLogin;
  });

  const { loading, userInfo, error} = state;
    console.log(state);  

  const loginUserSubmitHandler = e => {
    e.preventDefault();
    console.log(email,password);
    dispatch(loginUser(email,password));
  };

  useEffect(()=> {
  if (userInfo) history.push('/dashboard');
  },[state]);

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container-login'>
          {loading && <p>LOADING</p>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        <h1 className='text-center' id='main'>Login</h1>
          <form id='login' onSubmit={loginUserSubmitHandler}>
            <fieldset style={{textAlign:"center",marginLeft:"23px"}}>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                 value={email}
                 onChange={e=>setEmail(e.target.value)}
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
              <div id="btn">
              <button type='submit' className='btn btn-info m-auto'>
                <b>Login</b>
              </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUsers;