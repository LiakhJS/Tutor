import { useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as ErrorIcon } from '../../assets//icons/attention-icon.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/remove.svg';

import './error.css';

export const Error = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={classNames('error', { hidden: !isOpen })}>
      <div className='content-error'>
        <ErrorIcon /> Что-то пошло не так. Войдите или зарегистрируйтесь.
      </div>
      <RemoveIcon width='40px' height='40px' onClick={() => setIsOpen(false)} />
    </div>
  );
};
