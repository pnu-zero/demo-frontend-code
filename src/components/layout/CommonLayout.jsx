import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

function CommonLayout() {
  return (
    <div>
      <Header />
      <div className="flex min-w-[1280px]">
        <Navigation />
        <div className="min-w-[1025px] mx-auto bg-bjsGray">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CommonLayout;
