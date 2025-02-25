//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <h1 className={styles.title}>Sua saúde em boas mãos no Centro Médico Zorzi</h1>
      </div>
      <main className={styles.main}>
        <p className={styles.text}>
        No Centro Médico Zorzi, cuidamos do seu bem-estar de forma completa, oferecendo
         atendimento humanizado, diagnóstico preciso e tratamentos eficazes. Com uma equipe 
         qualificada e estrutura moderna, valorizamos a saúde física, emocional e mental de cada paciente.
          Nosso compromisso é proporcionar excelência e dedicação em cada
         atendimento, sempre focados na sua qualidade de vida. Aqui, sua saúde está em boas mãos!
        </p>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2025 Centro Médico Zorzi. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
