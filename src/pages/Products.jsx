import useCounterContext from "../hooks/useCounterContext";

function Products() {
    const { counter } = useCounterContext();
    return (
        <>
            <p>Produtos cadastrados!</p>
            <p>O contador global é: {counter}</p>
        </>
    );
}

export default Products;