import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <About />,
          path: "/about",
        },
        {
          element: <Project />,
          path: "/project",
        },
        {
          element: <Contact />,
          path: "/contact",
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App