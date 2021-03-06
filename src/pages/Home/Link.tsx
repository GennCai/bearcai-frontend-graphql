import * as React from 'react';
import { AUTH_TOKEN } from '@/utils/constants';

interface IPassProps  {
  link: App.Link
  index: number
}

class Link extends React.Component<IPassProps, {}> {

  public voteForLink = () => {
    console.log("vote");
  }

  public render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{this.props.index + 1}.</span>
          {authToken && (
            <div className="ml1 gray f11" onClick={() => this.voteForLink()}>
              ▲
            </div>
          )}
        </div>
        <div className="ml1">
          <div>
            {this.props.link.description} ({this.props.link.url})
          </div>
          <div className="f6 lh-copy gray">
            {this.props.link.votes.length} votes | by{' '}
            {this.props.link.postedBy
              ? this.props.link.postedBy.name
              : 'Unknown'}{' '}
          </div>
        </div>
      </div>
    )
  }
}

export default Link