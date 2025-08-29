import localFont from "next/font/local";

import styles from "../../style/sections/About.module.scss";

const montrealBold = localFont({ src: "../../_assets/fonts/Montreal-Bold.ttf" });

export default function About() {
  return (
    <section className={styles.main}>
      <h1 className={montrealBold.className}>About me</h1>

      <section className={styles.articles}>
        <article>
          <p>I began my journey by studying Advertising at HELHa Mons, a path that gave me a perfect outlet for my creativity. During my final year, I completed two internships: first as an Art Director at Famous (Brussels), then as a Graphic Designer at JellyCube (Mons). These experiences strengthened my taste for aesthetics and taught me how to create impactful visuals and clean designs.</p>
          <p>After graduating, I worked as a Graphic Designer at Port’Ouverte (Tournai), a youth center, where I developed essential skills such as teamwork, autonomy, and adaptability.</p>
        </article>
        <article>
          <p>But I soon realized that creativity was not all there was about me. I was craving something that would also satisfy my logical and analytical side — that’s when I discovered the world of web development.</p>
          <p>I started with a three-month training at TechnoFutur TIC (Gosselies), where I learned programming basics: algorithms, databases, and object-oriented programming. I loved it! Combined with my HTML and CSS knowledge from my studies, it felt natural to add JavaScript to the picture.</p>
          <p>Confident in my choice, I pursued a six-month training at TechnoFutur TIC, focusing on web development and data analysis. That’s where I fell in love with React, experimented with SQL, and saw all the pieces fall into place.</p>
        </article>
        <article>
          <p>Soon after, I joined Mediawind (Nivelles) as a Web Developer. I developed React widgets, vanilla JavaScript and jQuery components, maintained and improved the internal CMS, and created showcase websites. My proudest achievement there was building a React tool that generates a complete ticketing flow from a single JSON file.</p>
          <p>This experience taught me invaluable lessons: collaborating with other developers and designers, understanding client needs, and producing clean, maintainable code.</p>
          <p>After Mediawind, I completed a FullStack Web training at TechnoFutur TIC, sharpening my skills with React, Angular, RESTful APIs, Node.js, Express, and NestJS.</p>
        </article>
        <article>
          <p>Today, I’m eager to keep growing as a developer, combining my creativity and logic, while collaborating with a team to craft engaging, dynamic, and interactive web experiences, where animations and interface details make the user experience memorable.</p>
        </article>
      </section>
    </section>
  );
}
