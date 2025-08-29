import styles from "./page.module.scss";

import ContactScreen from "./components/ContactScreen";
import Screen from "./components/Screen";
import About from "./components/sections/About";
import FunButton from "./components/ui/FunButton";
import Parallax from "./components/ui/Parallax";
import RotatingText from "./components/ui/RotatingText";

export default function Home() {
  return (
    <main className={styles.main}>
      <Screen color="#e4cb3d">
        <h1>Hi</h1>
        <h2>I&apos;m Noémie, a <RotatingText>React web developer</RotatingText> with a taste for CSS animations</h2>
        <p>I give life to your design ideas and interfaces with creative effects and transitions, while keeping accessibility and performance in mind.</p>
        <FunButton type="button">Download my CV here</FunButton>
      </Screen>

      <About />

      <Parallax imageSrc="/images/placeholder_parallax.jpg" />
      <Screen color="#ac2525">
        <h1>Skills</h1>

        <section>
          <h2>Front-end</h2>
          <ul>
            <li>HTML</li>
            <li>CSS & Sass/SCSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Anuglar</li>
            <li>Next.js</li>
            <li>CSS animations / transitions / keyframes</li>
            <li>Tailwind CSS & Bootstrap</li>
            <li>Responsive design</li>
          </ul>
        </section>

        <section>
          <h2>Back-end</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>NestJS</li>
            <li>PHP</li>
            <li>RESTful API</li>
            <li>JSON & XML</li>
          </ul>
        </section>

        <section>
          <h2>Databases</h2>
          <ul>
            <li>MySQL</li>
            <li>SQL Server / SSMS</li>
            <li>Data modeling</li>
          </ul>
        </section>

        <section>
          <h2>Design</h2>
          <ul>
            <li>Graphic design</li>
            <li>Illustration</li>
            <li>Video editing</li>
          </ul>
        </section>

        <section>
          <h2>Tools & methodologies</h2>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>CI/CD</li>
            <li>Adobe XD</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>Windows</li>
            <li>Linux</li>
          </ul>
        </section>

        <section>
          <h2>Soft skills</h2>
          <ul>
            <li>Creativity</li>
            <li>Problem-solving</li>
            <li>Curiosity</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Autonomy</li>
          </ul>
        </section>
      </Screen>
      <ContactScreen />
    </main>
  );
}
