import React, { createContext, useContext } from 'react';

// Create a context with no default and no undefined check
// https://www.carlrippon.com/react-context-with-typescript-p4/

function createCtx<T>(): readonly [() => T, React.Provider<T | undefined>] {
  const ctx = createContext<T | undefined>(undefined);

  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }

  return [useCtx, ctx.Provider] as const;
}

export default createCtx;
