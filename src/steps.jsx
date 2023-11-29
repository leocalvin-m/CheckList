import { useState } from "react";
import "./App.css";
const Steps = function(){
    const [step, setStep] = useState(1);
    if(step <1){
        setStep(1);
    }
    

    return <div className="Step">
        <header className="StepCount">
            <span className={step >= 1 ? "stepHighlight" : null}>1</span> 
            <span className={step >= 2 ? "stepHighlight" : null}>2</span> 
            <span className={step >= 3 ? "stepHighlight" : null}>3</span>
            </header>
        <p>step 1 Learn React</p>
        <footer className="StepBtn">
            <button onClick={() => setStep((step)=>step-1)}>previous</button>
            <button onClick={step < 3 ? () => setStep((step)=>step+1):null}>next</button>
        </footer>
    </div>

}
export default Steps;