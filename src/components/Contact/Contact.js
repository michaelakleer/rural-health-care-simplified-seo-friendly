import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState("email");

  function displayEmail(event) {
    event.preventDefault();
    setForm("email");
  }

  function displayPhone(event) {
    event.preventDefault();
    setForm("phone");
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wsu775t",
        "template_rcigr5f",
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

  if (form === "email") {
    return (
      <div className="Contact">
        <div className="contactOne">
          <div className="contactContainer">
            <h1>Contact Form</h1>
            <Form onSubmit={sendEmail}>
              <div className="preferredMethod">
                <h3>Preferred method of contact:</h3>
                <Button className="formButton" onClick={displayEmail}>
                  Email
                </Button>
                <span>or</span>
                <Button className="formButton" onClick={displayPhone}>
                  Phone
                </Button>
              </div>
              <Form.Group>
                <Form.Label className="label">Enter your name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="contactBox"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="label">
                  Enter your email address:
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  name="method"
                  className="contactBox"
                />
              </Form.Group>
              <Form.Label className="label">Write message here:</Form.Label>
              <textarea
                className="form-control message"
                id=""
                cols="30"
                rows="5"
                name="message"
              ></textarea>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Contact">
        <div className="contactOne">
          <div className="contactContainer">
            <h1>Contact Form</h1>
            <Form onSubmit={sendEmail}>
              <div className="preferredMethod">
                <h3>Preferred method of contact:</h3>
                <Button className="formButton" onClick={displayEmail}>
                  Email
                </Button>
                <span>or</span>
                <Button className="formButton" onClick={displayPhone}>
                  Phone
                </Button>
              </div>
              <Form.Group>
                <Form.Label className="label">Enter your name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="contactBox"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="label">
                  Enter your phone number:
                </Form.Label>
                <Form.Control
                  type="tel"
                  className="contactBox"
                  placeholder="123-456-7890"
                  name="method"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
                <Form.Text className="text-muted">
                  Format: 123-456-7890
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="label">Write message here:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="contactBoxSpecial"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
