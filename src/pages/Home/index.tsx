import * as React from 'react';
import LinkList from './LinkList';

interface IPassProps  {
  link: App.Link
}


class HomePage extends React.Component<IPassProps, {}> {
  public render() {    
    return (
      <LinkList />
    );
  }
}

export default HomePage;
