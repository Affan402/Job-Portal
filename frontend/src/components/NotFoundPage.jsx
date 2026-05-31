import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <div className="max-w-lg w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7209b7]">404</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you’re looking for does not exist.</p>
        <Link
          to="/"
          className="inline-flex mt-6 items-center justify-center rounded-lg bg-[#7209b7] px-5 py-2.5 text-white hover:bg-[#5a0790]"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;