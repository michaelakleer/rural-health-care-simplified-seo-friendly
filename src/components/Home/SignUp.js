import React from "react";
import emailjs from "emailjs-com";
import { Button, Form } from "react-bootstrap";
import "./SignUp.css";

export default function SignUp() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wsu775t",
        "template_mlsvsux",
        e.target,
        "user_LClpG1a6YIZ5wnoRtIr41"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="SignUp">
      <Form onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label className="signupLabel">Enter your name:</Form.Label>
          <Form.Control type="text" placeholder="Your name" name="name" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="signupLabel">
            Enter you email address:
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />
        </Form.Group>
        <Button variant="light" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
