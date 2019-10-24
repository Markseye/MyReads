import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = ({ location }) => (
  <div>
    <h2>No match found for <code>{location.pathname}</code></h2>
    <center><Link to="/">Return to Home Page</Link></center>
  </div>
);

export default Page404;