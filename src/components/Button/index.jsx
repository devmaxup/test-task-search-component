import React from 'react';

import classes from './styles.module.scss';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={classes.Button} type="button">
      {children}
    </button>
  );
}
