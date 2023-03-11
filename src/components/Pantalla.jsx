import React from 'react'

const Pantalla = ({calc, setCalc}) => {
  return (
    <div className='mt-16 mr-10'>
        <div className='text-right text-gray-500 text-lg'>
            {calc.numInput}
        </div>
        <div className='text-right text-gray-700 text-5xl'>
            {calc.resultado}
        </div>
    </div>

  )
}

export default Pantalla