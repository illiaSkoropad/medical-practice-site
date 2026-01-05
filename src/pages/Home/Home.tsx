import { motion } from "framer-motion";
import { Button } from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <motion.div
            className={styles.hero__content}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.hero__subtitle}>Dr. Kathrin Schäfer</p>
            <h1 className={styles.hero__title}>
              Fachärztin für <span>Psychiatrie</span> und{" "}
              <span>Psychotherapie</span>
            </h1>

            <div className={styles.hero__text}>
              <p>
                Seit 2012 biete ich Diagnostik, Behandlung und Therapie von
                Privatpatienten und Selbstzahlern in Berg an. In München kann
                ich Patienten aller Kassen behandeln. Seit 2017 wurde mir für
                Berg eine Filiale genehmigt, sodass ich jetzt auch
                Kassenpatienten dort behandeln kann.
              </p>
              <p>
                Herzlich willkommen in meiner Praxis. Ich freue mich darauf, Sie
                auf Ihrem Weg zu begleiten und gemeinsam Lösungen zu finden, die
                Ihre Lebensqualität verbessern.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button onClick={() => navigate("/contact")}>
                Termin vereinbaren
              </Button>
              <Button variant="outline" onClick={() => navigate("/services")}>
                Behandlungsschwerpunkte
              </Button>
            </div>
          </motion.div>

          <motion.div
            className={styles.hero__imageWrapper}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              style={{
                width: "100%",
                height: "500px",
                backgroundColor: "#e6f0fa",
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0056b3",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/dr-photo.jpg"
                alt="Praxis Atmosphäre"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaser Section - Split Layout */}
      <section
        className={styles.section}
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className={styles.section__container}>
          <div className={styles.teaser}>
            <div className={styles.teaser__image}>
              <img src="/images/psycho.png" alt="Ganzheitliche Behandlung" />
            </div>
            <div className={styles.teaser__content}>
              <h2>Ganzheitliche Betrachtung</h2>
              <p>
                Psyche kommt aus dem Griechischen und bedeutet Atem, Hauch und
                ist die ganzheitliche Betrachtungsweise des Menschen. Erfahren
                Sie mehr über meine Philosophie und meinen beruflichen
                Werdegang. Krisen, psychische Erkrankungen und Störungen bringen
                das Leben eines Menschen aus dem Gleichgewicht.
              </p>
              <Button variant="outline" onClick={() => navigate("/about")}>
                Mehr über mich erfahren
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
