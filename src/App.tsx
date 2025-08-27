import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';

import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button } from '@aws-amplify/ui-react';
Amplify.configure(config);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

interface AmplifyUser {
  attributes: {
    email?: string;
    [key: string]: any;
  };
  username?: string;
}

function App() {
  const customUser = user as AmplifyUser;
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <div className="header">
            <h1>{`Hello ${customUser?.attributes?.email ?? "unknown"}`}</h1>
            <Button onClick={signOut}>Sign out</Button>
          </div>
          <StorageBrowser />
        </>
      )}
    </Authenticator>
  );
}

export default App;
