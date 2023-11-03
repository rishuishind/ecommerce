import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MusicItem from "./components/Music/MusicItem";
import About from "./pages/About";
import Root from "./pages/Root";
import Home from "./pages/Home";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <MusicItem />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/home',
          element: <Home />
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
