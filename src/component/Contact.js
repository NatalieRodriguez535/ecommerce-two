import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    pnumber: "",
    email1: "",
    comment: "",
  });

  const handleSubmit = (event) => {
    console.log(form);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
  return (
    <main className="form-text">
      <form className="form-container" onSubmit={handleSubmit}>
        {/*  the form element is a container for different types of input elements   */}
        <label for="fname">First name:</label>
        {/* <input> element is the most used form element.An <input> element can be displayed in many ways, depending on the type attribute */}
        <input
          onChange={handleChange}
          type="text"
          id="fname"
          value={form.fname}
          name="fname"
          placeholder="Exp. Natalie"
          required
        />

        {/* <input type="text">Displays a single-line text input field */}
        <label for="lname">Last name:</label>
        {/* The <label> tag defines a label for many form elements. */}
        <input
          onChange={handleChange}
          type="text"
          id="lname"
          value={form.lname}
          name="lname"
          placeholder="Exp. Rodriguez"
          required
        />

        <label for="pnumber">Phone number:</label>
        <input
          onChange={handleChange}
          type="text"
          id="pnumber"
          value={form.pnumber}
          name="pnumber"
          placeholder="Exp. 803-554-1234 "
          required
        />

        <label for="email1">Email:</label>
        <input
          onChange={handleChange}
          type="text"
          id="email1"
          value={form.email1}
          name="email1"
          placeholder="Exp. Plant.Grow.123@gmail.com"
          required
        />

        <label for="comment">Comments:</label>
        <input
          onChange={handleChange}
          type="text"
          id="comment"
          value={form.comment}
          name="comment"
          placeholder="Write Us Here!"
          required
        />

        {/* Sumbmit button but doesnt go anywhere*/}
        <input
          onChange={handleChange}
          className="input-button"
          type="submit"
          value="Submit"
          disabled={
            !form.comment ||
            !form.fname ||
            !form.lname ||
            !form.email1 ||
            !form.pnumber
          }
        />
      </form>
    </main>
  );
}
