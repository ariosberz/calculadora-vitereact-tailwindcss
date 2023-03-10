import React from 'react'

const BotonOp = ({valor}) => {
  return (
    <button 
    className='bg-purple-400/50 hover:bg-purple-200/50 shadow-md
    font-bold rounded w-14 h-12'
    onClick={()=>{console.log(valor)}}
    >
            {valor}
    </button>
  )
}

export default BotonOp