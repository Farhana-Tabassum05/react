import React from 'react'
import RightCards from './RightCards'
import RightCardContext from './RightCardContext'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl w-5/6 p-3 flex overflow-x-auto flex-nowrap gap-6 '>
      {props.users.map(function (elem, idx){
        return <RightCards key={idx} id={idx+1} img={elem.img} tag={elem.tag} intro={elem.intro}/>
      })}
    </div>
  )
}

export default RightContent