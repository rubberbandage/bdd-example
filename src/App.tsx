import React, {FunctionComponent, useState} from 'react';
import './App.css';
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import SignIn from "./components/SignIn";

export type Authenticated = {
  name: string
}

const App: FunctionComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Authenticated | undefined>(undefined);

  return (
    <div className="App">
      <header className="App-header">
        {
          isLoggedIn
            ? <Profile {...isLoggedIn}/>
            : <SignIn setIsLoggedIn={setIsLoggedIn} />
        }
      </header>
      <section className="App-section">
        <Counter />
      </section>
    </div>
  );
}

export default App;
