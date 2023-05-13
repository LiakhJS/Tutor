import "./button.css";

export const Button = ({ type, className, children, onClick }) => (
  <div className="btn-wrapper">
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  </div>
);
