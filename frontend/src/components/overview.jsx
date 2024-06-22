import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

//const words = ['CSS3', 'HTML5', 'JavaScript', 'React', 'NodeJS', 'Tailwind'];

export function Overview() {

    AOS.init();

    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
        const updateScreenHeight = () => setScreenHeight(window.innerHeight);
        window.addEventListener('resize', updateScreenHeight);
        updateScreenHeight();
        return () => window.removeEventListener('resize', updateScreenHeight);
    }, []);


    const Background = styled.div`;
    width: 100%;
    min-height: ${screenHeight}px;
    position: relative; // Torna o background um container de posicionamento
  `;


    return (
        <Background className='bg-gradient-to-r from-zinc-800 to-slate-900'>
            <div data-aos="fade-in">
                <p> OI TESTANDO </p>
            </div>

        </Background>
    );
}