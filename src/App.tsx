// libreries
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// components
import { Footer,Menu ,Navbar } from './components';
// pages
import { Home, Products, Users, Login, User, Product } from './pages';
//  types
import { BrowserRouterRoute } from "./types/types";
// styles
import './styles/global.scss';

function App() {

  // custom layout with Navbar | Menu | Footer
  const Layout = (): JSX.Element => (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          {/* Pages */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );

  /**
   * TODO: protected route in element field
   */
  // React router dom client-side browser router
  const routes: BrowserRouterRoute[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/users', element: <Users /> },
        { path: '/products', element: <Products /> },
        { path: '/users/:id', element: <User /> },
        { path: '/products/:id', element: <Product /> }
      ]
    },
    {
      path: 'login',
      element: <Login />
    }
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
