import React from 'react'
import "./explore.css"
function topcollections(props){
return(

    <section class="section collection" id="collection">
    <div class="container">


      <ul class="grid-list">

    
        <li>
          <a href="#" class="card collection-card">

            <figure class="card-banner">
              <img src={props.collections_image} width="600" height="450" loading="lazy"
                alt="Domain Names" class="img-cover"/>
            </figure>

            <figure class="card-avatar">
              <img src={props.avatar_image} width="64" height="64" loading="lazy" alt="card avatar"/>
            </figure>

            <h3 class="h3 card-title">{props.collections_title}</h3>

            <p class="card-text">Floor- {props.floor_value}$</p> <p class="card-text" >Volume- {props.volume_value}$</p>

          </a>
        </li>

      </ul>

    </div>
  </section>
)

}

export default topcollections