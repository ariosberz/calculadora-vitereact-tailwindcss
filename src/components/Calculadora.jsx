import React, { useState, useEffect } from 'react'
import Pantalla from './Pantalla'
import Teclas from './Teclas'

const Calculadora = () => {
  let [calc, setCalc] = useState({
    numInput: "0",
    resultado: 0,
  });
  return (
    //Contenedor Exterior de toda la calculadora
    <div className='flex flex-col 
                    h-[33rem]  w-80
                    bg-gradient-to-b from-white/60 to-white/10
                    rounded-[2.5rem] shadow-lg'>

      <Pantalla calc={calc} setCalc={setCalc}/>
      <Teclas calc={calc} setCalc={setCalc}/>
        
    </div>
  )
}

export default Calculadora