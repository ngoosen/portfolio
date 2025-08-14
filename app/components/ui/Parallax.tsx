import { ReactNode } from "react";
import styles from "../../style/ui/Parallax.module.scss";

interface PARALLAX_PROPS {
  imageSrc: string;
  children?: ReactNode | ReactNode[];
}

export default function Parallax(props: PARALLAX_PROPS) {
  const {
    imageSrc,
    children,
  } = props;

  return (
    <section className={styles.main} style={{ backgroundImage: `url("${imageSrc}")`, }}>
      {children && (
        <article>
          {children}
        </article>
      )}
    </section>
  );
}
