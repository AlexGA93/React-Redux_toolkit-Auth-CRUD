// libreries
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// components
import { ProtectedRoute } from "./components";
// pages
import {
  Home,
  Layout,
  Login,
  Product,
  Products,
  User,
  Users,
  Welcome,
} from "./pages";

// styles
import "./scss/main.scss";

/**
 * TODO: 
 *  - react-redux
 *  - store
 *  - methods
 *  - navbar
 *  - components
 */

function App() {
  // isLogged
  let isLogged: boolean = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route
          path="layout"
          element={isLogged ? <Layout /> : <Navigate to={"/"} replace />}
        >
          {/* layout/ */}
          <Route index element={<Home />} />
          {/* layout/profile */}
          {/* layout/users */}
          <Route path="users">
            <Route index element={<Users />} />
            <Route path=":id" element={<User />} />
          </Route>
          {/* layout/products */}
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<Product />} />
          </Route>
          {/* orders */}
          {/* posts */}
          {/* elements */}
          {/* notes */}
          {/* forms ?? */}
          {/* calendar */}
          {/* settings */}
          {/* backups */}
          {/* charts */}
          {/* logs */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
