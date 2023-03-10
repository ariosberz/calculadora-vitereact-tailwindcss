import BotonCero from './BotonCero'
import NumPad from './NumPad'
import SideOperaciones from './SideOperaciones'
import TopFila from './TopFila'

const Teclas = () => {
  return (
    <div className='mt-10'>
        <TopFila />
        <div className='flex justify-center gap-5 mt-5'>
            <NumPad />
            <SideOperaciones />
            
        </div>
    </div>
  )
}

export default Teclas