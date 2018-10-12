import * as React from 'react';

interface IPassProps  {
  link: App.Link
}

class Link extends React.Component<IPassProps, {}> {
  public render() {
    return (
      <div>
        <div>
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    )
  }
}

export default Link