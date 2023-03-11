import { evaluate } from "mathjs";

const evaluar= (numInput) => {
    const numEvaluado = evaluate(numInput);
    if(isFinite(numEvaluado)){
      return (
        numEvaluado.toString().length>9 ?  numEvaluado.toPrecision(5) : numEvaluado
      )
      
    } else {
      return 0
    }
  };

export default evaluar