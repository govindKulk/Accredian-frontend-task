import React from 'react'

const Money = ({
    left = "unset",
    right = "unset",
    top = "unset",
    bottom = "unset",
    rotate='0deg'
}) => {
  return (
    <span className="absolute" style={{
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        transform: `rotate(${rotate})`
    
    }}>
        <img src="/money.png" className='w-[65px] h-[65px]'/>
    </span>
  )
}

export default Money
