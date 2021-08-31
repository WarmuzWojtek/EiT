import { useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";
import { gsap } from 'gsap'
import Button from '../Button/Button'
import './buttonsKit.css'


const ButtonsKit = () => {

  const loginBtnRef = useRef(null);
  const registerBtnRef = useRef(null);
  const pRef = useRef(null)
  const demoBtnRef = useRef(null);

  useEffect(() => {
    gsap.to(loginBtnRef.current, {
      duration: 1,
      opacity: 1,
    });
    gsap.to(registerBtnRef.current, {
      duration: 1,
      opacity: 1,
    })
    let tl = gsap.timeline({ delay: 0.5 });
    tl.to(pRef.current, {
      duration: 1,
      opacity: 1,
    })
      .to(demoBtnRef.current, {
        duration: 1,
        opacity: 1,
      })
  }, [])

  function handleLoginCLick() { };
  function handleRegisterCLick() { };
  function handleDemoCLick() { }

  return (
    <div className='buttonsKit'>
      <Button
        id={loginBtnRef}
        className='loginBtn'
        onClick={handleLoginCLick}
        content='Login'
      />
      <Button
        onClick={handleRegisterCLick}
        className='registerBtn'
        content='Register'
        id={registerBtnRef} />
      <p ref={pRef} className='paragraph'>or</p>
      <NavLink className='navlink' to="/demo">
        <Button
          onClick={handleDemoCLick}
          className='demoBtn'
          content='Play Demo'
          id={demoBtnRef} />
      </NavLink>
    </div>
  );
}

export default ButtonsKit;