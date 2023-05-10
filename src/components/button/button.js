
import './button.css';

export const Button =({type, className, children}) => (
    <div className= 'btn-wrapper'>
      <button type={type} className={className}>
{children}
      </button>
    </div>
  );