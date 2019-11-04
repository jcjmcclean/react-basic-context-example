import * as React from "react";

const AuthContext = React.createContext({
  user: "bob",
  hasAuth: true
});

export default AuthContext;
