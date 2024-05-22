import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import { isLogin } from '../../api/user';

function CommonLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    isLogin(navigate);
  }, []);

  return (
    <div className="h-full">
      <Header />
      <div className="flex w-full h-full">
        <Navigation />
        <div className="w-full bg-bjsGray">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CommonLayout;
