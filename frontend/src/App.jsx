import React from 'react';
import Navbar from './components/shared/Navbar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/profile';
import JobDescription from './components/JobDescription';
import RouteErrorPage from './components/RouteErrorPage';
import NotFoundPage from './components/NotFoundPage';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'jobs',
        element: <Jobs />
      },
      {
        path: 'description/:id',
        element: <JobDescription />
      },
      {
        path: 'browse',
        element: <Browse />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: '*',
        element: <NotFoundPage />
      },
      //admin routes
      {
        path: 'admin/companies',
        element: <Companies />
      },
      {
        path: 'admin/companies/create',
        element: <CompanyCreate />
      },
      {
        path: 'admin/companies/:id',
        element: <CompanySetup />
      },
    ]
  },
]
)
function App() {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
