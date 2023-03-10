import React from 'react'

const BotonCmd = ({valor}) => {
  return (
    <button 
    className='
    bg-gray-500/50 hover:bg-gray-200/50
    shadow-md
    font-bold 
    rounded 
    w-14 h-12
    '
    onClick={()=>{console.log(valor)}}
    >
            {valor}
    </button>
  )
}

export default BotonCmd