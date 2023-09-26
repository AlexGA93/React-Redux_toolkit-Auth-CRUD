import { Route, Routes } from "react-router-dom";
import { NotFound } from "../../components";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const NotFoundRoute = ({ children }: Props) => {
  // If there isn't any of the child routes, we want to render a not found component
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NotFoundRoute;
