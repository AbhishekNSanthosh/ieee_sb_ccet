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
import Footer from './components/Footer/Footer';
import EventsPage from './modules/EventsPage/EventsPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <HomePage />
      <Footer/>

      </>
    },
    {
      path: "/execom",
      element: <>
        <Navbar />
        <ExecomPage />
        <Footer/>
      </>
    },
    {
      path: "/events",
      element: <>
        <Navbar />
        <EventsPage />
        <Footer/>
      </>
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
