import { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "../UI/Modal";
import styles from "./EmailForm.module.css";
import PageButton from "../UI/PageButton";

const EmailForm = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const emailSentHandler = () => {
    setToggleModal(!toggleModal);
  };
  const modalClosedHandler = () => {
    setToggleModal(!toggleModal);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntdppmq",
        "template_iu2xx9g",
        e.target,
        "user_hjHCXW7T12O0P1p9J6zSn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(emailSentHandler())
      .then(document.getElementById("email-form").reset());
  }

  return (
    <div className={styles.Form} onSubmit={sendEmail}>
      {toggleModal && <Modal onClose={modalClosedHandler} />}

      <form id="email-form" className="contact-form">
        <div className={styles.InputField}>
          <label>Name:</label>
          <input type="text" name="from_name" />
        </div>
        <div className={styles.InputField}>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.InputField}>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <PageButton className={styles.SubmitButton}>
          <input className={styles.Submit} type="submit" value="Send" />
        </PageButton>
      </form>
    </div>
  );
};

export default EmailForm;
