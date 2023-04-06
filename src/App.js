import React, { useState } from 'react';

import { COUNTRIES } from './constants/main';
import classes from './styles.module.scss';
import SearchTab from './components/SearchTab';

function App() {
  const [selectedCountries, setSelectedCountries] = useState([]);

  return (
    <div className={classes.App}>
      <div className={classes.searchTabContainer}>
        <SearchTab
          selectedOptions={selectedCountries}
          setOptions={setSelectedCountries}
          options={COUNTRIES}
        />
      </div>
    </div>
  );
}

export default App;
