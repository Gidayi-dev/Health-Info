import React from 'react';
import RegisterClient from './components/RegisterClient';
import EnrollClient from './components/EnrollClient';
import ViewClientProfile from './components/ViewClientProfile';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>
        Health Information System
      </h1>

      <div style={{ marginBottom: '50px' }}>
        <RegisterClient />
      </div>

      <div style={{ marginBottom: '50px' }}>
        <EnrollClient />
      </div>

      <div style={{ marginBottom: '50px' }}>
        <ViewClientProfile />
      </div>
    </div>
  );
}

export default App;