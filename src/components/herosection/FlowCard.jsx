import React from 'react'

const FlowCard = ({
    icon,
    text
}) => {
  return (
    <div className='relative z-20 flex flex-col text-center gap-2 w-[130px] sm:w-[200px] h-[40px] sm:h-[90px] justify-center items-center'>
      <img src={icon} alt={"icon"} className='w-[30px] sm:w-[65px] h-[35px] sm:h-[65px]'/>
      <p className='text-base'>{text}</p>
    </div>
  )
}

export default FlowCard
