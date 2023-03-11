import React from 'react'

const BotonCero = ({valor, onClick}) => {
  return (
    <button 
    className='bg-cyan-300/50 hover:bg-cyan-200/50 shadow-md
    font-bold rounded w-[8.2rem] h-12'
    onClick={onClick}
    >
            {valor}
    </button>
  )
}

export default BotonCero