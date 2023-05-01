import React from 'react';
import NavigationVar from '../Shared/Navigationver/NavigationVar';
import { Outlet } from 'react-router-dom';

const LoginLaoyut = () => {
    return (
        <div>
            <NavigationVar />
            <Outlet />
        </div>
    );
};

export default LoginLaoyut;