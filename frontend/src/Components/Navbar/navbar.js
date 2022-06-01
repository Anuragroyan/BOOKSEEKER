import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import book from '../Navbar/bookrev.png';
import './navbar.css';
import { logoutUser } from '../../Redux/actions/users/usersActions';
const Navbar = () => {
   const state = useSelector(state => state.userLogin);
   const dispatch = useDispatch();
   const history = useHistory();
   const logoutHandler = () => {
     dispatch(logoutUser());
     history.push('/');
   };

   const { userInfo, loading, error} = state;
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' to='/'>
        <Link to='/'><img src={book} width="99" height="53"  id="img" /></Link>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
              <i class="fas fa-home"> <b>Home</b></i> <span className='sr-only'>(current)</span>
              </Link>
            </li>
            {userInfo ? (
              <> 
              {userInfo.name == 'royan' || userInfo.name == 'Akshay Ba'  ? (<>
                <li className='nav-item'>
                <Link className='nav-link' to='/author'>
                <i class="fas fa-user"> <b>Author</b></i>
                </Link>
              </li>
              </>):(<>
                {userInfo.name == 'Anirban' ? (<>
                <li className='nav-item'>
                <Link className='nav-link' to='/subcribe'>
                <i class="fas fa-user-secret fa-1x"> <b>Admin</b></i>
                </Link>
               </li>
               </>):(<>
               <li className='nav-item'>
                {/* Modal  */}
               <button
                type='button'
                className='btn btn-success'
                data-toggle='modal'
                data-target='#about'>
                <b> App Features</b>
               </button>
               <div
                className='modal fade'
                id='about'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLabel'>
                        App Features
                      </h5>
                  </div>
                    <div className='modal-body'>
                      <ul className='list-group'>
                        <li className='list-group-item'>
                          <i
                            className='fa fa-thumbs-up text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          <Link exact to='/recommender'><b>Recommendations</b></Link>
                          <hr />
                        </li>
                        <li className='list-group-item'>
                          <i
                            className='fas fa-download text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          <Link exact to='/pdfdownload'><b>Downloads</b></Link>
                          <hr />
                        </li>
                        <li className='list-group-item'>
                          <i
                            className='fas fa-shopping-cart text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          <Link exact to='/shoppingcart'><b>Shoppingcart</b></Link>
                          <hr />
                        </li>
                      </ul>
                    </div>
                    <div className='modal-footer'>
                      <a
                        className='mr-5'
                        href=''>
                        developed by: Anurag Roy
                      </a>
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-dismiss='modal'>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
               </div>
            </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/catalog'>
                <i class="fas fa-clipboard"> <b>Catalog</b></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/blog'>
                <i class="fas fa-comments"> <b>Blog</b></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/payment'>
                <i class="fas fa-wallet"> <b>Payment</b></i>
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link className='nav-link' to='/chatbot'>
                <i class="fas fa-robot"> <b>ChatBot</b></i>
                </Link>
              </li> */}
              <li className='nav-item'>
              <Link className='nav-link' to='/subcription-plan'>
              <i class="fas fa-money-bill-alt"> <b>Subscription Plan</b></i>
              </Link>
              </li>
              <li className='nav-item'>
              <Link className='nav-link' to='/creditinfo'>
              <i class="fas fa-coins"> <b>Author Credit</b></i>
              </Link>
              </li>
            </>)}
              </>)}
              <li className='nav-item'>
                <Link  onClick={() => dispatch(logoutUser())} className='nav-link' to='/login'>
                <i class="fas fa-sign-out-alt"> <b>Logout</b></i>
                </Link>
              </li>
            {userInfo ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle btn-dark'
                  data-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'>
                   <i class="fas fa-user"> <b>{userInfo.name}</b></i>
                  </a>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/profile'>
                  <i class="fas fa-user-secret fa-1x"> <b>Profile</b></i>
                  </Link>
                  {userInfo.name == 'royan' || userInfo.name == 'Akshay Ba' ? (<>
                    <Link className='dropdown-item' to='/Displaybook'>
                    <i class="fas fa-book-medical"> <b>Add book</b></i>
                  </Link>
                  <Link className='dropdown-item' to='/Bookdisplay'>
                  <i class="fas fa-book"> <b>Books</b></i>
                  </Link>
                  </>):(<>
                  </>
                  )}
                  <div className='dropdown-divider'></div>
                  <button  onClick={logoutHandler} className='dropdown-item'><i class="fas fa-sign-out-alt"> <b>Logout</b></i></button>
                </div>
              </li>
            ) : (
              ''
            )}
              </>
            ) : 
            (
              <>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                <i class="fas fa-sign-in-alt"> Login</i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                <i class="far fa-registered"> Register</i>
                </Link>
              </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;