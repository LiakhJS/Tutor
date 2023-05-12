import React from 'react';

import '../authorization/authorization.css';
import './custom-input.css';

export const CustomInput = React.forwardRef((props, ref) => (
  <div className='custom-item'>
    <label htmlFor={props.name} className='custom-label'>
      {props.title || props.placeholder}
      <input ref={ref} {...props} className='custom-input' />
    </label>
  </div>
));
