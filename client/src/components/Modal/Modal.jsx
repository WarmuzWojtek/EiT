import { forwardRef } from "react";
import "./modal.css";

const Modal = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="modalOverlay">
      <div className="modal">{children}</div>
    </div>
  );
});

export default Modal;
