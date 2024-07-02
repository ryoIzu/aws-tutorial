import logo from './logo.svg';
import './App.css';
import {Amplify} from "aws-amplify";
import {Button, withAuthenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({signOut, user}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>HEllO AWS</h2>
        {user ? (
          <>
            <h3>私は権限を持っています: {user.username}</h3>
            <Button onClick={signOut}>サインアウト</Button>
          </>
        ):(
          <>
          <h3>私には権限がありません。</h3>
          </>
        )}
      </header>
    </div>
  );
}

export default withAuthenticator(App);
