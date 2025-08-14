import { ReactNode } from "react";

import styles from "../style/Screen.module.scss";

interface SCREEN_PROPS {
  children: ReactNode | ReactNode[]
  color: string;
}

export default function Screen(props: SCREEN_PROPS) {
  const {
    children,
    color,
  } = props;

  return (
    <article className={styles.main}
      style={{ backgroundColor: color, }}
    >
      {children}
    </article>
  );
}
