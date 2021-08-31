import './gameplayContainer.css';


const GameplayContainer = ({ children }) => {
  return (
    <div className='gameplayContainer' >
      {children}
    </div>
  );
}

export default GameplayContainer;