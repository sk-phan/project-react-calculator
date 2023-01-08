import React, { useEffect, useState } from "react";


const Calculator = () => {
    const [ result, setResult ] = useState<number>(0);

    let total: number[] = [];

    const onCalculate = (num: any) => {
        total.push(num);
        if (typeof total[total.length - 1] === "number") {
            console.log(eval(total.join("")), "total")
        }
        
    }

    const getResult = () => {

    }

    const del = () => {

    }

    const reset = () => {

    }

   
    

    return (
        <div>  
            <span> { result } </span>

            <button onClick={() => onCalculate(0)}> 0 </button>
            <button onClick={() => onCalculate(1)}> 1 </button>
            <button onClick={() => onCalculate(2)}> 2 </button>
            <button onClick={() => onCalculate(3)}> 3 </button>
            <button onClick={() => onCalculate(4)}> 4 </button>
            <button onClick={() => onCalculate(5)}> 5 </button>

            <button onClick={() => onCalculate('+')}> + </button>
            <button onClick={() => onCalculate('-')}> - </button>
            <button onClick={() => onCalculate('*')}> * </button>
            <button> / </button>

            <button> = </button>
            <button> . </button>
            <button> del </button>
            <button> reset </button>
        </div>
    )
}

export default Calculator;