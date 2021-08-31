import './counterContainer.css';


const CounterContainer = ({ children }) => {
  return (
    <div className='counterContainer' >
      {children}
    </div>
  );
}

export default CounterContainer;