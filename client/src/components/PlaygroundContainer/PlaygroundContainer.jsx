import './playgroundContainer.css';


const PlaygroundContainer = ({ children }) => {
  return (
    <div className='playgroundContainer' >
      {children}
    </div>
  );
}

export default PlaygroundContainer;