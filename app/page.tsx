import styles from "./page.module.scss";

import ContactScreen from "./components/ContactScreen";
import Screen from "./components/Screen";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import FunButton from "./components/ui/FunButton";
import Parallax from "./components/ui/Parallax";
import RotatingText from "./components/ui/RotatingText";

export default function Home() {
  return (
    <main className={styles.main}>
      <Screen color="#e4cb3d">
        <h1>Hi</h1>
        <h2>I&apos;m Noémie, a <RotatingText>React web developer</RotatingText> with a taste for CSS animations</h2>
        <p>I give life to your design ideas and interfaces with creative effects and transitions, while keeping accessibility and performance in mind.</p>
        <FunButton type="button">Download my CV here</FunButton>
      </Screen>

      <About />

      <Skills />

      <Parallax imageSrc="/images/placeholder_parallax.jpg" />

      <ContactScreen />
    </main>
  );
}
