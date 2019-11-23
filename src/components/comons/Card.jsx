import React from 'react'


function Card(props) {
  return(
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Card