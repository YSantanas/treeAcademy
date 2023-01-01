import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshToken } from '../features/auth/auth.api';
import { useAuth } from '../hooks/useAuth';
import { Carousel } from './Carousel';

const Header = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token') || '';
  useAuth();

  useEffect(() => {
    if (!!token) dispatch(refreshToken({ token }));
  }, [dispatch, token]);

  return <Carousel />;
};

export default Header;
