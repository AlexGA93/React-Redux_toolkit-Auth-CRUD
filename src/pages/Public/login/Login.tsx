import { Button } from "@mui/material";
import Atropos from "atropos/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/states/user";
import { PublicRoutes } from "../../../routes";
import { LoginFormType } from "../../../types/dataTypes";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  // local state form
  const [formValue, setFormValue] = useState<LoginFormType>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(formValue))
      .then((result: any) => {
        console.log(result);
        navigate("/private/layout");
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <div className="login">
      <Atropos
        className="my-atropos"
        alwaysActive={true}
        activeOffset={40}
        shadow={false}
      >
        <div className="container">
          <h1 className="container__title">Login</h1>

          <form className="container__form" onSubmit={handleSubmit}>
            <fieldset className="form__fieldset fieldset__email">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                value={formValue.email}
                onChange={(e) =>
                  setFormValue({ ...formValue, email: e.target.value })
                }
                placeholder="Email..."
              />
            </fieldset>
            <fieldset className="form__fieldset fieldset__password">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={formValue.password}
                onChange={(e) =>
                  setFormValue({ ...formValue, password: e.target.value })
                }
                placeholder="Password..."
              />
            </fieldset>
            <fieldset className="form__fieldset fieldset__buttons">
              <Button
                className="button"
                type="submit"
                variant="contained"
                color="success"
              >
                Login
              </Button>
              <Button
                className="button"
                type="submit"
                variant="contained"
                color="error"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
            </fieldset>
            <fieldset className="form__fieldset fieldset__register">
              <p>
                Not an account yet? register{" "}
                <strong>
                  <Link to={`/public/${PublicRoutes.REGISTER}`}>HERE!...</Link>
                </strong>
              </p>
            </fieldset>
          </form>
        </div>
      </Atropos>
    </div>
  );
};

export default Login;
