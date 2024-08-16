import React, { useState, Suspense, lazy } from 'react';

const DataVisualization = lazy(() => import('./advanced/DataVisualization'));
const MachineLearning = lazy(() => import('./advanced/MachineLearning'));

function AdvancedFeatures() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div>
      <h2>Advanced Features</h2>
      <button onClick={() => setActiveFeature('dataViz')}>Data Visualization</button>
      <button onClick={() => setActiveFeature('ml')}>Machine Learning</button>

      <Suspense fallback={<div>Loading feature...</div>}>
        {activeFeature === 'dataViz' && <DataVisualization />}
        {activeFeature === 'ml' && <MachineLearning />}
      </Suspense>
    </div>
  );
}

export default AdvancedFeatures;