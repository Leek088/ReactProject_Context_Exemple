import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function Home() {
    const { counter } = useContext(CounterContext);

    return (
        <>
            <h1>Projeto de Context com Routers</h1>
            <p>O valor da constante global é: {counter}</p>
        </>
    );
}

export default Home;