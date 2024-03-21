import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingComponent from './components/LoadingComponent'; // Ensure this path is correct

// Lazy-loaded components
const HomePage = lazy(() => import('./pages/HomePage'));
const EmailListPage = lazy(() => import('./pages/EmailListPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const TemplatesPage = lazy(() => import('./pages/TemplatesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage')); 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<LoadingComponent />}> {/* Use the improved LoadingComponent */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/emails" element={<EmailListPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for undefined paths */}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
