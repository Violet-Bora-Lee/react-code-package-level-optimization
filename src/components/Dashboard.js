import React, { useState } from 'react';

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Dashboard;
