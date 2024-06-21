import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

//const words = ['CSS3', 'HTML5', 'JavaScript', 'React', 'NodeJS', 'Tailwind'];
const words = [
    {Nome: 'CSS3', Projeto: 'Projeto 1'},
    {Nome: 'CSS3', Projeto: 'Projeto 2'},
    {Nome: 'HTML5', Projeto: 'Projeto 1'},
    {Nome: 'HTML5', Projeto: 'Projeto 2'},
]

//Para o pedrinho do futuro
//A gente podia fazer essa parte de cima com uma conexao com o banco de dados
function getRandomX(screenHeight, boxHeight) {
    return Math.random() * (screenHeight - boxHeight);
}

function getRandomY(screenWidth, boxWidth) {
    return Math.random() * (screenWidth - boxWidth);
}

export function Background() {
    const [screenHeight, setScreenHeight] = useState(0);
    const boxRefs = useRef([]); // Array para armazenar as referências das boxes

    useEffect(() => {
        const updateScreenHeight = () => setScreenHeight(window.innerHeight);
        window.addEventListener('resize', updateScreenHeight);
        updateScreenHeight();
        return () => window.removeEventListener('resize', updateScreenHeight);
    }, []);

    useEffect(() => {
        boxRefs.current.forEach((box, index) => {
            const updateBoxPosition = () => {
                const newX = getRandomX(screenHeight, box.offsetHeight);
                const newY = getRandomY(window.innerWidth, box.offsetWidth);
                box.style.top = `${newX}px`;
                box.style.left = `${newY}px`;
            };

            updateBoxPosition();
            window.addEventListener('resize', updateBoxPosition);

            return () => {
                window.removeEventListener('resize', updateBoxPosition);
            };
        });
    }, [screenHeight]); // Executa quando screenHeight muda (componente montado e redimensionado)

    const Background = styled.div`
    background-color: #080808;
    width: 100%;
    min-height: ${screenHeight}px;
    position: relative; // Torna o background um container de posicionamento
  `;

    const Box = styled.div`
    border-radius: 5px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

    return (
        <Background className='bg-neutral-950'>
            {words.map((word, index) => (
                <Box
                    key={index}
                    className='nerdbox bg-slate-800 px-2 py-2'
                    ref={(el) => (boxRefs.current[index] = el)} // Armazena a referência da box no array
                >
                    <button className='text-slate-100 text-xl font-bold'>{word}</button>
                </Box>
            ))}
        </Background>
    );
}