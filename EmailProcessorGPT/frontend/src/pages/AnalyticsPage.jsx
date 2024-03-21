import React, { lazy, Suspense, useState, useEffect } from 'react';
// Lazy load the AnalyticsChart component
const AnalyticsChart = lazy(() => import('../components/AnalyticsChart'));

const fetchData = () => {
  // Simulate fetching data
  return new Promise((resolve) => {
    setTimeout(() => resolve({ templatesUsed: 100, activeUsers: 50 }), 1000);
  });
};

const AnalyticsPage = () => {
  const [data, setData] = useState({ templatesUsed: 0, activeUsers: 0 });

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <Suspense fallback={<div>Loading Chart...</div>}>
        <AnalyticsChart data={data} />
      </Suspense>
    </div>
  );
};

export default AnalyticsPage;