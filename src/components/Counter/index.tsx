import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count + 1)
    const handleDecrement = () => setCount(count - 1)
    
    return(
        <div>
            <p>Contagem: {count}</p>
            <button onClick={handleIncrement}>Incrementar</button>
            {count > 0 && <button onClick={handleDecrement}> Decrement </button>}
        </div>
    )
}

// { "condicional" ? "retorno if" : "retorno else"}
//{"condicional" && "retorno"}

export default Counter;

