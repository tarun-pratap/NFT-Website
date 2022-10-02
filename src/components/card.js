import React from 'react'
import "./card.css"

function card() {
  return (
   <>
              <div class="card explore-card">

                <figure class="card-banner">
                  <a href="#">
                    <img src="bandar.gif" width="7rem" height="7rem" loading="lazy"
                      alt="Walking On Air" class="img-cover"/>
                  </a>
                </figure>

                <h3 class="h3 card-title">
                  <a href="#">NFT Name</a>
                </h3>

                <span class="card-author">
                  Owned By <a href="#" class="author-link">Owner</a>
                </span>

                <div class="wrapper">
                  <data class="wrapper-item" value="1.5">$ Price</data>

                </div>

                <button class="btn">
                  <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>

                  <span>Buy</span>
                </button>

              </div>
            
   </>
  )
}

export default card