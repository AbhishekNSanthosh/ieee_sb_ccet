import {
  RouterProvider,
  createBrowserRouter,
  Navigate
} from "react-router-dom";
import { lazy } from "react";

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

  return <RouterProvider router={router} />;
}

export default App
