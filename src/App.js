import { useCallback } from 'react';
import { useState } from 'react';

import {LoginSocialGoogle,LoginSocialGithub} from 'reactjs-social-login'

// CUSTOMIZE ANY UI BUTTON
import {GoogleLoginButton,
  GithubLoginButton} from 'react-social-login-buttons'

const REDIRECT_URI = window.location.href;

function App() {

  const [provider, setProvider] = useState()
  const [profile, setProfile] = useState()

  console.log("redirect-uri=",REDIRECT_URI);

  const onLoginStart = useCallback(() => {
    // alert('login start')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    // alert('logout success')
  }, [])

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <LoginSocialGoogle
            // isOnlyGetToken
            client_id='1035872140379-7217srodg8hr040vbqf6gh3km004pl75.apps.googleusercontent.com'
            redirect_uri="http://localhost:3000/home"
            scope="profile"
            onLoginStart={onLoginStart}
            onResolve={({provider, data}) => {
              setProvider(provider)
              console.log(provider);
              console.log(data);
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GoogleLoginButton  />

          </LoginSocialGoogle>
          <LoginSocialGithub
            // isOnlyGetToken
            client_id='Ov23lildMlmN82ya6bKx'
            client_secret='ff25bd2668501f3642a5476615584b4ad15ac093'
            redirect_uri='http://localhost:3000'
            // scope='user:email'
            // onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
              console.log(data);
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GithubLoginButton />
          </LoginSocialGithub>
    </div>
  );
}

export default App;
