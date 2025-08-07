import styles from "../style/ContactScreen.module.scss";

import ContactForm from "./ContactForm";

export default function ContactScreen() {
  return (
    <article className={styles.main}>
      <section className={styles.title}>
      </section>

      <section className={styles.contact_form_frame}>
        <ContactForm />
      </section>
    </article>
  );
}
