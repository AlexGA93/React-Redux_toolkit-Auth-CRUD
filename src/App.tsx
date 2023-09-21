// libreries
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// components
import { ProtectedRoute } from './components';
// pages
import { Home, Layout, Login, Products, Users, Welcome } from './pages';

// styles
import './scss/main.scss';

function App() {

  // isLogged
  let isLogged: boolean = true;

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />

        <Route path="layout" element={isLogged ? <Layout /> : <Navigate to={"/"} replace />} >
          {/* home */}
          <Route path="home" element={<Home />} />
          {/* profile */}
          {/* users */}
          <Route path="users" element={<Users />} />
          {/* products */}
          <Route path="products" element={<Products />} />
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