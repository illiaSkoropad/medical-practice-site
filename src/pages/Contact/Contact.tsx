import React, { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/Button/Button";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", formData);
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__info}>
          <h1>Kontakt & Anfahrt</h1>

          <div className={styles.contact__details}>
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <MapPin size={20} color="#0056b3" /> Praxis München
              </h3>
              <p>
                Plinganserstr. 59
                <br />
                81369 München
                <br />
                Tel. 089/72625520
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <MapPin size={20} color="#0056b3" /> Praxis Berg
              </h3>
              <p>
                Perchastr. 3a
                <br />
                82335 Berg
                <br />
                Tel. 08151/5264
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Clock size={20} color="#0056b3" /> Sprechzeiten
              </h3>
              <p style={{ marginBottom: "0.5rem" }}>Montag: 8-13 Uhr</p>
              <p style={{ marginBottom: "0.5rem" }}>Dienstag: 15-18 Uhr</p>
              <p>Donnerstag: 8-13 Uhr</p>
            </div>

            <div>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Mail size={20} color="#0056b3" /> Email
              </h3>
              <p>anmeldung@dr-kathrin-schaefer.de</p>
            </div>
          </div>

          <div
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              marginTop: "2rem",
            }}
          >
            <img
              src="/images/psycho-contact.jpeg"
              alt="Praxisraum"
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles.contact__form}>
          <h2>Terminanfrage</h2>
          {status === "success" ? (
            <div
              style={{ color: "green", textAlign: "center", padding: "2rem" }}
            >
              <h3>Vielen Dank!</h3>
              <p>
                Ihre Nachricht wurde gesendet. Wir werden uns in Kürze bei Ihnen
                melden.
              </p>
              <Button
                onClick={() => setStatus("idle")}
                variant="outline"
                style={{ marginTop: "1rem" }}
              >
                Neue Nachricht
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.contact__field}>
                <label htmlFor="name">Vor- und Nachname</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.contact__field}>
                <label htmlFor="email">E-Mail-Adresse</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.contact__field}>
                <label htmlFor="phone">Telefonnummer</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.contact__field}>
                <label htmlFor="message">
                  Nachricht (Anliegen, Wunschtermin)
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                style={{ width: "100%" }}
              >
                {status === "submitting" ? "Wird gesendet..." : "Absenden"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
