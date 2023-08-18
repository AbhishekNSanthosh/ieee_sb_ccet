import {
  RouterProvider,
  createBrowserRouter,
  Navigate
} from "react-router-dom";
import { lazy } from "react";
import './App.module.css'
import RightClickPrevention from "./Security/RightClickPrevention/RightClickPrevention";

const MainPage = lazy(() =>
  import('./modules/Pages/MainPage/MainPage')
)

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />
    }
  ]);

  return (
    <>
      <RightClickPrevention />
      <RouterProvider router={router} />
    </>
  )
}

export default App
