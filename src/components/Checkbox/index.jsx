/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import classes from './styles.module.scss';

export default function Checkbox({ label, checked, onChange }) {
  return (
    <label className={classes.Checkbox}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={classes.checkmark} />
      {label}
    </label>
  );
}
