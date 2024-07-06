import React from 'react'
import FlowCard from './FlowCard'


const flowData = [
    {
        icon: '/add_friend.png',
        text: 'Submit referrals easily via our website’s referral section.'
    },
    {
        icon: 'note.png',
        text: 'Earn rewards once your referral joins an Accredian program.'
    },
    {
        icon: 'suit.png',
        text: 'Both parties receive a bonus 30 days after program enrollment.'
    }
]
const FlowSection = () => {
  return (
    <div className='
    bg-[rgba(238,245,255,1)]  h-[400px] w-[100%] bg-center bg-no-repeat
 gap-4 p-4 sm:p-0 relative
    '>
        <h3 className='text-xl text-center py-4'>How Do I  <span className="text-[#1a73e8] font-bold">Refer?</span></h3>
        <img src='/public/flowbg.png' alt='flowbg' className='max-w-screen-lg mx-auto w-full 
        absolute block left-1/2 -translate-x-1/2 z-10 min-w-[1000px] min-h-[350px]' />
        <div className="flex  max-w-screen-lg mx-auto w-full h-full justify-evenly items-center">
        {
        flowData.map((flow, index) => {
            return (
                <FlowCard key={index} icon={flow.icon} text={flow.text} />
            )
        })
      }
        </div>
    </div>
  )
}

export default FlowSection
