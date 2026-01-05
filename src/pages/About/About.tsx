import { motion } from "framer-motion";
import styles from "./About.module.scss";

export const About = () => {
  const education = [
    {
      year: "1986-1992",
      text: "Studium der Humanmedizin, Friedrich-Alexander-Universität Erlangen",
    },
    {
      year: "Ausland",
      text: "Royal North Shore Hospital, Sydney, Australien; Chirurgie in Südafrika",
    },
    {
      year: "1999-2004",
      text: "Akademie für Psychoanalyse und Psychotherapie in München",
    },
    {
      year: "2003/2004",
      text: "Autogenes Training und Hypnosetherapieausbildung",
    },
    { year: "2008", text: "Psychopharmakotherapie bei Prof. Dose" },
    {
      year: "2011",
      text: "Gruppentherapieausbildung (Ärztl.-psych. Weiterbildungskreis)",
    },
    {
      year: "2012",
      text: "Weiterbildung: schemazentrierte emotiv-behaviorale Therapie",
    },
    { year: "2013/14", text: "Weiterbildung: Interpersonelle Psychotherapie" },
    {
      year: "2014",
      text: "Seminar und Weiterbildung in emotionsfokussierter Paartherapie",
    },
    {
      year: "2014/15",
      text: "Weiterbildung Paar-und Familientherapie bei Frau Dr.Monika Schnatmann, München",
    },
    { year: "2017", text: "Weiterbildung EMDR (Traumatherapie)" },
    { year: "2018", text: "Lindauer Psychotherapiewochen" },
    { year: "03/2019", text: "ADHS im Erwachsenenalter in Seeon" },
    {
      year: "05/2019",
      text: "Lindauer Psychotherapiewochen (u.a. katathym Imaginative Psychotherapie)",
    },
  ];

  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <section className={styles.about__intro}>
          <motion.div
            className={styles.about__text}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Über mich</h1>
            <p>
              Psyche kommt aus dem Griechischen und bedeutet Atem, Hauch und ist
              die ganzheitliche Betrachtungsweise des Menschen. Krisen,
              psychische Erkrankungen und Störungen bringen das Leben eines
              Menschen aus dem Gleichgewicht. Nach einer umfassenden Diagnose
              kann durch eine individuell abgestimmte psychiatrische bzw.
              psychotherapeutische Behandlung wieder eine Balance erreicht
              werden.
            </p>
            <p>
              Ich arbeite mit Entspannungsverfahren, Imaginationen und ggf.
              verhaltenstherapeutischen Elementen bei einem
              tiefenpsychologisch-analytischem Grundverständnis. Falls indiziert
              und sinnvoll kann eine Medikation besprochen und verordnet werden.
            </p>
            <p>
              In München unterstützt mich in der therapeutischen Arbeit seit
              1.2.2019 Frau Dr. Claudia Fischer, eine von mir sehr geschätzte
              Psychologische Psychotherapeutin. Ich freue mich Sie in München
              oder in Berg begrüßen zu können.
            </p>
          </motion.div>

          <motion.div
            className={styles.about__image}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/images/dr-photo.jpg" alt="Ärztin bei der Arbeit" />
          </motion.div>
        </section>

        <section className={styles.timeline}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ausbildung & Qualifikationen
          </motion.h2>

          {education.map((item, index) => (
            <motion.div
              key={index}
              className={styles.timeline__item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className={styles.timeline__marker}></div>
              <div className={styles.timeline__year}>{item.year}</div>
              <div className={styles.timeline__content}>{item.text}</div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};
