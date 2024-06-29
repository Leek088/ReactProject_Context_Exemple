import useCounterContext from "../hooks/useCounterContext";
import useTitleColorContext from "../hooks/useTitleColorContext";
function Home() {

    const { counter, setCounter } = useCounterContext();
    const { color, fontSize } = useTitleColorContext();

    const handleClick = () => {
        setCounter(counter + 5);
    };

    return (
        <>
            <h1 style={{ color: color, fontSize: fontSize }}>Projeto de Context com Routers</h1>
            <p>O valor da constante global é: {counter}</p>
            <button onClick={handleClick} >Contar</button>
        </>
    );
}

export default Home;