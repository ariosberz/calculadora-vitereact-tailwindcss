import React from 'react'

const BotonCero = ({valor}) => {
  return (
    <button 
    className='bg-cyan-300/50 hover:bg-cyan-200/50 shadow-md
    font-bold rounded w-[8.2rem] h-12'
    onClick={()=>{console.log(valor)}}
    >
            {valor}
    </button>
  )
}

export default BotonCero