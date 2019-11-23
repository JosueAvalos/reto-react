import React from 'react'

import back from '../../assets/img/Editable_tonod2.png'

function Section2() {
  return(
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={back} alt=""/>
        </div>
        <div className="col-6">
          <h1 className="font-weight-bold mt-5 mb-2">
            Veras tu historia al crearla
          </h1>
          <h4 className="text-justify mt-4">
            Personality Insights de IBM Watson es una inteligencia artificial muy precisa al analizar los datos que nos proporcionas, lo minimo de caracteres necesarios para analizar son 1500
          </h4>
        </div>

      </div>
    </div>
  )
}

export default Section2