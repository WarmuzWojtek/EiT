import './button.css'

const Button = ({ onClick, className, content, id }) => {
  return (
    <button ref={id} className={className} onClick={onClick}>{content}</button>
  );
}

export default Button;