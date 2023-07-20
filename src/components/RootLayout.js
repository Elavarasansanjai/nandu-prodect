import React from 'react';
import MainNavigation from './mainNavigation';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <div className="root">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
