import styles from "./page.module.scss";

import ContactScreen from "./components/ContactScreen";
import Screen from "./components/Screen";
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
      <Screen color="#e69438">
        <h1>About me</h1>

        <p>I began my journey by studying Advertising at HELHa Mons, a path that gave me a perfect outlet for my creativity. During my final year, I completed two internships: first as an Art Director at Famous (Brussels), then as a Graphic Designer at JellyCube (Mons). These experiences strengthened my taste for aesthetics and taught me how to create impactful visuals and clean designs.</p>

        <p>After graduating, I worked as a Graphic Designer at Port’Ouverte (Tournai), a youth center, where I developed essential skills such as teamwork, autonomy, and adaptability.</p>

        <p>But I soon realized that creativity was not all there was about me. I was craving something that would also satisfy my logical and analytical side — that’s when I discovered the world of web development.</p>

        <p>I started with a three-month training at TechnoFutur TIC (Gosselies), where I learned programming basics: algorithms, databases, and object-oriented programming. I loved it! Combined with my HTML and CSS knowledge from my studies, it felt natural to add JavaScript to the picture.</p>

        <p>Confident in my choice, I pursued a six-month training at TechnoFutur TIC, focusing on web development and data analysis. That’s where I fell in love with React, experimented with SQL, and saw all the pieces fall into place.</p>

        <p>Soon after, I joined Mediawind (Nivelles) as a Web Developer. I developed React widgets, vanilla JavaScript and jQuery components, maintained and improved the internal CMS, and created showcase websites. My proudest achievement there was building a React tool that generates a complete ticketing flow from a single JSON file.</p>

        <p>This experience taught me invaluable lessons: collaborating with other developers and designers, understanding client needs, and producing clean, maintainable code.</p>

        <p>After Mediawind, I completed a FullStack Web training at TechnoFutur TIC, sharpening my skills with React, Angular, RESTful APIs, Node.js, Express, and NestJS.</p>

        <p>Today, I’m eager to keep growing as a developer, combining my creativity and logic, while collaborating with a team to craft engaging, dynamic, and interactive web experiences, where animations and interface details make the user experience memorable.</p>
      </Screen>
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
