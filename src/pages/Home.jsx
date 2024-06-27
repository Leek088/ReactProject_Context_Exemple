import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function Home() {
    const { counter, setCounter } = useContext(CounterContext);
    const handleClick = () => {
        setCounter(counter + 5);
    };
    return (
        <>
            <h1>Projeto de Context com Routers</h1>
            <p>O valor da constante global é: {counter}</p>
            <button onClick={handleClick} >Contar</button>
        </>
    );
}

export default Home;