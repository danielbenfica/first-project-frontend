import { IoIosArrowForward } from "react-icons/io";
import styles from './Procedure.module.css'

const Procedure = () => {
  return (
    <>

      <div className={styles.procedure_container}>
        <img src="https://picsum.photos/70/70" alt="" />
        <div>
          <h2>Massagem</h2>
          <p>Clique para marcar o horário</p>
        </div>
        <div className={styles.icon}>
          <IoIosArrowForward size={24} />
        </div>
      </div>
      <div className={styles.procedure_container}>
        <img src="https://picsum.photos/70/70" alt="" />
        <div>
          <h2>Massagem</h2>
          <p>Clique para marcar o horário</p>
        </div>
        <div className={styles.icon}>
          <IoIosArrowForward size={24} />
        </div>
      </div>
      <div className={styles.procedure_container}>
        <img src="https://picsum.photos/70/70" alt="" />
        <div>
          <h2>Massagem</h2>
          <p>Clique para marcar o horário</p>
        </div>
        <div className={styles.icon}>
          <IoIosArrowForward size={24} />
        </div>
      </div>
      <div className={styles.procedure_container}>
        <img src="https://picsum.photos/70/70" alt="" />
        <div>
          <h2>Massagem</h2>
          <p>Clique para marcar o horário</p>
        </div>
        <div className={styles.icon}>
          <IoIosArrowForward size={24} />
        </div>
      </div>
    
    </>
  )
}

export default Procedure