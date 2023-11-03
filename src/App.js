import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StoreProvider from "./components/Contexts/StoreProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MusicItem from "./components/Music/MusicItem";
import Navibar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Root from "./pages/Root";

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
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
