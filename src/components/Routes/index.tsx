import React from 'react';
import {useRoutes} from 'react-router-dom';
import {Layout} from '../Layout';
import {Users} from '../../pages/Users';

export const Routes: React.FC = () => {

  return useRoutes([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: "users",
          index: true,
          element: <Users />,
        },
        { path: "todos", element: <Users /> },
      ],
    },
  ]);
};
