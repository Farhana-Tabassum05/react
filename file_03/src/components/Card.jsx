
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
        <div>
          <div className="top">
            <img className='icon' src={props.icon} alt={props.comp_name}/>
            <button>Save <Bookmark size={14} color='rgb(146, 137, 125)'/></button>
          </div>
          <div className="center">
            <h3>{props.comp_name}<span>{props.post_date}</span></h3>
            <h2>{props.role}</h2>
            <div class="tag">
              <h4>{props.time}</h4>
              <h4>{props.level}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card