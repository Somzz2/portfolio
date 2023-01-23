import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css';
import html from './html5-e-css3.jpg';
import javascript from './javascript.jpg';
import bootstrap from './bootstrap.jpg';
import git from './git.jpg';
import nextjs from './nextjs.jpg';
import python from './python.png';
import reactjs from './reactjs.jpg';
import typescript from './typescript.jpg';
import { Fade } from "react-awesome-reveal";

type Props = {
    id: string;
}

const About = ({id}: Props) => {
    const [focus, setFocus] = useState('about');

    return (
        <Fade direction='left' cascade triggerOnce>
        <div className={styles.container} id={id}>
            <div className={styles.menu}>
                <div className={styles.card} onClick={() => setFocus('about')} style={{backgroundColor: focus === 'about' ? '#9400D3' : '#9370DB'}}>
                    <div className={styles.aboutMe} id="sobre">
                        <h2>Sobre mim</h2>
                        <span>Conheça mais sobre mim</span>
                    </div>
                </div>
                <div className={styles.card}  onClick={() => setFocus('info')} style={{backgroundColor: focus === 'info' ? '#9400D3' : '#9370DB'}}>
                <div className={styles.info}>
                        <h2>Informações</h2>
                        <span>Minhas informações e contato</span>
                    </div>
                </div>
               <div className={styles.card}  onClick={() => setFocus('tech')} style={{backgroundColor: focus === 'tech' ? '#9400D3' : '#9370DB'}}>
                <div className={styles.tech}>
                        <h2>Tecnologias</h2>
                        <span>Tecnologias que eu domino</span>
                    </div>
                </div>
            </div>
            
                {focus === 'about' &&
                    <div className={styles.descriptionAbout}>
                        <h2>Sobre Mim</h2>
                        <div>Me chamo Matheus, tenho 27 anos, estudo e pratico desenvolvimento web há 2 anos. Comecei a me interessar pela programação na minha graduação (concluída)
                            de Engenharia Ambiental, na qual tive contato com desenvolvimento de aplicativos e também com o software QGIS para elaboração de mapas.<br/><br/> A partir disto
                            meu interesse pela área cresceu e comecei a estudar desenvolvimento web por conta própria. Além do básico de C e VBA, estudei e pratiquei Python, além da web,
                            onde eu domino, na qual passei por HTML, CSS, JavaScript, TypeScript, React e NextJS. Atualmente estou cursando Análise e Desenvolvimento de Sistemas.
                        </div>
                    </div>
                
                }
            
            {focus === 'info' &&
            
            <div className={styles.descriptionInfo}>
                <h2>Informações</h2>
                <div className={styles.infoArea}>
                    <div>
                        <label>Nome</label>
                        <span>Matheus</span>
                    </div>
                    <div>
                        <label>Idade</label>
                        <span>27 anos</span>
                    </div>
                    <div>
                        <label>E-mail</label>
                        <span>matheusbfr14@gmail.com</span>
                    </div>
                    <div>
                        <label>Telefone</label>
                        <span>22 98817-8445</span>
                    </div>
                </div>
            </div>
            
            }
            
            {focus === 'tech' &&
            
            <div className={styles.descriptionTech}>
                <div className={styles.techOne}>
                    <Image src={html} alt="" width={50} height={50} />
                    <span>HTML e CSS</span>
                </div>
                <div className={styles.techOne}>
                    <Image src={javascript} alt="" width={50} height={50} />
                    <span>JavaScript</span>
                </div>
                <div className={styles.techOne}>
                    <Image src={typescript} alt="" width={50} height={50} />
                    <span>TypeScript</span>
                </div>
                <div className={styles.techOne}>
                    <Image src={reactjs} alt="" width={50} height={50} />
                    <span>ReactJS</span>
                </div>
                <div className={styles.techOne}>
                    <Image src={nextjs} alt="" width={50} height={50} />
                    <span>NextJS</span>
                </div>
                <div className={styles.techOne}>
                    <Image src={git} alt="" width={50} height={50} />
                    <span>Git</span>
                </div>
                <div className={styles.techOne}>
                    <Image src={bootstrap} alt="" width={50} height={50} />
                    <span>Bootstrap</span>
                </div>
                <div className={styles.techOne}>
                    <Image src={python} alt="" width={50} height={50} />
                    <span>Python</span>
                </div>
            </div>
            
            }
        </div>
        </Fade>
    )
}

export default About;