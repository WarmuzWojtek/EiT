import './playBackground.css';
import bcg from '../../Assets/Images/plg.jpg'

const PlgBcg = ({ children }) => {
  return (
    <div className='plgBcg' style={{ backgroundImage: `url(${bcg})` }}>
      <div className='playContainer'>
        {children}
      </div>
    </div>
  );
}

export default PlgBcg;