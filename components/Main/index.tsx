import Image from 'next/image';
import styles from './styles.module.css';
import dev from './devjr.png';


type Props = {
    id: string;
}

const Main = ({id}: Props) => {
    return (
        
        <div className={styles.container} id={id}>
            <div className={styles.info}>
                <div className={styles.greetings}>Olá, o meu nome é</div>
                <div className={styles.name}>Matheus Oliveira</div>
                <div className={styles.stack}>Desenvolvedor <span className={styles.stackColor}>Front-end</span></div>
            </div>
            <div className={styles.devImage}>
                <Image src={dev} alt="Dev" fill className={styles.image} />
            </div>
        </div>
        
    )
}

export default Main;