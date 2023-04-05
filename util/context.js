import * as React from 'react';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export const SignedInContext = React.createContext({signedIn:Boolean,signIn:()=>{}});
