import { useRef } from "react";
import "./appBar.css";
// import logoEit from '../../Assets/Images/logos.svg'
import Button from "../Button/Button";

function handleLoginCLick() {}
function handleRegisterCLick() {}

const AppBar = () => {
  const redLoginBtnRef = useRef(null);
  const redRegisterBtnRef = useRef(null);

  return (
    <div className="appBar">
      <div className="appBarContainer">
        <div
          className="logoContainer"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/logo.png"})`,
          }}
        >
          {/* <img className='logo' alt='EiT logo, skrót nazwy aplikacji' scr={`${process.env.PUBLIC_URL + '/logo.png'}`} /> */}
        </div>
        <Button
          id={redLoginBtnRef}
          className="redBtn"
          onClick={handleLoginCLick}
          content="Login"
        />
        <Button
          id={redRegisterBtnRef}
          className="redBtn"
          onClick={handleRegisterCLick}
          content="Register"
        />
      </div>
    </div>
  );
};

export default AppBar;
