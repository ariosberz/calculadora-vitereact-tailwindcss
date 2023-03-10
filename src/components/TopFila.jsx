import BotonCmd from './BotonCmd'
import BotonOp from './BotonOp'

const TopFila = () => {
  return (
    <div className='flex flex-row justify-center gap-5'>
        <BotonCmd valor={"Ac"} />
        <BotonCmd valor={"<"} />
        <BotonOp valor={"/"} />
        <BotonOp valor={"*"} />
    </div>
  )
}

export default TopFila