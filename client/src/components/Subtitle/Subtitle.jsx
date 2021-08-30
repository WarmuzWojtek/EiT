import './subtitle.css'

const Subtitle = ({ id, content, className }) => {
  return (
    <p ref={id} className={className}>{content}</p>
  );
}

export default Subtitle;