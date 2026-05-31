import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const RouteErrorPage = () => {
  const error = useRouteError();

  let title = 'Something went wrong';
  let message = 'Please try again.';

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? 'Page not found' : 'Request failed';
    message = error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <div className="max-w-lg w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7209b7]">Error</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mt-4 text-slate-600">{message}</p>
      </div>
    </div>
  );
};

export default RouteErrorPage;