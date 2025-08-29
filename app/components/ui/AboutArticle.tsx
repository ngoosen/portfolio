"use client";

import { ReactNode, useEffect, useRef } from "react";

import styles from "../../style/ui/AboutArticle.module.scss";

interface ABOUT_ARTICLE_PROPS {
  children: ReactNode | ReactNode[];
}

export default function AboutArticle({ children }: ABOUT_ARTICLE_PROPS) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (ref.current && !ref.current.classList.contains(styles.twist_animation) && entry.isIntersecting) {
        ref.current.classList.add(styles.twist_animation);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <article ref={ref} className={styles.main}>
      {children}
    </article>
  );
}
