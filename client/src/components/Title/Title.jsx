import './title.css';

const Title = ({ id }) => {
  return (
    <h1 ref={id} className='title'>English</h1>
  );
}

export default Title;