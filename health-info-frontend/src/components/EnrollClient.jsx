import React, { useState } from "react";
import Swal from "sweetalert2";

const EnrollClient = () => {
  const [clientId, setClientId] = useState("");
  const [programId, setProgramId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/enrollments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, program_id: programId }),
    });

    if (response.ok) {
      Swal.fire("Success!", "Client enrolled successfully!", "success");
      setClientId("");
      setProgramId("");
    } else {
      Swal.fire("Error", "Failed to enroll client.", "error");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Enroll Client in Program</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          placeholder="Client ID"
          style={inputStyle}
        />
        <input
          value={programId}
          onChange={(e) => setProgramId(e.target.value)}
          placeholder="Program ID"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Enroll Client
        </button>
      </form>
    </div>
  );
};

const containerStyle = {
  maxWidth: "500px",
  margin: "50px auto",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  borderRadius: "10px",
};
const titleStyle = { textAlign: "center", marginBottom: "20px" };
const formStyle = { display: "flex", flexDirection: "column", gap: "15px" };
const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
const buttonStyle = {
  backgroundColor: "#ffc107",
  color: "#000",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default EnrollClient;
