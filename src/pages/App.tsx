import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from '@/assets/logo.svg';
import HomePage from './Home';
import SettingPage from './Setting';
import CreatePage from './Create';

import styles from './App.scss';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
          <h1 className={styles["App-title"]}>Welcome to React</h1>
        </header>
        <p className={styles["App-intro"]}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Switch>
          <Route path={'/home'} component={HomePage} />
          <Route path={'/setting'} component={SettingPage} />
          <Route path={'/create'} component={CreatePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
