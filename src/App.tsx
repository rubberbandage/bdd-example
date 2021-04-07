import React, {Fragment, useState} from 'react';
import './App.css';
import Profile from "./Profile";
import {Counter} from "./Counter";

type Authenticated = {
  name: string
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Authenticated | undefined>(undefined);

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const tryToLogIn = () => {
    if (username === 'kitty@flanagan' && password === 'cats') {
      setIsLoggedIn({name: 'CrazyKatOwner'});
    } else {
      setErrorMessage('Bad Kitty')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          isLoggedIn ? <Profile {...isLoggedIn}/> :
            <Fragment>
              <input
                data-automation-id='Login-Username'
                onInput={(event: React.FormEvent<HTMLInputElement>) => {
                  setUsername((event.target as HTMLInputElement).value);
                }}
              />
              <input
                data-automation-id='Login-Password'
                type='password'
                onInput={(event: React.FormEvent<HTMLInputElement>) => {
                  setPassword((event.target as HTMLInputElement).value);
                }}
              />
              <button onClick={() => tryToLogIn()} data-automation-id='Button-Login'>Log In</button>
              <summary>{errorMessage}</summary>
            </Fragment>
        }
      </header>
      <section className="App-section">
        <Counter />
      </section>
    </div>
  );
}

export default App;
