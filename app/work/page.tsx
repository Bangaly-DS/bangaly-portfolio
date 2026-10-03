import Link from "next/link";
import "./page.css";

const projects = [
  {
    number: "01",
    slug: "customer-segmentation",
    category: "DATA · ML",
    title: "Customer Segmentation",
    description:
      "Exploring how data can reveal patterns in customer behavior, loyalty, and meaningful groups.",
  },
  {
    number: "02",
    slug: "fraud-detection",
    category: "FINTECH · ML",
    title: "Fraud Detection",
    description:
      "Working with highly imbalanced data to identify patterns associated with suspicious financial activity.",
  },
  {
    number: "03",
    slug: "delhi-air-quality",
    category: "FORECASTING · ML",
    title: "Delhi Air Quality Forecasting",
    description:
      "Exploring historical AQI patterns in Delhi and forecasting future trends using time series modeling and supervised machine learning techniques.",
  },
  {
    number: "04",
    slug: "brain-weight-prediction",
    category: "HEALTHCARE · ML",
    title: "Brain Weight Prediction",
    description:
      "Exploring the relationship between head size and brain weight through biological data, exploratory analysis, and linear regression.",
  },
];

export default function WorkPage() {
  return (
    <main className="workPage">
      <nav className="workNav">
        <Link href="/" className="workBrand">
          BANGALY SANO
        </Link>

        <Link href="/" className="workBack">
          ← Home
        </Link>
      </nav>

      <header className="workHero">
        <p className="workEyebrow">SELECTED WORK</p>

        <h1>
          Different problems.
          <br />
          One direction.
        </h1>

        <p className="workIntro">
          A collection of projects across data, machine learning, software,
          and health — each one part of the direction I am building toward.
        </p>
      </header>

      <section className="workProjects">
        <div className="workSectionLabel">
          <span>01</span>
          <span>PROJECTS</span>
        </div>

        <div className="workProjectList">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="workProject"
            >
              <span className="workProjectNumber">{project.number}</span>

              <div className="workProjectMain">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              <span className="workProjectCategory">
                {project.category}
              </span>

              <span className="workProjectArrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="workDirection">
        <p className="workEyebrow">THE DIRECTION</p>

        <h2>
          These are not
          <br />
          the destination.
          <br />
          They are evidence
          <br />
          of the direction.
        </h2>

        <Link href="/#journey" className="workDirectionLink">
          View the journey →
        </Link>
      </section>

      <footer className="workFooter">
        <Link href="/">← Home</Link>

        <span>Still building.</span>
      </footer>
    </main>
  );
}