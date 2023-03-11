import React from 'react'
import BotonIgual from './BotonIgual'
import BotonMas from './BotonMas'
import BotonOp from './BotonOp'
import evaluar from './evaluar'
import hayOperaciones from './hayOperaciones'

const SideOperaciones = ({calc, setCalc}) => {
  
  let numInput = calc.numInput;
  let resultado = calc.resultado;

  


  const clickHandler = (cmd)=>{
    
    if(numInput.length > 20){
      return;
    }
    
    if(!hayOperaciones(numInput)){
      setCalc({
        numInput: numInput+cmd,
        resultado: resultado,
        
      });
    }
  };

  const igualHandler = ()=>{
    
    setCalc({
      numInput: numInput,
      resultado: evaluar(numInput),
      
    });
  };
  
  return (
    <div className='flex flex-col gap-5'>
        <BotonOp valor={"-"} onClick={()=>{clickHandler("-")}}/>
        <BotonMas valor={"+"} onClick={()=>{clickHandler("+")}}/>
        <BotonIgual valor={"="} onClick={igualHandler}/>
        
    </div>
  )
}

export default SideOperaciones