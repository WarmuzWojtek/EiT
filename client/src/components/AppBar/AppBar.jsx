import { useRef } from 'react'
import './appBar.css'
import logoEit from '../../Assets/Images/logos.svg'
import Button from '../Button/Button'



function handleLoginCLick() { };
function handleRegisterCLick() { };


const AppBar = () => {

  const redLoginBtnRef = useRef(null);
  const redRegisterBtnRef = useRef(null);

  return (
    <div className='appBar'>
      <div className='logoContainer'>
        <img className='logo' alt='EiT logo, skrót nazwy aplikacji' scr={logoEit} />
      </div>
      <Button
        id={redLoginBtnRef}
        className='redBtn'
        onClick={handleLoginCLick}
        content='Login'
      />
      <Button
        id={redRegisterBtnRef}
        className='redBtn'
        onClick={handleRegisterCLick}
        content='Register'
      />
    </div>
  );
}

export default AppBar;