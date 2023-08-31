import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

export default function App(){
    const [step,setStep] = useState(1);
    const [isOpen,setIsOpen] = useState(true);


    return (
    <>
    <button className="close" onClick={()=>setIsOpen(is=>!is)}>{isOpen?<>&times;</>:<>&#x2604;</>}</button>
    {
        isOpen && (
        <div className="steps">
            <div className="numbers">
                <div className={step >= 1 ? "active":""}>1</div>
                <div className={step >= 2 ? "active":""}>2</div>
                <div className={step >= 3 ? "active":""}>3</div>
            </div>
            <p className="message">Step {step} : {messages[step-1]}</p>
            <div className="buttons">
                <button style={{backgroundColor:'#7950f2',color:"#ffff"}} onClick={()=>setStep(step=>step-1!==0?step-1:1)}>
                    Previous
                </button>
                <button style={{backgroundColor:'#7950f2',color:"#ffff"}} onClick={()=>setStep(step=>step+1!==4?step+1:3)}>
                    Next
                </button>
            </div>
        </div>
        )
    }
    </>
    )
} 
