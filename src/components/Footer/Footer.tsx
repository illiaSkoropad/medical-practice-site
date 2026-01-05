import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <h3 className={styles.footer__title}>Dr. Kathrin Schäfer</h3>
          <p className={styles.footer__text}>
            Fachärztin für Psychiatrie und Psychotherapie.
            <br />
            Privatpatienten und Selbstzahler (Berg) sowie alle Kassen (München &
            Berg).
          </p>
        </div>

        <div className={styles.footer__column}>
          <h3 className={styles.footer__title}>Kontakt</h3>
          <p className={styles.footer__text}>
            München: 089/72625520
            <br />
            Berg: 08151/5264
            <br />
            anmeldung@dr-kathrin-schaefer.de
          </p>
        </div>

        <div className={styles.footer__column}>
          <h3 className={styles.footer__title}>Rechtliches</h3>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Link to="/impressum" className={styles.footer__link}>
              Impressum
            </Link>
            <Link to="/privacy" className={styles.footer__link}>
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <span>
          &copy; {currentYear} Dr. Kathrin Schäfer. Alle Rechte vorbehalten.
        </span>
      </div>
    </footer>
  );
};
