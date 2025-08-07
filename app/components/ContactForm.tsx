"use client"

import { ChangeEvent, SyntheticEvent, useState } from "react";
import styles from "../style/ContactForm.module.scss";

export default function ContactForm() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function resetForm() {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  }

  function formSubmitHandler(e: SyntheticEvent) {
    e.preventDefault();

    const form = {
      firstname,
      lastname,
      email,
      message
    };

    console.log(form);
    resetForm();
  }

  function valueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.id) {
      case "firstname":
        setFirstname(e.target.value);
        break;
      case "lastname":
        setLastname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        break;
    }
  }

  function messageValueChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <section>
            <article>
              <label htmlFor="firstname">Firstname :</label>
              <input type="text" id="firstname" required value={firstname} onChange={valueChangeHandler} />
            </article>
            <article>
              <label htmlFor="lastname">Lastname :</label>
              <input type="text" id="lastname" required value={lastname} onChange={valueChangeHandler} />
            </article>
          </section>
          <section>
            <article>
              <label htmlFor="email">Email :</label>
              <input type="email" name="email" id="email" required value={email} onChange={valueChangeHandler} />
            </article>
          </section>
          <section>
            <article>
              <label htmlFor="message">Message :</label>
              <textarea name="message" id="message" rows={5} required value={message} onChange={messageValueChangeHandler}></textarea>
            </article>
          </section>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
