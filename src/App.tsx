// libreries
import { BrowserRouter, Route } from "react-router-dom";
// components
import { Footer, Navbar } from "./components";
// styles
import { Suspense, lazy } from "react";
import { AuthGuard, PrivateRoutes, PublicRoutes } from "./routes";
import "./scss/main.scss";
import { NotFoundRoute } from "./utils/NotFoundRoute";

const publicPath = './pages/Public/Public';
const privatePath = './pages/Private/Private';
// lazy loading
const Public = lazy(() => import(publicPath));
const Private = lazy(() => import(privatePath));

function App() {

  return (
    <Suspense fallback={<>LOADING COMPONENT</>}>
      <BrowserRouter>
        {/* NAVBAR */}
        <Navbar />
        <NotFoundRoute>
          {/* ROOT */}
          <Route path="/" element={PrivateRoutes.PRIVATE} />
          {/* PUBLIC ROUTES */}
          <Route path={`${PublicRoutes.PUBLIC}/*`} element={<Public />} />
          {/* PRIVATE ROUTES */}
          <Route element={<AuthGuard validation={true} />}>
            {/* PRIVATE MODULE */}
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
          {/* ROLE PROTECTED ROUTES */}
        </NotFoundRoute>
        {/* FOOTER */}
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
