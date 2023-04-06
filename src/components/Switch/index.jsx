/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import classes from './styles.module.scss';

export default function Switch({ checked, setChecked }) {
  return (
    <div className={classes.Switch}>
      <label className={classes.label}>
        <button
          role="switch"
          aria-checked={checked}
          type="button"
          onClick={() => setChecked((prevState) => !prevState)}
        >
          Switch
        </button>
        <span className={classes.labelText}>Show selected only</span>
      </label>
    </div>
  );
}
