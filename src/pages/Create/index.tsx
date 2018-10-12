import * as React from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

interface IState {
  description: string
  url: string
}

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    createLink(description: $description, url: $url) {
      url
      description
    }
  }
`

class CreateList extends React.Component<{}, IState> {
  public state: IState = {
    description: '',
    url: '',
  }

  public onDescriptionChange = (e: any) => {
    this.setState({ description: e.target.value })
  }

  public onUrlChange = (e: any) => {
    this.setState({ url: e.target.value })
  }

  public onSubmit = (postMutation: any) => () => {
    postMutation().then((res: any) => {
      console.log(res);
    }).catch((err: any) => {
      console.error(err);
      console.error(err.message);
    })
  }

  public render() {    
    const { description, url } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={this.onDescriptionChange}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={this.onUrlChange}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
          {(postMutation) => (
            <button onClick={this.onSubmit(postMutation)}>
              Submit
            </button>
          )}
        </Mutation>
      </div>
    )
  }
}

export default CreateList;
