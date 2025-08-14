"use client";

import { useEffect, useState } from "react";

import styles from "../../style/ui/RotatingText.module.scss";

interface ROTATING_TEXT_PROPS {
  children: string;
}

export default function RotatingText(props: ROTATING_TEXT_PROPS) {
  const {
    children,
  } = props;

  const [splitChildren, setSplitChildren] = useState<string[]>([]);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    setSplitChildren(children.split(""));
  }, [children]);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p className={styles.main}>
        {splitChildren.map((child, index) => (
          <span
            key={`rotating_text_main_${index}`}
            className={isHover ? styles.animation_forwards : styles.animation_backwards}
            style={{
              animationDelay: `${(isHover ? index : splitChildren.length - index) * .04}s`,
            }}
          >
            {child}
          </span>
        ))}
      </p>
      <p className={styles.copy}>
        {splitChildren.map((child, index) => (
          <span
            key={`rotating_text_copy_${index}`}
            className={isHover ? styles.animation_forwards : styles.animation_backwards}
            style={{
              animationDelay: `${(isHover ? index : splitChildren.length - index) * .04}s`,
            }}
          >
            {child}
          </span>
        ))}
      </p>
    </div>
  );
}
