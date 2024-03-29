import Head from 'next/head'
import Image from 'next/image';
import * as Scroll from 'react-scroll'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import About from '../components/About'
import Projects from '../components/Projects'
import Form from '../components/Form'


const inter = Inter({ subsets: ['latin'] })

const Link = Scroll.Link;

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus Dev.</title>
        <meta name="description" content="Matheus Oliveira - Desenvolvedor Web Front-End." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logomatheus.jpg" />
      </Head>
      <div className={styles.containerHeader} >
        <div className={styles.cont}>
              <div className={styles.logo}>
                  Matheus<br/>Dev<span>.</span>
              </div>
              <div className={styles.menu}>
                  <ul>
                      <Link activeClass={styles.active} to="inicio" smooth spy><li>Início</li></Link>
                      <Link activeClass={styles.active} to="about" smooth spy><li>Sobre</li></Link>
                      <Link activeClass={styles.active} to="projects" smooth spy><li>Portfólio</li></Link>
                      <Link activeClass={styles.active} to="contact" smooth spy><li>Contato</li></Link>
                  </ul>
              </div>
          </div>
        </div>
      <Main id="inicio" />
      <About id="about" />
      <Projects id="projects" />
      <Form id="contact" />
    </>
  )
}
