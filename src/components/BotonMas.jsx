import React from 'react'

const BotonMas = ({valor}) => {
  return (
    <button 
    className='bg-cyan-300/50 hover:bg-cyan-200/50 shadow-md
    font-bold rounded w-14 h-[5rem]'
    onClick={()=>{console.log(valor)}}
    >
            {valor}
    </button>
  )
}

export default BotonMas