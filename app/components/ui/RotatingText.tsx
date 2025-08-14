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
  const [delayCount, setDelayCount] = useState<number>(0);

  useEffect(() => {
    setSplitChildren(children.split(""));
  }, [children]);

  useEffect(() => {
    const delay = setInterval(() => {
      if (isHover) {
        setDelayCount(latest => {
          if (latest === splitChildren.length) {
            clearInterval(delay);
            return latest;
          } else {
            return latest + 1;
          }
        });
      } else {
        setDelayCount(latest => {
          if (latest === 0) {
            clearInterval(delay);
            return 0;
          } else {
            return latest - 1;
          }
        });
      }
    }, 10);

    return () => {
      clearInterval(delay);
    }
  }, [isHover, splitChildren]);

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
            style={{ top: index < delayCount ? "-33px" : "0", }}
          >
            {child}
          </span>
        ))}
      </p>
      <p className={styles.copy}>
        {splitChildren.map((child, index) => (
          <span
            key={`rotating_text_copy_${index}`}
            style={{ top: index < delayCount ? "-33px" : "0", }}
          >
            {child}
          </span>
        ))}
      </p>
    </div>
  );
}
