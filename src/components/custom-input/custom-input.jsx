// import React from 'react';

import React from 'react';

import '../authorization/authorization.css';
import './custom-input.css';


export const CustomInput = React.forwardRef((props, ref) => (
  <div className='custom-item'>      
    <label htmlFor={props.name} className='custom-label'>
    {props.title || props.placeholder}
    
      <input
        ref={ref}
        {...props}
        className='custom-input'
        
      />

    </label>

    {props.errors && <span className='field_invalid'>{props.message}</span>}

    {!props.errors && <span className='field_valid'>{props.message}</span>}
    {props.errors === 'errors.email || errors.password' && <span className='field_invalid' />}
  </div>
))

