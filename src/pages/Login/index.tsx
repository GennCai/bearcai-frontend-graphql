import * as React from 'react';
import { AUTH_TOKEN } from '@/utils/constants'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import history from '@/utils/history';


const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    createUser(name: $name, authProvider: {email: $email, password: $password}) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    signinUser(auth: {email: $email, password: $password}) {
      token
    }
  }
`

class Login extends React.Component {
  public state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  public onChange = (field: string) => (e: any) => {
    this.setState({[field]: e.target.value})
  }

  public onChangeLogin = (login: boolean) => () => {    
    this.setState({login})
  }

  public render() {
    const { login, email, password, name } = this.state
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={this.onChange('name')}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={this.onChange('email')}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={this.onChange('password')}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => this.confirm(data)}
          >
            {mutation => (
              <div className="pointer mr2 button" onClick={this.onSubmit(mutation)}>
                {login ? 'login' : 'create account'}
              </div>
            )}
          </Mutation>
          <div
            className="pointer button"
            onClick={this.onChangeLogin(!login)}
          >
            {login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </div>
    )
  }

  onSubmit = (mutation: any) => () => {
    mutation().then((res: any) => {
      console.log(res);
    }).catch((err: any) => {
      console.log(err);
      console.log(err.message);
    })
  }

  confirm = async (data: any) => {
    const { token } = this.state.login ? data.signinUser : data.createUser

    this.saveUserData(token)
    history.push('/home')
  }

  saveUserData = (token: string) => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login