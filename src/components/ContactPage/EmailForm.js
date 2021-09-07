import emailjs from "emailjs-com";
import styles from "./EmailForm.module.css";
import PageButton from "../UI/PageButton";

const EmailForm = () => {
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
      );
  }

  return (
    <div className={styles.Form}>
      <form className="contact-form">
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
        <PageButton className={styles.SubmitButton} onClick={sendEmail}>
          Send Email
        </PageButton>
      </form>
    </div>
  );
};

export default EmailForm;
