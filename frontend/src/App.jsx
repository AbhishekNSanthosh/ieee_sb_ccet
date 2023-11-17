import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './modules/HomePage/HomePage';
import ExecomPage from './modules/EventsPage/ExecomPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/> 
    },
    {
      path: "/execom/:id",
      element: <ExecomPage/> 
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
