import React, { useEffect } from 'react';
import './Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile }  from '../../Redux/actions/users/usersActions';
import pic from '../Profile/images.png';
import { Link } from 'react-router-dom';

const Profile = ({history}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  },[dispatch,history]);
 
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(()=> {
    if (userInfo === null) history.push('/login');
  },[userInfo,history]);
  const userProfile = useSelector(state => state.userProfile);
  const { error, loading, user } = userProfile;
  return (
    <>
      {error && <p>{error}</p>}
      {loading ? <p>Loading</p> : 
      <div className='containers' style={{paddingBottom:"12px"}}>
      <div className='row'>
        <div className='col mt-4'>
          <div className='card m-auto ' style={{ width: '30%' }}>
            <img src={pic} className='card-img-top' alt='...' />
            <div className='card-body'>
              <p className='card-title' style={{marginBottom:"-32px",marginTop:"-12px"}}>{user?.email}</p>
              <p className='card-text' style={{marginTop:"27px"}}><b>{user?.name}</b><br/><b>{user?.genre[0]}</b><br/><b>{user?.genre[1]}</b><br/> {userInfo.name == "Anirban" || userInfo.name == "Akshay Ba" || userInfo.name == "royan" ? (<></>):(<><Link to='/profile-update' className='btn btn-primary'>
                Update your profile
              </Link></>)}
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
      }
    </>
  );
};

export default Profile;