import * as React from 'react';
import Link from './Link';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { client } from '@/index';

const FEED_QUERY = gql`
  {
    allLinks {
      id
      url
      description
    }
  }
`
/* const FEED_QUERY = gql`
  {
    
      feed{
        count
        links{
          id
          description
          url
          postedBy{
            id
            name
            email
          }
        }
      }
    
  }
` */

class LinkList extends React.Component<{}, {}> {

  public componentDidMount() {
    client.query({
      query: FEED_QUERY
    }).then(response => console.log(response.data))
  }

  public render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) { return <div>Fetching</div> }
          if (error) { return <div>Error</div> }
          
            const linksToRender = data.allLinks
          
          return (
              <div>
                {linksToRender.map((link: App.Link) => <Link key={link.id} link={link} />)}
              </div>
            )
          }
        }
      </Query>
    )
  }
}

export default LinkList