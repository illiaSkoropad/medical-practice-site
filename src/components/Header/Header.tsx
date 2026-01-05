import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Stethoscope } from "lucide-react";
import clsx from "clsx";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Startseite", path: "/" },
    { name: "Schwerpunkte", path: "/services" },
    { name: "Über mich", path: "/about" },
    { name: "Kontakt", path: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to="/" className={styles.header__logo} onClick={closeMenu}>
          <Stethoscope size={28} />
          <span>Dr. Kathrin Schaefer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.header__nav}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(styles.header__link, {
                [styles["header__link--active"]]:
                  location.pathname === link.path,
              })}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className={styles.header__mobileToggle}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <nav
          className={clsx(styles.header__mobileMenu, {
            [styles["header__mobileMenu--open"]]: isMenuOpen,
          })}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={styles.header__link}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
