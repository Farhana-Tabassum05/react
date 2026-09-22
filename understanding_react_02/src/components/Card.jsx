import React from 'react'

const Card = (props) => {
  return (
    <div className = 'card'>
        <img alt="profile img" src={props.img}></img>
        <h1>{props.user}</h1>
        <p>{props.description}</p>
        <button>View profile</button>
      </div>
  )
}

export default Card