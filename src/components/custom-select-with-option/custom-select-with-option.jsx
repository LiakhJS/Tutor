import React from 'react';

import '../authorization/authorization.css';
import '../custom-input/custom-input.css';
import '../custom-select/custom-select.css';
import './custom-select-with-option.css';

export const CustomSelectWithOption = React.forwardRef((props, ref) => (
  <div className='custom-item selected-opt'>
    <label htmlFor={props.name} className='custom-label'>
      <select
        ref={ref}
        {...props}
        className={`custom-select custom-input custom-select-with-opt ${props.lang}`}
      >
        {props.options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  </div>
));
