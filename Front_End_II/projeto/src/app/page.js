// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Mariana';
  return (
    <div>
          <h1>Pagina principal</h1>
          <p>Paragrafo da pagina principal</p>
          <p>Me chamo: {nome}</p>
    </div>
 )
}
