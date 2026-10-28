
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const projects = [
  {
    number: "01",
    title: "Customer Segmentation",
    category: "MACHINE LEARNING",
    description:
      "Finding meaningful customer groups through behavioural data and unsupervised learning.",
    href: "/work/customer-segmentation",
  },
  {
    number: "02",
    title: "Fraud Detection",
    category: "DATA SCIENCE",
    description:
      "Exploring imbalanced transaction data and evaluating machine learning models for fraud detection.",
    href: "/work/fraud-detection",
  },
  {
    number: "03",
    title: "Delhi Air Quality Forecasting",
    category: "TIME SERIES",
    description:
      "Forecasting air quality using historical pollution data and predictive modelling.",
    href: "/work/delhi-air-quality",
  },
  {
    number: "04",
    title: "Brain Weight Prediction",
    category: "REGRESSION",
    description:
      "Investigating the relationship between head size and brain weight through statistical modelling.",
    href: "/work/brain-weight-prediction",
  },
];

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          BANGALY SANO
        </Link>

        <div className={styles.navLinks}>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroIntro}>
          <span>DATA · INTELLIGENCE · TECHNOLOGY · HEALTH</span>
          <span>INDEPENDENT THINKING. CONTINUOUS BUILDING.</span>
        </div>

        <div className={styles.heroStatement}>
          <p className={styles.eyebrow}>
            DATA SCIENCE / MACHINE LEARNING / SOFTWARE
          </p>
          <h1>
            Building
            <br />
            toward what
            <br />
            comes next.
          </h1>
        </div>

        <div className={styles.heroBottom}>
          <span>Based in Nigeria. Building for what comes next.</span>
          <a href="#journey" className={styles.explore}>
            Explore the journey
            <span className={styles.arrow}>↘</span>
          </a>
        </div>
      </section>

      <section id="journey" className={styles.journey}>
        <div className={styles.sectionLabel}>
          <span>JOURNEY</span>
          <span>THE PATH SO FAR</span>
        </div>

        <div className={styles.journeyContent}>
          <div className={styles.journeyIntro}>
            <h2>
              Different fields.
              <br />
              One direction.
            </h2>
          </div>

          <div className={styles.journeyText}>
            <p>
              My journey started with biology and grew into data science,
              machine learning, software engineering, and intelligent systems.
            </p>
            <p>
              Each step has changed how I approach problems: observe carefully,
              question assumptions, work with evidence, and build solutions
              that have a reason to exist.
            </p>
          </div>
        </div>

        <div className={styles.trajectory}>
          <div className={styles.trajectoryItem}>
            <span>01</span>
            <strong>Biology</strong>
            <p>Understanding living systems.</p>
          </div>
          <span className={styles.trajectoryArrow}>→</span>

          <div className={styles.trajectoryItem}>
            <span>02</span>
            <strong>Data</strong>
            <p>Finding patterns in evidence.</p>
          </div>
          <span className={styles.trajectoryArrow}>→</span>

          <div className={styles.trajectoryItem}>
            <span>03</span>
            <strong>Machine Learning</strong>
            <p>Learning from data.</p>
          </div>
          <span className={styles.trajectoryArrow}>→</span>

          <div className={styles.trajectoryItem}>
            <span>04</span>
            <strong>Software</strong>
            <p>Turning ideas into tools.</p>
          </div>
          <span className={styles.trajectoryArrow}>→</span>

          <div className={styles.trajectoryItem}>
            <span>05</span>
            <strong>Intelligent Systems</strong>
            <p>Building beyond isolated models.</p>
          </div>
          <span className={styles.trajectoryArrow}>→</span>

          <div className={`${styles.trajectoryItem} ${styles.unknown}`}>
            <span>06</span>
            <strong>Health Technology</strong>
            <p>The next frontier.</p>
          </div>
        </div>

        <div className={styles.journeyBottom}>
          <p>Still learning. Still building.</p>
          <span>The journey is not finished.</span>
        </div>
      </section>

      <section id="work" className={styles.work}>
        <div className={styles.sectionLabel}>
          <span>SELECTED WORK</span>
          <span>EXPERIMENTS → EVIDENCE → APPLICATION</span>
        </div>

        <div className={styles.workIntro}>
          <h2>
            Work that
            <br />
            makes ideas
            <br />
            tangible.
          </h2>
          <p className={styles.workStatement}>
            Projects are where concepts meet real data, where assumptions are
            tested, and where I learn what it takes to move from a notebook to
            something another person can use.
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <Link
              href={project.href}
              className={styles.project}
              key={project.number}
            >
              <span className={styles.projectNumber}>{project.number}</span>

              <div className={styles.projectMain}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <span className={styles.projectMeta}>{project.category}</span>
              <span className={styles.projectArrow}>↗</span>
            </Link>
          ))}
        </div>

        <div className={styles.workFooter}>
          <span>SELECTED PROJECTS</span>
          <Link href="/work">
            Explore all work <span>↗</span>
          </Link>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.sectionLabel}>
          <span>ABOUT</span>
          <span>THE PERSON BEHIND THE WORK</span>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutIntro}>
            <div className={styles.aboutImageWrap}>
              <Image
                src="/images/Profile.jpeg"
                alt="Portrait of Bangaly Sano"
                width={640}
                height={960}
                className={styles.aboutImage}
                sizes="(max-width: 760px) 100vw, 40vw"
                priority={false}
              />
            </div>

            <div className={styles.aboutIdentity}>
              <h3>BANGALY SANO</h3>
              <p>Data Scientist · AI &amp; Machine Learning</p>
            </div>

            <h2>
              Curious by
              <br />
              nature.
              <br />
              Building with
              <br />
              intention.
            </h2>
          </div>

          <div className={styles.aboutText}>
            <p>
              I&apos;m Bangaly Sano, a data science and technology
              practitioner with a background in biology and a growing focus on
              software engineering and health technology.
            </p>

            <p>
              My journey has taken me from understanding living systems to
              exploring how data and intelligent systems can solve real-world
              problems. I work across data analysis, machine learning,
              predictive modelling, and software development, with a particular
              interest in healthcare and the wider African technology
              ecosystem.
            </p>

            <p>
              I see every project as part of a longer process of learning,
              testing, refining, and building technology that is not only
              intelligent, but genuinely useful.
            </p>

            <div className={styles.aboutNow}>
              <p className={styles.eyebrow}>CURRENT DIRECTION</p>
              <p>
                From biological systems to data-driven decisions, and from
                individual models to useful technology.
              </p>
            </div>

            <div className={styles.aboutBottom}>
              <span>Research mindset.</span>
              <span>Builder mentality.</span>
              <span>Long-term thinking.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="gueritech" className={styles.gueritech}>
        <div className={styles.sectionLabel}>
          <span>GUERITECH</span>
          <span>AN INITIATIVE IN PROGRESS</span>
        </div>

        <div className={styles.gueritechContent}>
          <div className={styles.gueritechIntro}>
            <p className={styles.eyebrow}>BEYOND INDIVIDUAL PROJECTS</p>
            <h2>
              From building
              <br />
              models to building
              <br />
              systems.
            </h2>
          </div>

          <div className={styles.gueritechText}>
            <p>
              GueriTech is where the different parts of the journey begin to
              converge: technology, intelligence, software, and health.
            </p>
            <p>
              The ambition is to build useful systems that address real
              problems and contribute to a healthier technological future,
              with African needs and opportunities in view.
            </p>

            <Link href="/gueritech" className={styles.gueritechLink}>
              <span>Explore what I&apos;m building</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.gueritechStatement}>
          <span>GUERITECH</span>
          <p>Engineering a healthier future.</p>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.sectionLabel}>
          <span>CONTACT</span>
          <span>OPEN TO MEANINGFUL CONNECTIONS</span>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactMain}>
            <p className={styles.eyebrow}>HAVE SOMETHING IN MIND?</p>
            <h2>
              Let&apos;s make
              <br />
              something
              <br />
              meaningful.
            </h2>

            <a
              className={styles.contactEmail}
              href="mailto:sanobangaly@hotmail.com"
            >
              <span>sanobangaly@hotmail.com</span>
              <span>↗</span>
            </a>
          </div>

          <div className={styles.contactBottom}>
            <p className={styles.contactNote}>
              For thoughtful conversations, collaborations, and opportunities
              to build useful things.
            </p>

            <div className={styles.contactLinks}>
              <a
                href="https://github.com/Bangaly-DS"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/sano-bangaly-064535146"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://youtube.com/@gueritech"
                target="_blank"
                rel="noreferrer"
              >
                YouTube ↗
              </a>
              <Link href="/gueritech">GueriTech ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} BANGALY SANO</span>
        <span>DATA · INTELLIGENCE · TECHNOLOGY · HEALTH</span>
        <a
          href="#top"
          className={styles.backToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </a>
      </footer>
    </main>
  );
}
