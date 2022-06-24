import React from 'react';
import {useRoutes} from 'react-router-dom';
import {Layout} from '../Layout';
import {Users} from '../../pages/Users';
import {Counter} from '../../pages/Counter';

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
        { path: "counter",
          element: <Counter />,
        },
      ],
    },
  ]);
};
