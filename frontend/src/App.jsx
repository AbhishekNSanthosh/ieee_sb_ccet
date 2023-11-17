import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './modules/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import ExecomPage from './modules/ExecomPage/ExecomPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <HomePage />
      </>
    },
    {
      path: "/execom",
      element: <>
        <Navbar />
        <ExecomPage />
      </>
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
