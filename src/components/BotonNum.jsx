import React from 'react'

const BotonNum = ({valor,onClick}) => {
  return (
    <button 
    className='bg-white/50 hover:bg-white/75 
    shadow-md
    font-bold 
    rounded 
    w-14 h-12'
    onClick={onClick}
    
    >
            {valor}
    </button>
  )
}

export default BotonNum