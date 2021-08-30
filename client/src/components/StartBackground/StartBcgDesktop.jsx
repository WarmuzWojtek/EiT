import './startBcgDesktop.css';
import bcg from '../../Assets/Images/bcg.jpg'

const StartBcg = ({ children }) => {
  return (
    <div className='mainBcg' style={{ backgroundImage: `url(${bcg})` }}>
      <div className='startContainer'>
        {children}
      </div>
    </div>
  );
}

export default StartBcg;