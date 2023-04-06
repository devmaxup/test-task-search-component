import React, { useState, useRef } from 'react';

import classNames from 'classnames';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Switch from '../Switch';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import classes from './styles.module.scss';

export default function SearchTab({ options, selectedOptions, setOptions }) {
  const [isShownSelectedOnly, setIsShownSelectedOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const searchTabRef = useRef();

  useOnClickOutside(searchTabRef, () => setIsOpen(false));

  const toggleOption = (option) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      const index = newOptions.indexOf(option);
      if (index > -1) {
        newOptions.splice(index, 1);
      } else {
        newOptions.push(option);
      }
      return newOptions;
    });
  };

  const clearAll = () => {
    setOptions([]);
  };

  let optionsToShow = options;

  if (isShownSelectedOnly) {
    optionsToShow = options.filter((option) => {
      return selectedOptions.includes(option);
    });
  }

  if (searchTerm.trim()) {
    optionsToShow = optionsToShow.filter((option) => {
      return option.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  return (
    <div
      className={classNames(classes.SearchTab, {
        [classes.open]: isOpen,
      })}
      ref={searchTabRef}
    >
      <div className={classes.searchInputContainer}>
        <input
          onFocus={() => setIsOpen(true)}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className={classes.container}>
        <div className={classes.buttons}>
          <Switch
            checked={isShownSelectedOnly}
            setChecked={setIsShownSelectedOnly}
          />
          <button
            type="button"
            className={classes.clearAllButton}
            onClick={clearAll}
          >
            Clear all
          </button>
        </div>
        <ul className={classes.options}>
          {optionsToShow.map((option) => (
            <li key={option} className={classes.option}>
              <Checkbox
                label={option}
                onChange={() => toggleOption(option)}
                checked={selectedOptions.includes(option)}
              />
            </li>
          ))}
        </ul>
        <div className={classes.footer}>
          <Button onClick={() => setIsOpen(false)}>Save</Button>
        </div>
      </div>
    </div>
  );
}
