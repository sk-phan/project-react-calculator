import React, { useEffect, useState } from "react";


const Calculator = () => {
    const [ result, setResult ] = useState<number>(0);
    const [ total, setTotal ] = useState<any>([]);

    const onCalculate = (num: any) => {
        
        setTotal([...total, num])
        console.log(total)
        
    }

    useEffect(() => {
        if (typeof total[total.length - 1] === "number") {
            
            let res = eval(total.join(""))
            
            setResult(res)
        }
        
    }, [total])

    const del = () => {
        if (typeof total[total.length - 1] === "number") {
            
         const currentNums = total.map((item: number, index: number) => {
            if (index === total.length - 1) {
                return 0
            }
            else return item
         });
         setTotal(currentNums);
        console.log(currentNums)
        
    }
    }

    const reset = () => {
        setTotal([])
        setResult(0)
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
            <button onClick={() => onCalculate('/')}> / </button>

            <button> = </button>
            <button onClick={() => onCalculate('.')}> . </button>
            <button onClick={() => del()}> del </button>
            <button onClick={() => reset()}> reset </button>
        </div>
    )
}

export default Calculator;