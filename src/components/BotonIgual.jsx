import React from 'react'

const BotonIgual = ({valor}) => {
  return (
    <button 
    className='bg-cyan-300/50 hover:bg-cyan-200/50 shadow-md
    font-bold rounded w-14 h-[5.25rem]'
    onClick={()=>{console.log(valor)}}
    >
            {valor}
    </button>
  )
}

export default BotonIgual