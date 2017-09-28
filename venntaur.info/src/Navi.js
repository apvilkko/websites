import React from 'react';
import {NavLink} from 'react-router-dom';
import PAGES from './pages';
import prefix from './prefix';

export default () => (
  <ul className="navi">
    {PAGES.map(page => (
      <li key={page.url}>
        <NavLink to={prefix(page.url)}>{page.label}</NavLink>
      </li>
    ))}
  </ul>
);
