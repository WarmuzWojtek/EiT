import './actionsContainer.css';


const ActionsContainer = ({ children }) => {
  return (
    <div className='actionsContainer' >
      {children}
    </div>
  );
}

export default ActionsContainer;