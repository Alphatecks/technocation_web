import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css'
import { Login, Register,Dashboard } from './components/view';
import {Search, Courses, Profile, Statistics} from './components/view/containers'
import SavedCourses from './components/view/containers/savedcourses/SavedCourses';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "search",
    element: <Search />
  },
  {
    path: "courses",
    element: <Courses />
  },
  {
    path: "savedcourses",
    element: <SavedCourses />
  },
  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "statistics",
    element: <Statistics/>
  }

  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);

