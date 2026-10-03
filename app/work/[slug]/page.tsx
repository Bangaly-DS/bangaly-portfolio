// app/work/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import "./page.css";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  github: string;
  live: string;
  stats: string[][];
  problem?: string;
  approach?: string;
  model?: string;
  result?: string;
  stack: string;
};

const projects: Record<string, Project> = {
  "customer-segmentation": {
    number: "01",
    category: "DATA · MACHINE LEARNING",
    title: "Customer Segmentation",
    description:
      "An end-to-end customer segmentation system built to uncover meaningful groups from loyalty, value, and demographic data.",
    github:
      "https://github.com/Bangaly-DS/customer-segmentation-analysis",
    live: "https://bangaly-customer-segmentation.streamlit.app",
    stats: [
      ["CUSTOMERS", "16,737"],
      ["FEATURES", "14"],
      ["CLUSTERS", "08"],
      ["SILHOUETTE", "0.2129"],
    ],
    problem:
      "The first version of the project revealed an important modeling problem: extensive categorical encoding caused geographic variables such as Province and City to dominate the clustering space. The result was technically valid clustering, but the segments were difficult to interpret from a customer-behavior perspective.",
    approach:
      "The second version rebuilt the pipeline around nine logically selected customer attributes. Categorical variables were encoded, numerical features were scaled, and the resulting 14-dimensional feature space was used for K-Means clustering.",
    model:
      "K-Means was used to group customers according to similarity in the transformed feature space. The final model produced eight customer segments that could then be profiled using their original business characteristics.",
    result:
      "The resulting segments provide different customer profiles across lifetime value, salary, loyalty behavior, and customer characteristics. The model became less about simply producing clusters and more about creating groups that could be interpreted.",
    stack:
      "Python · Pandas · NumPy · Scikit-learn · Matplotlib · Streamlit · Joblib",
  },

  "fraud-detection": {
    number: "02",
    category: "FINTECH · MACHINE LEARNING",
    title: "Fraud Detection",
    description:
      "A machine learning system built to identify fraudulent credit card transactions in a highly imbalanced dataset.",
    github:
      "https://github.com/Bangaly-DS/fraud-detection-smote",
    live: "",
    stats: [
      ["TRANSACTIONS", "284,807"],
      ["FRAUD CASES", "492"],
      ["MODEL", "RANDOM FOREST"],
      ["ROC AUC", "0.97"],
    ],
    problem:
      "Fraud detection begins with a difficult imbalance: only 492 of the 284,807 transactions in the dataset are fraudulent. A model can therefore appear highly accurate while still failing to identify the minority class that matters most.",
    approach:
      "The workflow starts with exploratory analysis and an 80/20 train-test split. SMOTE was then applied to the training data to increase representation of the minority fraud class before fitting the classifier.",
    model:
      "A Random Forest classifier was trained on the balanced training data. The model was evaluated using fraud-focused classification metrics, a confusion matrix, and an ROC curve.",
    result:
      "After applying SMOTE, the model achieved 0.81 precision, 0.81 recall, and a 0.81 F1-score for fraud detection, with a ROC AUC score of 0.97.",
    stack:
      "Python · Pandas · NumPy · Scikit-learn · Imbalanced-learn · Matplotlib · Jupyter",
  },

  "delhi-air-quality": {
    number: "03",
    category: "ENVIRONMENT · FORECASTING",
    title: "Delhi Air Quality Forecasting",
    description:
      "A forecasting study exploring long-term air-quality patterns in Delhi and comparing statistical time-series models with machine learning approaches.",
    github:
      "https://github.com/Bangaly-DS/aqi-forecasting-delhi",
    live: "",
    stats: [
      ["LOCATION", "DELHI"],
      ["DATA", "2015–2020"],
      ["FORECAST", "30 DAYS"],
      ["MODELS", "03"],
    ],
    problem:
      "Air quality is not static. Pollution levels change over time, and those changes can contain recurring patterns that make forecasting possible. The challenge was to understand those patterns and determine how different modeling approaches could capture them.",
    approach:
      "The project combines classical time-series forecasting with supervised machine learning. SARIMA was used to model temporal and seasonal structure, while Random Forest and Gradient Boosting were used to investigate predictive relationships in the data.",
    model:
      "Three modeling approaches were explored: SARIMA for time-series forecasting, Random Forest Regression, and Gradient Boosting Regression. Gradient Boosting was then tuned using GridSearchCV.",
    result:
      "The analysis showed that different models captured different aspects of the forecasting problem. SARIMA provided a dedicated temporal forecasting approach, while Gradient Boosting demonstrated stronger predictive performance among the machine-learning models.",
    stack:
      "Python · Pandas · NumPy · Scikit-learn · Statsmodels · Matplotlib · Jupyter",
  },

  "brain-weight-prediction": {
    number: "04",
    category: "BIOLOGY · MACHINE LEARNING",
    title: "Brain Weight Prediction",
    description:
      "A biological machine-learning study exploring the relationship between head size and brain weight through exploratory analysis and linear regression.",
    github:
      "https://github.com/Bangaly-DS/brain-weight-prediction",
    live: "",
    stats: [
      ["OBSERVATIONS", "237"],
      ["MODEL", "LINEAR REGRESSION"],
      ["R²", "0.6393"],
      ["RMSE", "72.12 g"],
    ],
    problem:
      "The project asks whether head size can provide a useful signal for estimating brain weight. The analysis begins with exploratory data analysis to understand the structure of the biological measurements before fitting a regression model.",
    approach:
      "The notebook explores the relationship between head size and brain weight and then applies Linear Regression to model the relationship between the predictor and target variables.",
    model:
      "Linear Regression was used as an interpretable baseline model. The fitted equation was Brain Weight = 325.5734 + 0.26343 × Head Size.",
    result:
      "The regression analysis produced an R² of 0.6393, meaning approximately 63.93% of the observed variation in brain weight was explained by head size in this dataset. The model's RMSE was 72.12 g.",
    stack:
      "Python · Pandas · NumPy · Matplotlib · Seaborn · Scikit-learn · Jupyter",
  },
};

