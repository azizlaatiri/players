import React from 'react'
import Data from '../database/Data'
import Age from './Age'
import 'bootstrap/dist/css/bootstrap.css';
export default function Jeu() {
  return (
    <div className="d-flex flex-row">
               {Data.map((player)=>(
        <div class="card mb-3" key={player.name} style={{maxWidth: "540px"}}>
            
        <div class="row g-0">
          <div class="col-md-4">
            <img src={player.image} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{player.name}</h5>
              <Age pass={player.age}/>
              <p class="card-text"></p>
              <p class="card-text"><small class="text-body-secondary"></small></p>
            </div>
          </div>
        </div>
      </div>
      ))
      
      
      }
    </div>
  )
}
