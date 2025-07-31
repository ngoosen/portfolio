import styles from "./page.module.scss";

import Screen from "./components/Screen";

export default function Home() {
  return (
    <main className={styles.main}>
      <Screen color="#e4cb3d">
        <h1>Tiiiiiiiitre</h1>
      </Screen>
      <Screen color="#e69438">
        <h1>Tiiiiiiiitre</h1>
      </Screen>
      <Screen color="#ac2525">
        <h1>Tiiiiiiiitre</h1>
      </Screen>
    </main>
  );
}
