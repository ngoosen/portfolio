import styles from "./page.module.scss";

import ContactScreen from "./components/ContactScreen";
import Screen from "./components/Screen";
import Parallax from "./components/ui/Parallax";
import RotatingText from "./components/ui/RotatingText";

export default function Home() {
  return (
    <main className={styles.main}>
      <Screen color="#e4cb3d">
        <h1>Tiiiiiiiitre</h1>
      </Screen>
      <Screen color="#e69438">
        <h1>Tiiiiiiiitre</h1>
        <RotatingText>Test</RotatingText>
        <RotatingText>Short test phrase</RotatingText>
        <RotatingText>Way way longer test phrase</RotatingText>
      </Screen>
      <Parallax imageSrc="/images/placeholder_parallax.jpg" />
      <Screen color="#ac2525">
        <h1>Tiiiiiiiitre</h1>
      </Screen>
      <ContactScreen />
    </main>
  );
}
