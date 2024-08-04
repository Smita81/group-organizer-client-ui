import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import { MembersPage } from './pages/members-page/MembersPage.jsx'
import { HomePage } from './pages/home-page/HomePage.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
{ path:"/", element: <HomePage /> },
{path:'/members', element:<MembersPage />},
],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
