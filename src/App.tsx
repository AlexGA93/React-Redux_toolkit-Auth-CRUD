// libreries
import { BrowserRouter, Navigate, Route } from "react-router-dom";
// components
import { Footer, Navbar } from "./components";
// styles
import { Suspense, lazy } from "react";
import { AuthGuard, PrivateRoutes, PublicRoutes } from "./routes";
import "./scss/main.scss";
import { NotFoundRoute } from "./utils/NotFoundRoute";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store";
import Loading from "./components/loading/Loading";

// lazy loading
const Public = lazy(() => import("./pages/Public/Public"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {

  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        <Provider store={reduxStore}>
          <BrowserRouter>
            
            <div className="body">
            <NotFoundRoute>
              {/* ROOT */}
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              {/* PUBLIC ROUTES */}
              <Route path={`${PublicRoutes.PUBLIC}/*`} element={<Public />} />
              {/* PRIVATE ROUTES */}
              <Route element={<AuthGuard validation={true} />}>
                {/* PRIVATE MODULE */}
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              {/* ROLE PROTECTED ROUTES */}
            </NotFoundRoute>
            </div>
            
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
