import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  groups: ['admin'], 
  userAttributes: {
    // Maps to Cognito standard attribute 'preferred_username'
    preferredUsername: {
      mutable: false,
      required: true
    },
    // Maps to Cognito standard attribute 'given_name'
    givenName: {
      mutable: false,
      required: true,
    },
  }
});

interface AmplifyUser {
  attributes: {
    preferred_username?: string;
    [key: string]: any;
  };
  username?: string;
}

const customUser = user as AmplifyUser;
console.log(customUser.attributes.preferred_username);

