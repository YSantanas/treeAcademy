import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const handleLogin = useCallback(() => {
    navigate('/', { replace: true, state: { user, auth: true } });
  }, [navigate, user]);

  const handleLogout = useCallback(() => {
    navigate('/login', { replace: true, state: { user: null, auth: false } });
  }, [navigate]);

  useEffect(() => {
    if (
      !!user &&
      (location.pathname === '/registro' || location.pathname === '/login')
    )
      handleLogin();
  }, [user, handleLogin, location.pathname]);

  return {
    user,
    navigate,
    location,
    handleLogin,
    handleLogout,
    isAuth: location.state?.auth,
  };
};
