import styles from "../../style/ui/FunButton.module.scss";

import localFont from "next/font/local";

const montrealBold = localFont({ src: "../../_assets/fonts/Montreal-Bold.ttf" });

interface FUN_BUTTON_PROPS {
  children: string;
  type: "button" | "submit" | "reset" | undefined;
}

export default function FunButton(props: FUN_BUTTON_PROPS) {
  const {
    children,
    type,
  } = props;

  return (
    <button type={type} className={styles.container}>
      <div className={styles.shadow}>
        <p className={montrealBold.className}>
          {children}
        </p>
      </div>
      <div className={styles.main}>
        <p className={montrealBold.className}>
          {children}
        </p>
      </div>
    </button>
  )
}
