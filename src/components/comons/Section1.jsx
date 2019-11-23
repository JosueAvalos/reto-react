import React from 'react'

import back from '../../assets/img/Pablo_21.png'

function Section1() {
  return(
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="font-weight-bold mt-5 mb-5">
            Cuentame una historia
          </h1>
          <h4 className="text-justify mt-5">
            En esta plataforma analizamos tu personalidad con inteligencia artificial
          </h4>
        </div>
        <div className="col-6">
          <img src={back} alt=""/>
        </div>

      </div>
    </div>
  )
}

export default Section1