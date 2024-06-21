import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes para a animação de fade-in
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Componentes estilizados para cada elemento do cabeçalho
const StyledH2 = styled.h2`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.3s
`;

const StyledH1 = styled(StyledH2)`
  animation-delay: 0.6s; // Ajuste o atraso conforme necessário
`;

const StyledH3 = styled(StyledH2)`
  animation-delay: 0.9s; // Ajuste o atraso conforme necessário
`;

export function Header() {
    const [screenHeight, setScreenHeight] = useState(0);

    

    useEffect(() => {
        const updateScreenHeight = () => setScreenHeight(window.innerHeight);
        window.addEventListener('resize', updateScreenHeight);
        updateScreenHeight();
        console.log(window.innerWidth)
        return () => window.removeEventListener('resize', updateScreenHeight);
    }, []);



    return (
        <header className='z-50' >
            <nav
                className="bg-gradient-to-r from-zinc-800 to-slate-900 px-8 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10 4xl:px-12 flex items-center justify-center"
                style={{ minHeight: `${screenHeight}px` }} 
            >
                <div className="lg:px-10 w-92 text-white"> 
                    <StyledH2 className="text-1xl xss:text-3xl  xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Hi, my name is</StyledH2>
                    <StyledH1 className="text-3xl xss:text-4xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">Pedro Paitax</StyledH1>
                    <StyledH3 className="text-1xl xss:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">I'm a Software Engineer</StyledH3>
                </div>
            </nav >
        </header>
    );
}