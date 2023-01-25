import styles from './styles.module.css';
import pizza from './pizza.jpg';
import oro from './oro.jpg';
import nutricionista from './nutricionista.jpg';
import rpg from './rpg.jpg';
import memoria from './memoria.jpg';
import streaming from './streaming.jpg';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

type Props = {
    id: string;
}

const Projects = ({id}: Props) => {
    return (
        <Fade direction='left' triggerOnce>
        <div className={styles.container} id={id}>
            <h1>PORTFÓLIO</h1>
            <div className={styles.cardGrid}>
                <div className={styles.card}>
                    <div className={styles.title}>Pizza Delivery</div>
                    <div className={styles.imageContainer}>
                        <Image src={pizza} alt="" title="" fill className={styles.image} />
                    </div>
                    <div className={styles.description}>Projeto desenvolvido para criar um site de delivery de pizzas com um carrinho</div>
                    <div className={styles.link}>
                       <a href='https://pizza-delivery-psi.vercel.app'><button>Visitar</button></a>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.title}>Oro E-Commerce</div>
                    <div className={styles.imageContainer}>
                        <Image src={oro} alt="" title="" fill className={styles.image} />
                    </div>
                    <div className={styles.description}>E-commerce de jóias realizado em React, com diversas páginas e carrinho de compras</div>
                    <div className={styles.link}>
                       <a href='https://oro-ecommerce.vercel.app/'><button>Visitar</button></a>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.title}>Nutricionista</div>
                    <div className={styles.imageContainer}>
                        <Image src={nutricionista} alt="" title="" fill className={styles.image} />
                    </div>
                    <div className={styles.description}>Página criada para nutricionista com captação de clientes para o whatsapp e o uso do google maps</div>
                    <div className={styles.link}>
                       <a href='https://nutritionist-page.vercel.app/'><button>Visitar</button></a>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.title}>Jogo de RPG</div>
                    <div className={styles.imageContainer}>
                        <Image src={rpg} alt="" title="" fill className={styles.image} />
                    </div>
                    <div className={styles.description}>Projeto simples de um jogo de rpg criado para treinar conceitos do JavaScript</div>
                    <div className={styles.link}>
                       <a href='https://rpg-game-alpha.vercel.app'><button>Visitar</button></a>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.title}>Streaming</div>
                    <div className={styles.imageContainer}>
                        <Image src={streaming} alt="" title="" fill className={styles.image} />
                    </div>
                    <div className={styles.description}>Projeto desenvolvido para criar um site no conceito de um streaming de filmes e séries utilizando API</div>
                    <div className={styles.link}>
                       <a href='https://streaming-clone-sooty.vercel.app'><button>Visitar</button></a>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.title}>Jogo da Memória</div>
                    <div className={styles.imageContainer}>
                        <Image src={memoria} alt="" title="" fill className={styles.image} />
                    </div>
                    <div className={styles.description}>Projeto desenvolvido simulando um jogo da memória</div>
                    <div className={styles.link}>
                       <a href='https://react-memory-game-ebon.vercel.app/'><button>Visitar</button></a>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default Projects;