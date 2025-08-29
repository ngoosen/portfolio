import localFont from "next/font/local";

import styles from "../../style/sections/Skills.module.scss";

const montrealBold = localFont({ src: "../../_assets/fonts/Montreal-Bold.ttf" });

export default function Skills() {
  return (
    <section className={styles.main}>
      <h1 className={montrealBold.className}>Skills</h1>

      <section className={styles.articles}>
        <article>
          <h2>Front-end</h2>
          <ul>
            <li>HTML</li>
            <li>CSS & Sass/SCSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>Next.js</li>
            <li>Tailwind CSS & Bootstrap</li>
            <li>Responsive design</li>
            <li>CSS animations / transitions / keyframes</li>
          </ul>
        </article>
        <article>
          <h2>Back-end</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>NestJS</li>
            <li>PHP</li>
            <li>RESTful API</li>
            <li>JSON & XML</li>
          </ul>
        </article>
        <article>
          <h2>Databases</h2>
          <ul>
            <li>MySQL</li>
            <li>SQL Server / SSMS</li>
            <li>Data modeling</li>
          </ul>
        </article>
      </section>

      <section className={styles.articles}>
        <article>
          <h2>Design</h2>
          <ul>
            <li>Graphic design</li>
            <li>Illustration</li>
            <li>Video editing</li>
            <li>Adobe XD</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </article>
        <article>
          <h2>Tools & methodologies</h2>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>CI/CD</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>Windows</li>
            <li>Linux</li>
          </ul>
        </article>
        <article>
          <h2>Soft skills</h2>
          <ul>
            <li>Creativity</li>
            <li>Problem-solving</li>
            <li>Curiosity</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Autonomy</li>
          </ul>
        </article>
      </section>
    </section>
  );
}
