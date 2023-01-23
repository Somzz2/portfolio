import { FormEvent, useState } from 'react';
import styles from './styles.module.css';
import emailjs from '@emailjs/browser';

type Props = {
    id: string;
}

const Form = ({id}: Props) => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const sendEmail = (e: FormEvent) => {
        e.preventDefault()

        const templateParams = {
            from_name: name,
            message,
            email
        }

        emailjs.send("service_bgs0hzk", "template_nmubsop", templateParams, "adCHCSLX7MjgRk3aW")
        .then((response) => {
            console.log("E-mail enviado", response.status, response.text);
            alert("Email enviado!")
            setName('');
            setEmail('');
            setMessage('');
        }), (error: string) => {
            console.log("Erro ", error)
        }
    }

    return (
        <div className={styles.container} id={id}>
            <h1>Contato</h1>
            <form className={styles.form} onSubmit={sendEmail}>
                <input 
                    className={styles.input}
                    type="text"
                    placeholder='Digite o seu nome'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
                <input 
                    className={styles.input}
                    type="email"
                    placeholder='Digite o seu email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <textarea
                    className={styles.textArea}
                    placeholder='Digite a sua mensagem'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                />
                <input className={styles.button} type="submit" value="Enviar"  />
            </form>
        </div>
    )
}

export default Form;