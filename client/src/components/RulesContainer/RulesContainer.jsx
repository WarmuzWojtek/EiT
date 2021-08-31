import './rulesContainer.css';


const RulesContainer = ({ children }) => {
  return (
    <div className='rulesContainer' >
      {children}
    </div>
  );
}

export default RulesContainer;