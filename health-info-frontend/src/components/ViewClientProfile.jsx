import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ViewClientProfile = () => {
  const [clientId, setClientId] = useState('');
  const [clientData, setClientData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:4000/api/clients/${clientId}`);
    if (response.ok) {
      const data = await response.json();
      setClientData(data);
    } else {
      Swal.fire('Error', 'Failed to fetch client data.', 'error');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>View Client Profile</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input value={clientId} onChange={(e) => setClientId(e.target.value)} placeholder="Client ID" style={inputStyle} />
        <button type="submit" style={buttonStyle}>View Profile</button>
      </form>

      {clientData && (
        <div style={{ marginTop: '30px' }}>
          <h3><strong>Name:</strong> {clientData.first_name} {clientData.last_name}</h3>
          <p><strong>Email:</strong> {clientData.email}</p>
          <p><strong>Phone:</strong> {clientData.phone}</p>
          <h4 style={{ marginTop: '20px' }}>Enrolled Programs:</h4>
          <ul>
            {clientData.programs.map((program) => (
              <li key={program.id}>{program.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const containerStyle = { maxWidth: '500px', margin: '50px auto', padding: '20px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', borderRadius: '10px' };
const titleStyle = { textAlign: 'center', marginBottom: '20px' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #ccc' };
const buttonStyle = { backgroundColor: '#6f42c1', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' };

export default ViewClientProfile;