type ProjectSlug = keyof typeof projects;

function isProjectSlug(slug: string): slug is ProjectSlug {
  return slug in projects;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isProjectSlug(slug)) {
    notFound();
  }

  const project = projects[slug];

  const isCustomerSegmentation = slug === "customer-segmentation";
  const isFraudDetection = slug === "fraud-detection";
  const isDelhiAirQuality = slug === "delhi-air-quality";
  const isBrainWeightPrediction = slug === "brain-weight-prediction";

  return (
    <main className="projectPage">
      <nav className="projectNav">
        <Link href="/" className="projectBrand">
          BANGALY SANO
        </Link>

        <Link href="/work" className="backLink">
          ← Back to work
        </Link>
      </nav>

      <section className="projectHero">
        <div className="projectHeroMeta">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>

        <h1>{project.title}</h1>

        <p className="projectDescription">{project.description}</p>
      </section>

      <section className="projectStats">
        {project.stats.map(([label, value]) => (
          <div className="stat" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      {isBrainWeightPrediction ? (
        <>
          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>01</span>
              <span>DATA</span>
            </div>

            <div className="projectSectionContent">
              <p>
                The analysis uses 237 observations containing two biological
                measurements: head size and brain weight. The objective was to
                investigate whether head size could provide a useful predictor
                of brain weight and to understand the strength of the
                relationship between the two variables.
              </p>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>02</span>
              <span>MODEL</span>
            </div>

            <div className="projectSectionContent">
              <p>
                A simple linear regression model was used to model the
                relationship between head size and brain weight. Head size was
                treated as the explanatory variable, while brain weight was
                used as the target. The fitted regression equation was Brain
                Weight = 325.5734 + 0.26343 × Head Size.
              </p>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>03</span>
              <span>WHAT I DID</span>
            </div>

            <div className="projectSectionContent">
              <p>
                The workflow began with exploratory analysis of the biological
                measurements before fitting the regression model. The
                relationship between head size and brain weight was visualized
                directly, followed by fitting the regression line and
                evaluating how well the model explained variation in brain
                weight.
              </p>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>04</span>
              <span>RESULT</span>
            </div>

            <div className="projectSectionContent">
              <p>
                The model produced an R² of 0.6393, meaning that approximately
                63.93% of the observed variation in brain weight was explained
                by head size in this dataset. The RMSE was 72.12 g, providing a
                measure of the typical prediction error of the regression
                model.
              </p>
            </div>
          </section>

          <section className="visualSection brainAnalysisSection">
            <div className="projectSectionLabel">
              <span>05</span>
              <span>ORIGINAL NOTEBOOK ANALYSIS</span>
            </div>

            <div className="visualContent">
              <h2>
                Head size.
                <br />
                Brain weight.
              </h2>

              <p>
                The original notebook visualization shows the observed
                relationship between head size and brain weight together with
                the fitted linear regression line.
              </p>

              <div className="chartFrame brainVisual">
                <img
                  src="/images/brain-weight-regression.png"
                  alt="Head Size versus Brain Weight regression analysis from the original notebook"
                />

                <div className="chartCaption">
                  <span>HEAD SIZE · BRAIN WEIGHT</span>
                  <span>LINEAR REGRESSION</span>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>06</span>
              <span>METRICS</span>
            </div>

            <div className="projectSectionContent">
              <div className="brainMetrics">
                <div>
                  <span>OBSERVATIONS</span>
                  <strong>237</strong>
                </div>

                <div>
                  <span>R²</span>
                  <strong>0.6393</strong>
                </div>

                <div>
                  <span>RMSE</span>
                  <strong>72.12 g</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>07</span>
              <span>WHAT IT SHOWS</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                Biology can become
                <br />
                a modeling problem.
              </h2>

              <p>
                The project is deliberately straightforward. Its value is in
                connecting a biological question to a reproducible analytical
                workflow: inspect the measurements, understand the
                relationship, fit an interpretable model, and evaluate what
                that model can explain.
              </p>

              <p>
                It also represents an important part of the broader trajectory
                behind this portfolio — using a Biology background as a
                foundation for increasingly computational work.
              </p>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>08</span>
              <span>LIMITATIONS</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                A baseline model,
                <br />
                not a biological law.
              </h2>

              <p>
                The model describes the relationship present in this dataset.
                It should not be interpreted as establishing that head size
                alone determines brain weight or as a clinical prediction
                system.
              </p>

              <p>
                Additional biological variables, stronger validation procedures,
                and broader datasets would be required for a more comprehensive
                predictive analysis.
              </p>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>09</span>
              <span>THE ORIGINAL WORK</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                The notebook remains
                <br />
                the source of truth.
              </h2>

              <p>
                The portfolio case study is built around the original analysis
                rather than invented dashboard graphics. The complete notebook,
                dataset, and project files remain available in the repository.
              </p>

              <div className="artifactGrid">
                <div>
                  <span>REPOSITORY</span>
                  <strong>brain-weight-prediction</strong>
                </div>

                <div>
                  <span>ANALYSIS</span>
                  <strong>Jupyter Notebook</strong>
                </div>

                <div>
                  <span>METHOD</span>
                  <strong>Linear Regression</strong>
                </div>

                <div>
                  <span>DOMAIN</span>
                  <strong>Biological Data</strong>
                </div>
              </div>

              <div className="projectLinks">
                <a
                  href="https://github.com/Bangaly-DS/brain-weight-prediction"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW REPOSITORY ↗
                </a>

                <a
                  href="https://nbviewer.org/github/Bangaly-DS/brain-weight-prediction/blob/main/Headbrain.ipynb"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW NOTEBOOK ↗
                </a>
              </div>
            </div>
          </section>
        </>
      ) : isCustomerSegmentation ? (
        <>
          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>01</span>
              <span>THE PROBLEM</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                The first model
                <br />
                taught me what to fix.
              </h2>

              <p>{project.problem}</p>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>02</span>
              <span>THE REBUILD</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                V2 was built around
                <br />
                better feature thinking.
              </h2>

              <p>{project.approach}</p>

              <div className="pipeline">
                <div>
                  <span>01</span>
                  <strong>SELECT</strong>
                  <p>9 logical customer attributes</p>
                </div>

                <div>
                  <span>02</span>
                  <strong>ENCODE</strong>
                  <p>Categorical variables transformed</p>
                </div>

                <div>
                  <span>03</span>
                  <strong>SCALE</strong>
                  <p>Numerical features standardized</p>
                </div>

                <div>
                  <span>04</span>
                  <strong>CLUSTER</strong>
                  <p>K-Means applied to 14 features</p>
                </div>
              </div>
            </div>
          </section>

          <section className="visualSection">
            <div className="projectSectionLabel">
              <span>03</span>
              <span>CLUSTER SPACE</span>
            </div>

            <div className="visualContent">
              <h2>
                Seeing the
                <br />
                customer space.
              </h2>

              <p>
                PCA provides a lower-dimensional view of the transformed
                feature space, making the relationship between the resulting
                customer groups easier to inspect visually.
              </p>

              <div className="chartFrame">
                <img
                  src="/images/customer-segmentation-pca-v2.png"
                  alt="PCA visualization of customer segmentation clusters"
                />

                <div className="chartCaption">
                  <span>PCA · CUSTOMER CLUSTER SPACE</span>
                  <span>V2 MODEL</span>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>04</span>
              <span>THE MODEL</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                Eight groups.
                <br />
                Different customer profiles.
              </h2>

              <p>{project.model}</p>

              <div className="segmentGrid">
                <div>
                  <span>00</span>
                  <strong>High Lifetime Value</strong>
                  <p>CLV · $9,209</p>
                </div>

                <div>
                  <span>01</span>
                  <strong>Loyal Customers</strong>
                  <p>CLV · $8,165</p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Emerging Customers</strong>
                  <p>CLV · $6,357</p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Stable Customers</strong>
                  <p>CLV · $8,018</p>
                </div>

                <div>
                  <span>04</span>
                  <strong>Promotion Customers</strong>
                  <p>CLV · $8,182</p>
                </div>

                <div>
                  <span>05</span>
                  <strong>Value-Conscious</strong>
                  <p>CLV · $7,707</p>
                </div>

                <div>
                  <span>06</span>
                  <strong>Executive Customers</strong>
                  <p>CLV · $7,833</p>
                </div>

                <div>
                  <span>07</span>
                  <strong>Premium Customers</strong>
                  <p>CLV · $7,441</p>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>05</span>
              <span>THE RESULT</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                The output is
                <br />
                more than clusters.
              </h2>

              <p>{project.result}</p>

              <div className="resultMetrics">
                <div>
                  <span>SILHOUETTE SCORE</span>
                  <strong>0.2129</strong>
                </div>

                <div>
                  <span>VARIANCE EXPLAINED</span>
                  <strong>27.07%</strong>
                </div>

                <div>
                  <span>TRANSFORMED SPACE</span>
                  <strong>14 FEATURES</strong>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isFraudDetection ? (
        <>
          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>01</span>
              <span>THE PROBLEM</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                The difficult part
                <br />
                was the imbalance.
              </h2>

              <p>{project.problem}</p>

              <div className="fraudNumbers">
                <div>
                  <span>ALL TRANSACTIONS</span>
                  <strong>284,807</strong>
                </div>

                <div>
                  <span>FRAUD CASES</span>
                  <strong>492</strong>
                </div>

                <div>
                  <span>LEGITIMATE</span>
                  <strong>284,315</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>02</span>
              <span>THE CHALLENGE</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                Accuracy alone
                <br />
                is not enough.
              </h2>

              <p>
                With fraudulent transactions representing only a tiny fraction
                of the dataset, a classifier could achieve high overall
                accuracy simply by predicting legitimate transactions most of
                the time. The real challenge was giving the minority class
                enough representation for the model to learn from it.
              </p>

              <div className="fraudNumbers challengeNumbers">
                <div>
                  <span>FRAUD SHARE</span>
                  <strong>0.17%</strong>
                </div>

                <div>
                  <span>CLASS IMBALANCE</span>
                  <strong>HIGH</strong>
                </div>

                <div>
                  <span>KEY QUESTION</span>
                  <strong>CAN FRAUD BE DETECTED?</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>03</span>
              <span>THE APPROACH</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                Give the minority
                <br />
                class a voice.
              </h2>

              <p>{project.approach}</p>

              <div className="fraudPipeline">
                <div>
                  <span>01</span>
                  <strong>PREPARE</strong>
                  <p>Explore and prepare transaction data</p>
                </div>

                <div>
                  <span>02</span>
                  <strong>SPLIT</strong>
                  <p>Separate training and testing data</p>
                </div>

                <div>
                  <span>03</span>
                  <strong>SMOTE</strong>
                  <p>Increase minority-class representation</p>
                </div>

                <div>
                  <span>04</span>
                  <strong>TRAIN</strong>
                  <p>Fit the Random Forest classifier</p>
                </div>
              </div>
            </div>
          </section>

          <section className="visualSection fraudVisual">
            <div className="projectSectionLabel">
              <span>04</span>
              <span>THE MODEL</span>
            </div>

            <div className="visualContent">
              <h2>
                When the model
                <br />
                meets the data.
              </h2>

              <p>
                The confusion matrix shows how the Random Forest classifier
                separated legitimate transactions from fraudulent ones after
                training with SMOTE.
              </p>

              <div className="chartFrame">
                <img
                  src="/images/fraud-detection-confusion-matrix.png"
                  alt="Confusion matrix for the fraud detection model"
                />

                <div className="chartCaption">
                  <span>CONFUSION MATRIX · RANDOM FOREST</span>
                  <span>SMOTE TRAINING</span>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>05</span>
              <span>PERFORMANCE</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                Four numbers.
                <br />
                One detection problem.
              </h2>

              <p>{project.result}</p>

              <div className="fraudMetrics">
                <div>
                  <span>PRECISION</span>
                  <strong>0.81</strong>
                </div>

                <div>
                  <span>RECALL</span>
                  <strong>0.81</strong>
                </div>

                <div>
                  <span>F1-SCORE</span>
                  <strong>0.81</strong>
                </div>

                <div>
                  <span>ROC AUC</span>
                  <strong>0.97</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="visualSection fraudVisual">
            <div className="projectSectionLabel">
              <span>06</span>
              <span>ROC CURVE</span>
            </div>

            <div className="visualContent">
              <h2>
                Measuring the
                <br />
                decision boundary.
              </h2>

              <p>
                The ROC curve evaluates how the classifier separates fraudulent
                and legitimate transactions across different classification
                thresholds.
              </p>

              <div className="chartFrame">
                <img
                  src="/images/fraud-detection-roc-curve.png"
                  alt="ROC curve for the fraud detection model"
                />

                <div className="chartCaption">
                  <span>ROC CURVE · AUC 0.97</span>
                  <span>RANDOM FOREST</span>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>07</span>
              <span>THE SYSTEM</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                From notebook
                <br />
                to saved model.
              </h2>

              <p>
                The trained classifier was saved as a reusable model artifact,
                preserving the work beyond the original notebook and creating
                a foundation for future experimentation.
              </p>

              <div className="artifactGrid">
                <div>
                  <span>MODEL</span>
                  <strong>fraud_rf_smote_model.pkl</strong>
                </div>

                <div>
                  <span>NOTEBOOK</span>
                  <strong>fraud_detection.ipynb</strong>
                </div>

                <div>
                  <span>EVALUATION</span>
                  <strong>Confusion Matrix</strong>
                </div>

                <div>
                  <span>CURVE</span>
                  <strong>ROC AUC · 0.97</strong>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isDelhiAirQuality ? (
        <>
          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>01</span>
              <span>THE PROBLEM</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                Reading the pattern
                <br />
                before it arrives.
              </h2>

              <p>{project.problem}</p>

              <div className="aqiNumbers">
                <div>
                  <span>LOCATION</span>
                  <strong>DELHI</strong>
                </div>

                <div>
                  <span>OBSERVATION PERIOD</span>
                  <strong>2015–2020</strong>
                </div>

                <div>
                  <span>FORECAST HORIZON</span>
                  <strong>30 DAYS</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>02</span>
              <span>THE DATA</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                Six years of
                <br />
                air-quality history.
              </h2>

              <p>
                The project works with daily Delhi air-quality observations
                spanning 2015 to 2020. Rather than treating each observation
                independently, the data was examined as a sequence where
                previous conditions can provide information about what comes
                next.
              </p>

              <div className="aqiDataGrid">
                <div>
                  <span>DATA TYPE</span>
                  <strong>TIME SERIES</strong>
                </div>

                <div>
                  <span>REGION</span>
                  <strong>DELHI, INDIA</strong>
                </div>

                <div>
                  <span>PERIOD</span>
                  <strong>2015–2020</strong>
                </div>

                <div>
                  <span>TARGET</span>
                  <strong>AQI</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="visualSection aqiVisual">
            <div className="projectSectionLabel">
              <span>03</span>
              <span>THE TIME SERIES</span>
            </div>

            <div className="visualContent">
              <h2>
                The signal was
                <br />
                already there.
              </h2>

              <p>
                Looking at the historical series reveals how Delhi&apos;s air
                quality changes over time and provides the foundation for
                building a forecasting model.
              </p>

              <div className="chartFrame">
                <img
                  src="/images/aqi-timeseries.png"
                  alt="Delhi air quality time series from 2015 to 2020"
                />

                <div className="chartCaption">
                  <span>DELHI AQI · HISTORICAL SERIES</span>
                  <span>2015-2020</span>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>04</span>
              <span>THE MODELS</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                Three approaches.
                <br />
                Different strengths.
              </h2>

              <p>{project.model}</p>

              <div className="aqiPipeline">
                <div>
                  <span>01</span>
                  <strong>SARIMA</strong>
                  <p>Model temporal and seasonal structure</p>
                </div>

                <div>
                  <span>02</span>
                  <strong>RANDOM FOREST</strong>
                  <p>Learn nonlinear relationships from features</p>
                </div>

                <div>
                  <span>03</span>
                  <strong>GRADIENT BOOSTING</strong>
                  <p>Improve predictive performance through boosting</p>
                </div>

                <div>
                  <span>04</span>
                  <strong>GRID SEARCH</strong>
                  <p>Tune the Gradient Boosting model</p>
                </div>
              </div>
            </div>
          </section>

          <section className="visualSection aqiVisual">
            <div className="projectSectionLabel">
              <span>05</span>
              <span>THE FORECAST</span>
            </div>

            <div className="visualContent">
              <h2>
                Looking thirty days
                <br />
                ahead.
              </h2>

              <p>
                SARIMA was used as the dedicated time-series forecasting
                approach, producing a 30-day forecast from the historical AQI
                sequence.
              </p>

              <div className="chartFrame">
                <img
                  src="/images/sarima-forecast.png"
                  alt="SARIMA forecast of Delhi air quality"
                />

                <div className="chartCaption">
                  <span>SARIMA · 30-DAY FORECAST</span>
                  <span>TIME-SERIES MODEL</span>
                </div>
              </div>
            </div>
          </section>

          <section className="visualSection aqiVisual">
            <div className="projectSectionLabel">
              <span>06</span>
              <span>MODEL COMPARISON</span>
            </div>

            <div className="visualContent">
              <h2>
                Different models.
                <br />
                Different signals.
              </h2>

              <p>
                The models were compared to understand how statistical
                forecasting and machine learning approached the same
                prediction problem. Gradient Boosting demonstrated stronger
                predictive performance among the machine-learning approaches.
              </p>

              <div className="chartFrame">
                <img
                  src="/images/aqi-model-comparison.png"
                  alt="Comparison of Delhi air quality forecasting models"
                />

                <div className="chartCaption">
                  <span>MODEL COMPARISON</span>
                  <span>R² PERFORMANCE</span>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>07</span>
              <span>THE RESULT</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                Forecasting is not
                <br />
                a one-model problem.
              </h2>

              <p>{project.result}</p>

              <div className="aqiResultGrid">
                <div>
                  <span>TIME SERIES</span>
                  <strong>SARIMA</strong>
                  <p>Temporal and seasonal forecasting</p>
                </div>

                <div>
                  <span>MACHINE LEARNING</span>
                  <strong>GRADIENT BOOSTING</strong>
                  <p>Predictive modeling approach</p>
                </div>

                <div>
                  <span>TUNING</span>
                  <strong>GRIDSEARCHCV</strong>
                  <p>Hyperparameter optimization</p>
                </div>
              </div>
            </div>
          </section>

          <section className="projectSection">
            <div className="projectSectionLabel">
              <span>08</span>
              <span>THE SYSTEM</span>
            </div>

            <div className="projectSectionContent">
              <h2>
                From historical data
                <br />
                to future estimates.
              </h2>

              <p>
                The project brings together data preparation, time-series
                analysis, machine learning, model comparison, and forecasting
                into one reproducible analytical workflow.
              </p>

              <div className="artifactGrid">
                <div>
                  <span>TIME SERIES</span>
                  <strong>SARIMA</strong>
                </div>

                <div>
                  <span>ML MODEL</span>
                  <strong>Gradient Boosting</strong>
                </div>

                <div>
                  <span>TUNING</span>
                  <strong>GridSearchCV</strong>
                </div>

                <div>
                  <span>FORECAST</span>
                  <strong>30 Days</strong>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

      <section className="projectStack">
        <div>
          <p className="stackLabel">STACK</p>
          <p>{project.stack}</p>
        </div>

        <div className="projectLinks">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}

          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live project ↗
            </a>
          )}
        </div>
      </section>

      <footer className="projectFooter">
        <Link href="/work">← All work</Link>
        <p>Still building.</p>
      </footer>
    </main>
  );
}