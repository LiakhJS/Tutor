import React from 'react';

import './upload.css';

export const FileUploadSingle = ({ handleFileChange }) => (
  <div className='upload'>
    <input
      id='ava-input'
      type='file'
      className='upload_bl_input '
      onChange={handleFileChange}
    />
    <label htmlFor='ava-input' className='upload_bl filled-btn'>
      Загрузить фото
    </label>
  </div>
);
