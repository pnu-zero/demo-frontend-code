import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

function CommonLayout() {
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
