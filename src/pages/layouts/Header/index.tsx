import * as React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '@/utils/constants';
import history from '@/utils/history';

class Header extends React.Component {
  public render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Hacker News</div>
          <Link to="/home" className="ml1 no-underline black">
            new
          </Link>
          {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
              submit
            </Link>
          </div>
          )}  
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                history.push(`/login`)
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header as React.ComponentType<any>)