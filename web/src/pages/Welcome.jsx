import { useEffect } from 'react';
import '../styles/welcome.css';

export function Welcome(user) {
    useEffect(() => {
        if(user) {
            // redirect to /home
            return;
        }
    }, [user])
    return(
        <div id='app'>
            <video autoPlay muted loop>
                <source src="/assets/background.mp4" type="video/mp4" />
            </video>

            <p>TopStream</p>
            <p>Profite de</p>
            <h1>Ton contenu préféré<br />à portée de main</h1>
            <p>Afin de pouvoir profiter pleinement de nos services, tu dois impérativement te connecter.</p>

            <div>
                <a href="/auth/register">M&apos;inscrire gratuitement</a>
                <a href="/auth/login">Me connecter</a>
                <a href="#">Notre Discord</a>
            </div>
        </div>
    )
}