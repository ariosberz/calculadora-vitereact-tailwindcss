
import NumPad from './NumPad'
import SideOperaciones from './SideOperaciones'
import TopFila from './TopFila'

const Teclas = ({calc, setCalc}) => {
  return (
    <div className='mt-10'>
        <TopFila calc={calc} setCalc={setCalc}/>
        <div className='flex justify-center gap-5 mt-5'>
            <NumPad calc={calc} setCalc={setCalc}/>
            <SideOperaciones calc={calc} setCalc={setCalc}/>
            
        </div>
    </div>
  )
}

export default Teclas