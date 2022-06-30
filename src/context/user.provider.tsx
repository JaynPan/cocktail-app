import React, { useState, useMemo, ComponentType } from 'react';

import createCtx from './createCtx';
import { UserContextState } from './user.type';

export const [useUser, CtxProvider] = createCtx<UserContextState>();

const UserProvider: ComponentType = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const UserDataValue = useMemo(() => ({ isAuthenticated }), [isAuthenticated]);

  return (
    <CtxProvider
      value={{
        ...UserDataValue,
        setAuthenticated,
      }}
    >
      {children}
    </CtxProvider>
  );
};

export default UserProvider;
