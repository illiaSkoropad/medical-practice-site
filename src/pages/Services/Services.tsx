import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Users,
  MessageCircle,
  CloudRain,
  Zap,
  ShieldAlert,
  Activity,
  Ghost,
  Flower2,
  AlertTriangle,
} from "lucide-react";
import styles from "./Services.module.scss";

export const Services = () => {
  const services = [
    {
      icon: <Brain />,
      title: "Psychotherapie mit tiefenpsychologischem Grundverständnis",
    },
    { icon: <Flower2 />, title: "Entspannungsverfahren, Hypnose" },
    { icon: <Users />, title: "Paartherapie" },
    {
      icon: <MessageCircle />,
      title: "Allg. psych. Probleme, Lebensberatung, Krisen",
    },
    { icon: <ShieldAlert />, title: "Angst-Phobie" },
    { icon: <CloudRain />, title: "Depression" },
    { icon: <Brain />, title: "Demenz, Gedächtnisstörung" },
    { icon: <Activity />, title: "Essstörung" },
    { icon: <Heart />, title: "Psychoonkologie" },
    { icon: <Ghost />, title: "Psychose-Schizophrenie" },
    { icon: <Activity />, title: "Psychosomatik" },
    { icon: <Zap />, title: "Stress-Burnout-Mobbing" },
    { icon: <AlertTriangle />, title: "Sucht-Zwang" },
    { icon: <ShieldAlert />, title: "Trauma-Gewalt-Missbrauch" },
    { icon: <Brain />, title: "ADHS bei Erwachsenen (Testung)" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.services}>
      <div className={styles.services__container}>
        <div className={styles.services__header}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Behandlungsschwerpunkte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Mir ist es wichtig, dass Sie zu jedem Zeitpunkt über die
            durchgeführte Diagnostik, den Therapieprozess und die Methode
            informiert sind.
          </motion.p>
        </div>

        <motion.div
          className={styles.services__grid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={itemVariants}
            >
              <div className={styles.card__icon}>{service.icon}</div>
              <h3 className={styles.card__title}>{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
