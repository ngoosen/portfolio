import localFont from 'next/font/local';
import styles from "../style/Footer.module.scss";

const montrealBold = localFont({ src: "../_assets/fonts/Montreal-Bold.ttf" });

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section></section>
      <section className={styles.title}>
        <h1 className={montrealBold.className}>
          <span>Noémie</span>
          <span>Goosen</span>
        </h1>
      </section>
    </footer>
  )
}
