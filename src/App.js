import { createHashRouter, RouterProvider } from "react-router-dom";
import { routes } from "./Routes/routes";
import './ThemeSite/theme.css';

const router = createHashRouter(routes)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;