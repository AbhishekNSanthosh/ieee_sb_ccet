import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './modules/HomePage/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/> 
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
