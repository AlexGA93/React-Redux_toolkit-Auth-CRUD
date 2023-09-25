import { Button } from "@mui/material";
import 'atropos/css';
import Atropos from "atropos/react";
import { useNavigate } from "react-router-dom";
import "./welcome.scss";

const Welcome = () => {
  
  let navigate = useNavigate();

  const handlePanel = () => {
    navigate("/login");
  }

  return (
    <main 
      className='welcome'>
        <Atropos
          className="my-atropos"
          alwaysActive={true}
          activeOffset={40}
          shadow={false}
        >
          <div className="container">
            <h1 className="container__title">Welcome!</h1>
            <Button
              className="container__button"
              variant="contained"
              color="success"
              onClick={() => handlePanel()}
            >
              Go to Log in
            </Button>
          </div>
        </Atropos>
    </main>
  );
};

export default Welcome;
