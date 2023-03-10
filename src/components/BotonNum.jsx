import React from 'react'

const BotonNum = ({valor}) => {
  return (
    <button 
    className='bg-white/50 hover:bg-white/75 
    shadow-md
    font-bold 
    rounded 
    w-14 h-12'
    onClick={()=>{console.log(valor)}}
    >
            {valor}
    </button>
  )
}

export default BotonNum