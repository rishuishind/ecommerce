import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MusicItem from "./components/Music/MusicItem";
import About from "./pages/About";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductsDetails";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/store',
          element: <MusicItem />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/store/:productTitle',
          element: <ProductDetails />
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
