import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import WrongPathPage from "./pages/wrong-path-page/WrongPathPage";
import Index from "./pages/index-page/Index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Index />} />;
        <Route path="*" element={<WrongPathPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

const Root = () => {
  return <Outlet />;
};

export default App;
