import React from 'react'
import BotonCero from './BotonCero';
import BotonNum from './BotonNum'

const NumPad = ({calc, setCalc}) => {
    //Números a usar para generar botones numéricos
    const numArray=[[7,8,9],[4,5,6],[1,2,3]];
    
    const clickHandler = (num)=>{
        
        let numInput = calc.numInput;
        let resultado = calc.resultado;

        if(numInput.length > 20){
            return;
        }

        numInput==="0" ? numInput="" : numInput
        setCalc({
        numInput: numInput + num,
        resultado: resultado,
        })
    };
    
    //Uso de Array.map en arreglo de dos dimensiones
    const numPad =  numArray.map((x,i)=>{
        return(
            <div key={i} className='flex flex-row gap-5'>
                {numArray[i].map((num,j)=>{
                    return(
                        <BotonNum key={j} valor={num} onClick={()=>{clickHandler(num)}}/>
                    );
                })}
            </div>
            
        );
    });
  
  return (
    <div className='flex flex-col gap-5'>
        {numPad}
        <div className='flex flex-row gap-5'>
            <BotonCero valor={"0"} onClick={()=>{clickHandler(0)}}/>
            <BotonNum valor={"."} onClick={()=>{clickHandler(".")}}/>
        </div>
        
    </div>

  )
}

export default NumPad