import React from 'react'
import "./explore.css"
function sellercard(props){
return(

    <section class="section top-seller" id="top-seller">
        <div class="container">


          <ul class="grid-list">

            <li>
              <div class="card top-seller-card">

                <figure class="card-avatar">
                  <a href="#">
                    <img src={props.seller_image} width="64" height="64" loading="lazy" alt="Richard"/>
                  </a>
                </figure>

                <div>
                  <h3 class="card-title">
                    <a href="#">{props.sellername}</a>
                  </h3>
                  <data value="1.5">{props.seller_owned} BNB</data>

                </div>

              </div>
            </li>

           
          </ul>

        </div>
      </section>
)

}

export default sellercard