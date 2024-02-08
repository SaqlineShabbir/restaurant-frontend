import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn, userLoggedOut } from '../features/auth/authSlice';

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const localAuth = localStorage.getItem('auth');
  console.log('lo', localAuth)

  useEffect(() => {
    if (localAuth) {
      const auth = JSON.parse(localAuth);


      if (auth.token && auth.user) {
        dispatch(
          userLoggedIn({
            user: auth.user,
            token: auth.token,
          })
        );
        setAuthChecked(true);
      }
    }

  }, []);

  return authChecked;
}
