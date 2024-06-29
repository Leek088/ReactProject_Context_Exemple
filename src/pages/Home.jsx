import useCounterContext from "../hooks/useCounterContext";
import useTitleColorContext from "../hooks/useTitleColorContext";
function Home() {

    const { counter, setCounter } = useCounterContext();
    const titleContext = useTitleColorContext();

    const handleClickColor = (color) => {
        titleContext.dispatch({ type: color });
    };

    const handleClickCounter = () => {
        setCounter(counter + 5);
    };

    return (
        <>
            <h1 style={{ color: titleContext.color, fontSize: titleContext.fontSize }}>Projeto de Context com Routers</h1>
            <p>O valor do contador é {counter}</p>
            <button onClick={handleClickCounter}>Contar mais 5</button>
            <button onClick={() => handleClickColor("RED")}>Vermelho</button>
            <button onClick={() => handleClickColor("BLUE")}>Azul</button>
        </>
    );
}

export default Home;