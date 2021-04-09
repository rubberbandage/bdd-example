import React, {Fragment, useState} from "react";
import {Authenticated} from "../App";

type SignInProps = {
  setIsLoggedIn: (auth: Authenticated) => void;
}

const SignIn = ({ setIsLoggedIn }: SignInProps) => {
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

  return <Fragment>
    <label htmlFor="username">Username</label>
    <input
      id="username"
      data-automation-id='Login-Username'
      onInput={(event: React.FormEvent<HTMLInputElement>) => {
        setUsername((event.target as HTMLInputElement).value);
      }}
    />
    <label htmlFor="password">Password</label>
    <input
      id="password"
      data-automation-id='Login-Password'
      type='password'
      onInput={(event: React.FormEvent<HTMLInputElement>) => {
        setPassword((event.target as HTMLInputElement).value);
      }}
    />
    <button onClick={() => tryToLogIn()} data-automation-id='Button-Login'>Log In</button>
    <summary>{errorMessage}</summary>
  </Fragment>;
};

export default SignIn;
