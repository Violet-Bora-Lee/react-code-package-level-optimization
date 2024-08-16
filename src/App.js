// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PreFetchLink from './components/PreFetchLink';

const Home = lazy(() => import(/* webpackPrefetch: true */ './components/Home'));
const Dashboard = lazy(() => import(/* webpackPrefetch: true */ './components/Dashboard'));
const Profile = lazy(() => import('./components/Profile'));
const Settings = lazy(() => import('./components/Settings'));
const AdvancedFeatures = lazy(() => import('./components/AdvancedFeatures'));


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <PreFetchLink
                to="/"
                prefetch={() => import('./components/Home')}>
                Home
              </PreFetchLink>
            </li>
            <li>
              <PreFetchLink
                to="/dashboard"
                prefetch={() => import('./components/Dashboard')}>
                Dashboard
              </PreFetchLink>
            </li>
            <li>
              <PreFetchLink
                to="/profile"
                prefetch={() => import('./components/Profile')}>
                Profile
              </PreFetchLink>
            </li>
            <li>
              <PreFetchLink
                to="/settings"
                prefetch={() => import('./components/Settings')}>
                Settings
              </PreFetchLink>
            </li>
            <li>
              <PreFetchLink
                to="/advanced" p
                refetch={() => import('./components/AdvancedFeatures')}>
                Advanced Features
              </PreFetchLink>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/advanced" element={<AdvancedFeatures />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
