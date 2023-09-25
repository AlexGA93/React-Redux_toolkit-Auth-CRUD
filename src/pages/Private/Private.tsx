import { NotFoundRoute } from "../../utils";


// lazy loading

const Private = () => {

  return (
    <NotFoundRoute>
      {/* <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} /> */}
      {/* <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} /> */}
      {/* <Route path={PrivateRoutes.HOME} element={<Home />} /> */}
    </NotFoundRoute>
  );
};

export default Private;
