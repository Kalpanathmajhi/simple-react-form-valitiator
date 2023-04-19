import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameError("Please enter your name");
      return;
    } else {
      setNameError("");
    }

    console.log(`Name: ${name}\nEmail: ${email}`);

  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.trim() === "") {
      setNameError("Please enter your name");
    } else {
      setNameError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      {nameError && <div style={{color: "red"}}>{nameError}</div>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
