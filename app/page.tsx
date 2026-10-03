// app/gueritech/page.tsx

import Link from "next/link";
import styles from "./page.module.css";

export default function GueriTechPage() {
  return (
    <main className={styles.page}>
      {/* NAVIGATION */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          GUERITECH
        </Link>

        <div className={styles.navLinks}>
          <a href="#vision">Vision</a>
          <a href="#platform">Platform</a>
          <a href="#products">Products</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#operations">Operations</a>
          <a href="#ecosystem">Ecosystem</a>
        </div>

        <Link href="/" className={styles.back}>
          ← Portfolio
        </Link>
      </nav>

      {/* HERO */}
      <section id="vision" className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>GUERITECH</span>
          <span>HEALTH · INTELLIGENCE · SYSTEMS</span>
        </div>

        <div className={styles.heroMain}>
          <p className={styles.eyebrow}>
            ENGINEERING A HEALTHIER FUTURE
          </p>

          <h1>
            Technology
            <br />
            for healthier
            <br />
            systems.
          </h1>
        </div>

        <div className={styles.heroBottom}>
          <p>
            Building intelligent infrastructure at the intersection of
            healthcare, software, data, and artificial intelligence.
          </p>

          <span>01 / 06</span>
        </div>
      </section>

      {/* VISION */}
      <section className={styles.statement}>
        <div className={styles.sectionLabel}>
          <span>01</span>
          <span>THE VISION</span>
        </div>

        <div className={styles.statementContent}>
          <p className={styles.eyebrow}>WHY GUERITECH</p>

          <h2>
            Healthcare should not
            <br />
            operate as isolated systems.
          </h2>

          <p>
            GueriTech explores a connected approach to healthcare technology —
            bringing data, software, intelligence, clinical workflows, and
            people into systems that can work together.
          </p>
        </div>
      </section>

      {/* CORE PLATFORM */}
      <section id="platform" className={styles.platform}>
        <div className={styles.sectionLabel}>
          <span>02</span>
          <span>CORE PLATFORM</span>
        </div>

        <div className={styles.platformIntro}>
          <div>
            <p className={styles.eyebrow}>THE FOUNDATION</p>

            <h2>
              One platform.
              <br />
              Multiple systems.
            </h2>
          </div>

          <p>
            The GueriTech platform is envisioned as the infrastructure layer
            beneath its healthcare products — providing identity, data,
            interoperability, security, intelligence, and shared services.
          </p>
        </div>

        <div className={styles.architecture}>
          <div className={styles.architectureCore}>
            <span>CORE</span>
            <strong>GUERITECH PLATFORM</strong>
            <p>
              Shared infrastructure connecting applications, intelligence,
              operations, and healthcare data.
            </p>
          </div>

          <div className={styles.architectureGrid}>
            <div>
              <span>01</span>
              <strong>Identity</strong>
              <p>Authentication, roles, organizations, and access control.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Data</strong>
              <p>Structured health, operational, and organizational data.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Interoperability</strong>
              <p>Connecting systems, services, facilities, and workflows.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Security</strong>
              <p>Privacy, consent, auditability, and secure infrastructure.</p>
            </div>

            <div>
              <span>05</span>
              <strong>Intelligence</strong>
              <p>Models, analytics, prediction, and decision support.</p>
            </div>

            <div>
              <span>06</span>
              <strong>Infrastructure</strong>
              <p>Cloud services, APIs, monitoring, and platform reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className={styles.productsSection}>
        <div className={styles.sectionLabel}>
          <span>03</span>
          <span>PRODUCT ECOSYSTEM</span>
        </div>

        <div className={styles.productsIntro}>
          <p className={styles.eyebrow}>BUILT ON THE PLATFORM</p>

          <h2>
            Different products.
            <br />
            Shared intelligence.
          </h2>

          <p>
            Each product addresses a different part of the healthcare
            ecosystem while sharing the same underlying platform philosophy.
          </p>
        </div>

        <div id="products" className={styles.products}>
          <div>
            <span>01</span>
            <strong>RehabOS</strong>
            <p>
              Digital infrastructure for rehabilitation workflows,
              patient progress, care plans, and clinical coordination.
            </p>
            <small>FLAGSHIP · REHABILITATION</small>
          </div>

          <div>
            <span>02</span>
            <strong>ClinicOS</strong>
            <p>
              Operational infrastructure for clinics, patient management,
              workflows, records, and everyday healthcare operations.
            </p>
            <small>CLINICAL OPERATIONS</small>
          </div>

          <div>
            <span>03</span>
            <strong>MediInsight</strong>
            <p>
              A data and intelligence layer designed to help transform
              healthcare information into useful insights.
            </p>
            <small>HEALTH INTELLIGENCE</small>
          </div>

          <div>
            <span>04</span>
            <strong>LabFlow</strong>
            <p>
              Connecting laboratory workflows, diagnostic information,
              results, and downstream healthcare processes.
            </p>
            <small>LABORATORY SYSTEMS</small>
          </div>

          <div>
            <span>05</span>
            <strong>CareConnect</strong>
            <p>
              Connecting patients, providers, caregivers, and healthcare
              services across the care journey.
            </p>
            <small>CARE COORDINATION</small>
          </div>

          <div>
            <span>06</span>
            <strong>PredictCare AI</strong>
            <p>
              Intelligent models designed to explore risk prediction,
              pattern detection, and decision-support capabilities.
            </p>
            <small>PREDICTIVE INTELLIGENCE</small>
          </div>
        </div>
      </section>

      {/* INTELLIGENCE */}
      <section id="intelligence" className={styles.intelligence}>
        <div className={styles.sectionLabel}>
          <span>04</span>
          <span>INTELLIGENCE LAYER</span>
        </div>

        <div className={styles.intelligenceIntro}>
          <div>
            <p className={styles.eyebrow}>FROM DATA TO DECISIONS</p>

            <h2>
              Intelligence should
              <br />
              sit across the system.
            </h2>
          </div>

          <p>
            GueriTech&apos;s intelligence layer is envisioned as a shared
            capability rather than a single product — allowing analytics,
            machine learning, prediction, and decision support to operate
            across the ecosystem.
          </p>
        </div>

        <div className={styles.intelligenceGrid}>
          <div>
            <span>01</span>
            <strong>Data Intelligence</strong>
            <p>
              Transforming structured and operational data into meaningful
              signals.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Predictive Models</strong>
            <p>
              Exploring risk, forecasting, classification, and early-warning
              capabilities.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Decision Support</strong>
            <p>
              Presenting useful intelligence to the people making healthcare
              decisions.
            </p>
          </div>

          <div>
            <span>04</span>
            <strong>Personalization</strong>
            <p>
              Adapting experiences and recommendations around individual
              healthcare contexts.
            </p>
          </div>
        </div>

        <div className={styles.intelligenceFlow}>
          <span>DATA</span>
          <b>→</b>
          <span>MODELS</span>
          <b>→</b>
          <span>INSIGHT</span>
          <b>→</b>
          <span>ACTION</span>
        </div>
      </section>

      {/* OPERATIONS */}
      <section id="operations" className={styles.operations}>
        <div className={styles.sectionLabel}>
          <span>05</span>
          <span>OPERATIONS</span>
        </div>

        <div className={styles.operationsIntro}>
          <p className={styles.eyebrow}>BEYOND THE APPLICATION</p>

          <h2>
            Systems need
            <br />
            infrastructure behind them.
          </h2>

          <p>
            The platform is designed around the operational realities that
            make healthcare technology usable at scale.
          </p>
        </div>

        <div className={styles.operationsGrid}>
          <div>
            <span>01</span>
            <strong>Organizations</strong>
            <p>
              Hospitals, clinics, laboratories, rehabilitation centers,
              insurers, and other healthcare organizations.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Workflows</strong>
            <p>
              Designing systems around how healthcare teams actually work.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Access</strong>
            <p>
              Role-based access and organization-aware platform experiences.
            </p>
          </div>

          <div>
            <span>04</span>
            <strong>Monitoring</strong>
            <p>
              Observability, reliability, system health, and operational
              visibility.
            </p>
          </div>

          <div>
            <span>05</span>
            <strong>Security</strong>
            <p>
              Building privacy, authentication, authorization, and auditability
              into the infrastructure.
            </p>
          </div>

          <div>
            <span>06</span>
            <strong>Scalability</strong>
            <p>
              Designing the architecture to evolve from focused pilots into
              broader healthcare ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* HEALTH ECOSYSTEM */}
      <section id="ecosystem" className={styles.ecosystem}>
        <div className={styles.sectionLabel}>
          <span>06</span>
          <span>HEALTH ECOSYSTEM</span>
        </div>

        <div className={styles.ecosystemIntro}>
          <div>
            <p className={styles.eyebrow}>THE BIGGER PICTURE</p>

            <h2>
              The platform becomes
              <br />
              more valuable when
              <br />
              the ecosystem connects.
            </h2>
          </div>

          <p>
            The long-term vision is a connected health technology ecosystem
            where different participants can interact through shared
            infrastructure, data, intelligence, and services.
          </p>
        </div>

        <div className={styles.ecosystemMap}>
          <div className={styles.ecosystemCenter}>
            <span>GUERITECH</span>
            <strong>HEALTH PLATFORM</strong>
          </div>

          <div className={styles.ecosystemNode}>
            <strong>Patients</strong>
            <span>Care · Access · Engagement</span>
          </div>

          <div className={styles.ecosystemNode}>
            <strong>Providers</strong>
            <span>Clinical · Rehabilitation · Care</span>
          </div>

          <div className={styles.ecosystemNode}>
            <strong>Laboratories</strong>
            <span>Diagnostics · Results · Data</span>
          </div>

          <div className={styles.ecosystemNode}>
            <strong>Insurers</strong>
            <span>Coverage · Risk · Operations</span>
          </div>

          <div className={styles.ecosystemNode}>
            <strong>Pharmacies</strong>
            <span>Medication · Distribution · Services</span>
          </div>

          <div className={styles.ecosystemNode}>
            <strong>Partners</strong>
            <span>Technology · Research · Infrastructure</span>
          </div>
        </div>

        <div className={styles.ecosystemStatement}>
          <span>THE DIRECTION</span>

          <p>
            Connect the infrastructure.
            <br />
            Understand the data.
            <br />
            Build the intelligence.
            <br />
            Improve the system.
          </p>
        </div>
      </section>

      {/* FUTURE */}
      <section className={styles.future}>
        <div className={styles.sectionLabel}>
          <span>07</span>
          <span>THE FUTURE</span>
        </div>

        <div className={styles.futureContent}>
          <p className={styles.eyebrow}>STILL BEING BUILT</p>

          <h2>
            This is not
            <br />
            a finished company.
          </h2>

          <p>
            GueriTech is an evolving direction — starting with focused
            healthcare systems and gradually exploring what becomes possible
            when infrastructure, intelligence, and healthcare are designed
            together.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <Link href="/">← Back to portfolio</Link>

        <div>
          <span>GUERITECH</span>
          <span>ENGINEERING A HEALTHIER FUTURE.</span>
        </div>

        <span>Still building.</span>
      </footer>
    </main>
  );
}