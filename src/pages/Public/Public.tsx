import { PublicRoutes } from "../../routes";
import { NotFoundRoute } from "../../utils";
import { Navigate, Route } from 'react-router-dom';

const Public = () => {
  return (
    <NotFoundRoute>
        <Route path="/" element={<Navigate to={PublicRoutes.WELCOME} />}/>
        <Route path="/login" element={<Navigate to={PublicRoutes.LOGIN} />}/>
    </NotFoundRoute>
  )
}

export default Public;
