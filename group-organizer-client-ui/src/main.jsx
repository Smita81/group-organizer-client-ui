import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import { MembersPage } from './pages/members-page/MembersPage.jsx'
import { HomePage } from './pages/home-page/HomePage.jsx'
import { ErrorPage } from './pages/error-page/ErrorPage.jsx'
import { MemberDetailsPage } from './pages/members-page/MemberDetailsPage.jsx'
import { ContextProvider } from './components/context/GroupOrganizerContext.jsx'
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
{ path:"/", element: <HomePage /> },
{path:'/members', element:<MembersPage />},
{path:'/members/:id', element: <MemberDetailsPage />},
],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={routes} />
    </ContextProvider>
  </React.StrictMode>
);
