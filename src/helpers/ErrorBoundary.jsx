// tb updated
/* 
import React from 'react';
import {
  ErrorBoundary,
  FallbackProps,
  useErrorBoundary,
} from 'react-error-boundary';

export function AppFetchingError(props: FallbackProps) {
  const { error, resetErrorBoundary } = props;

  console.log(ErrorBoundary);
  console.log(useErrorBoundary);

  return (
    <div>
      <h1>error ¡boundary!</h1>
      <p>{error.message}</p>
      <button type="button" onClick={resetErrorBoundary}>
        Reload page
      </button>
    </div>
  );
}
 */

// can be used in any Comp:
// import { useEffect } from 'react';
// import { useErrorBoundary } from 'react-error-boundary';

// const { showBoundary } = useErrorBoundary();
// useEffect(() => {
// try { } catch (err) {
//   showBoundary(err);
//   };
// },[]);
