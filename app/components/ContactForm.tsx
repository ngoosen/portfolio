"use client"

import localFont from "next/font/local";
import { ChangeEvent, SyntheticEvent, useState } from "react";

import styles from "../style/ContactForm.module.scss";

import FunButton from "./ui/FunButton";

const montrealBold = localFont({ src: "../_assets/fonts/Montreal-Bold.ttf" });

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
              <input type="text" id="firstname" required value={firstname} onChange={valueChangeHandler} maxLength={35} />
              <label htmlFor="firstname" className={montrealBold.className}>Firstname :</label>
            </article>
            <article>
              <input type="text" id="lastname" required value={lastname} onChange={valueChangeHandler} maxLength={35} />
              <label htmlFor="lastname" className={montrealBold.className}>Lastname :</label>
            </article>
          </section>
          <section>
            <article>
              <input type="email" name="email" id="email" required value={email} onChange={valueChangeHandler} maxLength={254} />
              <label htmlFor="email" className={montrealBold.className}>Email :</label>
            </article>
          </section>
          <section>
            <article>
              <textarea name="message" id="message" rows={8} required value={message} onChange={messageValueChangeHandler}></textarea>
              <label htmlFor="message" className={montrealBold.className}>Message :</label>
            </article>
          </section>

          <section>
            <article>
              <FunButton type="submit">Send</FunButton>
            </article>
          </section>
        </form>
      </div>
    </div>
  );
}
