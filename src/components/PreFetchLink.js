// components/PreFetchLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const PreFetchLink = ({ to, children, prefetch }) => {
  const prefetchComponent = () => {
    if (prefetch) {
      prefetch();
    }
  };

  return (
    <Link to={to} onMouseEnter={prefetchComponent} onFocus={prefetchComponent}>
      {children}
    </Link>
  );
};

export default PreFetchLink;