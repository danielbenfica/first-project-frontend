import Header from "@/components/Header";
import Procedure from "@/components/Procedure";
import styles from './page.module.css'


export default function Home() {
  return (
    <div>
      <Header/>
      <div  className={styles.content_container}>
        <Procedure />

      </div>
    </div>
  );
}
