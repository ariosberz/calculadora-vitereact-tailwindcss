import BotonCmd from './BotonCmd'
import BotonOp from './BotonOp'
import hayOperaciones from './hayOperaciones';

const TopFila = ({calc, setCalc}) => {
  
  const clickHandler = (cmd)=>{
        
      let numInput = calc.numInput;
      let resultado = calc.resultado;



      
      switch (cmd) {
        case "Ac":
          setCalc({
            numInput: "0",
            resultado: 0,
           
            });
          break;
        case "<":
          if(numInput.length>1){
            setCalc({
              numInput: numInput.slice(0, -1),
              resultado: resultado,
             
            });
          } else{
              setCalc({
                numInput: "0",
                resultado: resultado,
            
              });
          }
          break;    
        default:

          if(numInput.length > 20){
            return;
          }
          if(!hayOperaciones(numInput)){
            setCalc({
              numInput: numInput+cmd,
              resultado: resultado,
      
            });
          }
          
          break;
      }

      
  };
  
  return (
    <div className='flex flex-row justify-center gap-5'>
        <BotonCmd valor={"Ac"} onClick={()=>{clickHandler("Ac")}} />
        <BotonCmd valor={"<"} onClick={()=>{clickHandler("<")}}/>
        <BotonOp valor={"/"} onClick={()=>{clickHandler("/")}}/>
        <BotonOp valor={"*"} onClick={()=>{clickHandler("*")}}/>
    </div>
  )
}

export default TopFila