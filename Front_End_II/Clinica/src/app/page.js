//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <h1 className={styles.title}>Bem-vindo à Clínica Vida Saudável</h1>
      </div>
      <main className={styles.main}>
        <p className={styles.text}>
          Na Clínica Vida Saudável, sua saúde é nossa prioridade. Nossa equipe de profissionais e tecnologia de ponta garantem um atendimento humanizado e de excelência. Aqui você encontra serviços que vão desde consultas médicas até tratamentos especializados, sempre focados em promover bem-estar e qualidade de vida para você e sua família.
        </p>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2025 Clínica Vida Saudável. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
