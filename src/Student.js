import React from "react";
import axios from "axios";
import { useState } from "react";

function Student() {
  const [Name, setName] = useState("");
  const [RollNo, setRollNo] = useState("");
  const [Age, setAge] = useState("");
  const [Place, setPlace] = useState("");
  const [Email, setEmail] = useState("");

  async function handleSubmit() {
    try {
      const response = await axios.post("http://localhost:3000/student/postStudent", {
        Name,
        RollNo,
        Age,
        Place,
        Email,
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="rollno">Roll No</label>
      <input
        id="rollno"
        type="number"
        value={RollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        value={Age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label htmlFor="place">Place</label>
      <input
        id="place"
        type="text"
        value={Place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Student;
