import styles from "./MyGrid.module.css";
import {Github, Instagram, Phone, BadgeCheck} from "lucide-react";
const cards = [0, 1, 2, 3, 4];
export function MyGrid() {
  const randomNumbers = cards.map(() => Math.floor(Math.random() * 1000));
  return (
    <div className={styles.container}>
      <header className={styles.header1}>
        <BadgeCheck />
        <h1>Foco, Força, Fé</h1>
      </header>
      <main className={styles.main}>
<div className={styles.grid}>
  {cards.map((card, idx) => (
    <div className={styles.card} key={idx}>
      <img
        src={`https://picsum.photos/200/300?random=${randomNumbers[idx]}`}
        alt={`Random ${idx}`}
      />
      <h2>My Text {idx}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  ))}
</div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            <h1>IFRN - Campus Macau</h1>
            <h1>Curso Técnico em Informática</h1>
            <h1>Programação para Internet 2025</h1>
          </div>
          <p>Erik Henrique</p>
          <div className={styles.icons}>
            <a href='https://github.com/erikvalentim' target='_blank'>
              <Github/>
            </a>
            <a href='https://www.instagram.com/erik_valentim9/' target='_blank'>
              <Instagram/>
            </a>
            <a href='tel:+5584998445977' target='_blank'>
              <Phone/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
