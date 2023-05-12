import React from 'react';

import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';

import './upload-with-icon.css';

export const UploadWithIcon = ({ handleFileChange }) => (
  <div className='upload upload-with-icon'>
    <input
      id='ava-input'
      type='file'
      className='upload_bl_input '
      onChange={handleFileChange}
    />
    <label htmlFor='ava-input' className='upload_bl filled-btn'>
      <span className='upload_bl_icon'>
        <PlusIcon className='upload_bl_icon-i' />
      </span>
    </label>
  </div>
);
