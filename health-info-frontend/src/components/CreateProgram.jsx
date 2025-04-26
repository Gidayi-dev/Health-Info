import React, { useState } from "react";
import Swal from "sweetalert2";

const CreateProgram = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/programs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire("Success!", "Program created successfully!", "success");
      setFormData({ name: "", description: "" });
    } else {
      Swal.fire("Error", "Failed to create program.", "error");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Create Program</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Program Name"
          style={inputStyle}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
          style={{ ...inputStyle, height: "100px" }}
        />
        <button type="submit" style={buttonStyle}>
          Create Program
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
  backgroundColor: "#28a745",
  color: "#fff",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default CreateProgram;
