import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "..";
import { useSelector } from "react-redux";
import { UserStateType, ReduxStoreType } from "../../types";

interface Props {
  validation: boolean;
}

const AuthGuard = ({ validation }: Props) => {
  // check redux state
  const userState:UserStateType = useSelector((state: ReduxStoreType) => state.userReducer);

  return userState.user.title ? (
    validation ? (
      <Outlet />
    ) : (
      <Navigate replace to={PrivateRoutes.PRIVATE} />
    )
  ) : (
    <Navigate replace to={PublicRoutes.PUBLIC} />
  );
};

export default AuthGuard;
