import { Link } from "react-router-dom";
import { Button } from "@/components/Button/Button";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Сторінку не знайдено</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button>На головну</Button>
      </Link>
    </div>
  );
};
