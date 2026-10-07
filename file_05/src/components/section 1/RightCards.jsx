import React from 'react'

import RightCardContext from './RightCardContext'

const RightCards = (props) => {
  console.log(props)
  return (
    <div className='h-full w-70 shrink-0 rounded-4xl overflow-hidden relative'>
        <img src={props.img} alt="card_img" className='object-cover h-full blur-[0.75px] border-none' />
        <RightCardContext tag={props.tag} id={props.id} intro={props.intro}/>
    </div>
  )
}

export default RightCards