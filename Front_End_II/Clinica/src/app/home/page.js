'use client';
import styles from './home.module.css';

const Inicio = () => {
  return (
    <div className={styles.inici}>
      <h1>Bem-Vindo à Clínica Vida Saudável</h1>
      <p className={styles.text}>
        Nossa equipe de profissionais altamente qualificados está pronta para
        cuidar da sua saúde com dedicação e excelência. Oferecemos um
        atendimento humanizado, tecnologia de ponta e uma ampla gama de
        especialidades médicas para garantir seu bem-estar.
      </p>
    </div>
  );
};

export default Inicio;
