// import React from 'react';

import React from 'react';

import '../authorization/authorization.css';
import '../custom-input/custom-input.css';
import './custom-select.css';


export const CustomSelect = React.forwardRef((props, ref) => (
  <div className='custom-item'>
    <label htmlFor={props.name} className='custom-label'>
      {props.title}

      <select defaultValue={''}
        ref={ref}
        {...props}
        required={props.required}
        className='custom-select custom-input'>     <option value='' disabled >{props.placeholder}</option>
        {props.levels && props.levels.map((item) => <option key={item}>{item}</option>)}
        {props.languages && props.languages.map((item) => <option key={item}>{item}</option>)}
      </select>

    </label>

    {props.errors && <span className='field_invalid'>{props.message}</span>}

    {!props.errors && <span className='field_valid'>{props.message}</span>}
    {props.errors === 'errors.email || errors.password' && <span className='field_invalid' />}
  </div>
))

