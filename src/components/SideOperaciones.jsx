import React from 'react'
import BotonIgual from './BotonIgual'
import BotonMas from './BotonMas'
import BotonOp from './BotonOp'

const SideOperaciones = () => {
  return (
    <div className='flex flex-col gap-5'>
        <BotonOp valor={"-"}/>
        <BotonMas valor={"+"} />
        <BotonIgual valor={"="}/>
        
    </div>
  )
}

export default SideOperaciones