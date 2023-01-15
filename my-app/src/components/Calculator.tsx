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
        <div className=" d-flex flex-column bg-primary p-4 rounded">  
            <div className="bg-white p-4 mb-4 rounded"> { result } </div>

            <div className="row mb-2">
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(7)}> 7 </button>
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(8)}> 8 </button>
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(9)}> 9 </button>
                <button className="col mx-2 btn btn-lg bg-white" onClick={() => onCalculate('*')}> * </button>
            </div>

            <div className="row mb-2">
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(4)}> 4 </button>
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(5)}> 5 </button>
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(6)}> 6 </button>
                <button className="col mx-2 btn btn-lg bg-white" onClick={() => onCalculate('-')}> - </button>
            </div>

            <div className="row mb-2">
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(1)}> 1 </button>
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(2)}> 2 </button>
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(3)}> 3 </button>
                <button className="col mx-2 btn btn-lg bg-white" onClick={() => onCalculate('+')}> + </button>
            </div>

            <div className="row mb-2">
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => del()}> C </button>
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate(0)}> 0 </button>
                <button className="col mx-2 btn btn-lg text-white bg-dark" onClick={() => onCalculate('.')}> . </button>
                <button className="col mx-2 btn btn-lg bg-white" onClick={() => setResult(result)}> = </button>
            </div>
        </div>
    )
}

export default Calculator;