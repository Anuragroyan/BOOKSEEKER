import axios from 'axios';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGOUT_SUCCESS,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAIL,

} from '../actionTypes';

export const registerUser = (name,email,password,genre) => {
    return async dispatch => {
        try {
            dispatch({
                type:USER_REGISTER_REQUEST,
            });

            const config = {
              headers: { 'Content-Type': 'application/json'},
            };

            const { data } = await axios.post('/api/users/register',
              {
                  name,
                  email,
                  password,
                  genre,
              },
             config
            );

            console.log(name,email,password,genre);
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data,
            });

            localStorage.setItem('userAuthData',JSON.stringify(data));

        } catch (error) {
            console.log('mongbd error',error);
            dispatch({
                type: USER_REGISTER_FAIL,
                payload:
                  error.response && error.response.data.message
                  ? error.response.data.message 
                  : error.message,
            });
        }
    };
};

export const loginUser = (email, password) => {
    return async dispatch => {
       try {
           dispatch({
               type: USER_LOGIN_REQUEST,
           });

           const config = {
               headers: {
                   'Content-Type': 'application/json',
               },
           };

           const { data } = await axios.post(
               '/api/users/login',
               { email, password },
               config
           );

           dispatch({
               type: USER_LOGIN_SUCCESS,
               payload: data,
           });

           localStorage.setItem('userAuthData', JSON.stringify(data));

       } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message,
        });
       }
    };
};

export const logoutUser = () => {
  return async dispatch => {
    localStorage.removeItem('userAuthData');
    try {
      dispatch({
          type: USER_LOGOUT_SUCCESS,
      });
    } catch (error) {}
  };
};

export const getUserProfile = () => {
  return async (dispatch, getState) => {
      const { userInfo } = getState().userLogin;
      try {
        dispatch({
          type: USER_PROFILE_REQUEST,
        });
        const config = {
          headers: {
            authorization: `anirban ${userInfo.token}`,
          },
        };
        const { data } = await axios.get('/api/users/profile', config);
        dispatch({
          type: USER_PROFILE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: USER_PROFILE_FAIL,
          payload: error.response && error.response.data.message,
        });
      }
  };
};

export const updateUser = (name, email, password, genre) => {
return  async (dispatch, getState) => {
      try {
        dispatch({
          type: USER_UPDATE_REQUEST,
          loading: true,
        });
        
        const { userInfo } = getState().userLogin;
        console.log(userInfo.token);
        
        const config = {
          headers: {
            'Content-Type': 'application/json',
            authorization: `anirban ${userInfo.token}`,
          },
        };
        const { data } = await axios.put(
          '/api/users/profile/update',
          { name, email, password , genre},
          config
        );
        dispatch({
          type: USER_UPDATE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: USER_UPDATE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };

  export const fetchUsers = () => {
      return async dispatch => {
        try {
            dispatch({
                type: FETCH_USERS_REQUEST,
                loading:true,
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.get('/api/users', config);

            dispatch({
                type:FETCH_USERS_SUCCESS,
                payload: data,
            });
        } catch (error) {
          dispatch({
              type: FETCH_USERS_FAIL,
              error: error.response && error.response.data.message,
          });
        }
      };
  };

  export const updateCurrentDownload = (id) => {
    return  async (dispatch, getState) => {
      try {
        dispatch({
          type: USER_UPDATE_REQUEST,
          loading: true,
        });
        
        const { userInfo } = getState().userLogin;
        console.log(userInfo.token);
        
        const config = {
          headers: {
            'Content-Type': 'application/json',
            authorization: `anirban ${userInfo.token}`,
          },
        };
        const { data } = await axios.put(
          '/api/users/currentDownload',
          { id},
          config
        );
        console.log('cdownload',data.currentDownload) 
       const userAuthData = JSON.parse(localStorage.getItem('userAuthData'))
       userAuthData.currentDownload = data.currentDownload
       localStorage.setItem('userAuthData',JSON.stringify(userAuthData));
        dispatch({
          type: USER_UPDATE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: USER_UPDATE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  };