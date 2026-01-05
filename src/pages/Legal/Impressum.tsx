import styles from "./Legal.module.scss";

export const Impressum = () => {
  return (
    <div className={styles.legal}>
      <div className={styles.legal__container}>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Kathrin Schäfer
          <br />
          Plinganserstr. 59
          <br />
          81369 München
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 089/72625520
          <br />
          E-Mail: anmeldung@dr-kathrin-schaefer.de
        </p>

        <h2>Aufsichtsbehörde</h2>
        <p>
          Kassenärztliche Vereinigung Bayerns
          <br />
          80687 München
          <br />
          Elsenheimerstraße 39
          <br />
          <a
            href="https://www.kvb.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.kvb.de
          </a>
        </p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          <strong>Berufsbezeichnung:</strong> Fachärztin für Psychatrie und
          Psychotherapie
          <br />
          <strong>Zuständige Kammer:</strong> Bayrische Landesärztekammer
          <br />
          <strong>Verliehen durch:</strong> Deutschland
          <br />
          Es gelten folgende berufsrechtliche Regelungen: Berufsordnung der
          Bayerischen Landesärztekammer
          <br />
          Regelungen einsehbar unter:{" "}
          <a
            href="https://www.blaek.de/beruf_recht/berufsordnung/berufsordnung.cfm"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.blaek.de/beruf_recht/berufsordnung/berufsordnung.cfm
          </a>
        </p>

        <h2>Angaben zur Berufshaftpflichtversicherung</h2>
        <p>
          <strong>Name und Sitz des Versicherers:</strong>
          <br />
          Deutsche Ärzteversicherung
        </p>
        <p>
          <strong>Geltungsraum der Versicherung:</strong> freiberufliche
          ambulante Tätigkeit
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            https://ec.europa.eu/consumers/odr
          </a>
          .<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h2>Bildquellen / Copyright-Hinweis</h2>
        <p>
          Das Layout der Homepage, die verwendeten Grafiken sowie die sonstigen
          Inhalte sind urheberrechtlich geschützt. Eine Vervielfältigung oder
          Verwendung der Texte und Grafiken in anderen elektronischen oder
          gedruckten Publikationen ist nicht gestattet.
        </p>
        <p>
          Es werden folgende Bilder von www.fotolia.com verwendet:
          <br />
          12781151©Stefan Körber
          <br />
          29454999©peter_waters
        </p>
      </div>
    </div>
  );
};
