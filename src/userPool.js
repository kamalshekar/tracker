import { CognitoUserPool } from "amazon-cognito-identity-js";
const userPool = new CognitoUserPool({
  UserPoolId: "us-east-2_F4SRmE4RG",
  region: "us-east-2",
  ClientId: "185hqs72lihdm5kfbafht6hbqp",
  Storage: window.localStorage
});

// const userPool = 9;

export default userPool;
