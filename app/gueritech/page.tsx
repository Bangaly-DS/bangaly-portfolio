import Link from "next/link";
import styles from "./page.module.css";

export default function GueriTechPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          GUERITECH
        </Link>

        <Link href="/" className={styles.back}>
          ← Portfolio
        </Link>
      </nav>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>GUERITECH</p>

        <h1>
          Engineering
          <br />
          a healthier
          <br />
          future.
        </h1>

        <div className={styles.heroBottom}>
          <p>
            A technology venture exploring intelligent systems for
            healthcare and the infrastructure around it.
          </p>

          <span>BUILDING · HEALTH · INTELLIGENCE</span>
        </div>
      </section>

      <section className={styles.statement}>
        <div className={styles.sectionLabel}>
          <span>01</span>
          <span>THE IDEA</span>
        </div>

        <div className={styles.statementGrid}>
          <h2>
            Healthcare has
            <br />
            too many disconnected
            <br />
            systems.
          </h2>

          <div>
            <p>
              GueriTech is built around a simple question: what could
              healthcare look like if its data, workflows, intelligence,
              and people were connected more effectively?
            </p>

            <p>
              The vision is to build technology that does more than store
              information — systems that help organizations understand,
              coordinate, predict, and act.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.platform}>
        <div className={styles.sectionLabel}>
          <span>02</span>
          <span>THE DIRECTION</span>
        </div>

        <div className={styles.platformHeader}>
          <h2>
            Building the
            <br />
            intelligence layer.
          </h2>

          <p>
            GueriTech is being developed toward a connected ecosystem of
            healthcare products, data infrastructure, and intelligent
            decision-support systems.
          </p>
        </div>

        <div className={styles.products}>
          <div>
            <span>01</span>
            <strong>RehabOS</strong>
            <p>
              Digital infrastructure for rehabilitation workflows and
              patient care.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>ClinicOS</strong>
            <p>
              Connected operational systems for clinics and healthcare
              organizations.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>MediInsight</strong>
            <p>
              Turning healthcare data into useful analytical insight.
            </p>
          </div>

          <div>
            <span>04</span>
            <strong>LabFlow</strong>
            <p>
              Connecting laboratory workflows, information, and
              operational processes.
            </p>
          </div>

          <div>
            <span>05</span>
            <strong>CareConnect</strong>
            <p>
              Connecting patients, providers, and the systems around
              their care.
            </p>
          </div>

          <div>
            <span>06</span>
            <strong>PredictCare AI</strong>
            <p>
              Exploring predictive intelligence for proactive healthcare.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.sectionLabel}>
          <span>03</span>
          <span>THE PRINCIPLES</span>
        </div>

        <div className={styles.principleGrid}>
          <div>
            <span>01</span>
            <h3>Intelligence</h3>
            <p>
              Build systems that can turn complex information into
              useful understanding.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Interoperability</h3>
            <p>
              Connect the systems and information that are too often
              isolated.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Human-centered</h3>
            <p>
              Technology should support people rather than make their
              work harder.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Responsible</h3>
            <p>
              Build with privacy, consent, reliability, and trust in
              mind.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.future}>
        <div className={styles.sectionLabel}>
          <span>04</span>
          <span>WHAT COMES NEXT</span>
        </div>

        <div className={styles.futureContent}>
          <h2>
            This is still
            <br />
            being built.
          </h2>

          <p>
            GueriTech is an evolving venture. The products, systems, and
            ideas will continue to develop as the problems become clearer
            and the technology becomes more capable.
          </p>
        </div>

        <div className={styles.futureMark}>
          <span>GUERITECH</span>
          <p>Engineering a healthier future.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/">← Back to portfolio</Link>

        <span>Still building.</span>
      </footer>
    </main>
  );
}