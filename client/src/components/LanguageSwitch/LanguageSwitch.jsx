import './languageSwitch.css'
import arrow from '../../Assets/Images/arrow.png'


const LanguageSwitch = ({ isEnglishFirst, onClickFn }) => {

  return (
    <div onClick={onClickFn} className='switchContainer'>
      <p>{isEnglishFirst ? "EN" : "PL"}</p>
      <div className='arrow' style={{ backgroundImage: `url(${arrow})` }}></div>
      <p>{isEnglishFirst ? "PL" : "EL"}</p>
    </div>

  );
}

export default LanguageSwitch;