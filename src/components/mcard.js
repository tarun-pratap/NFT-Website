import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./mcard.css"

function card(props) {
  return (
   <>
   <nav>

         <Link to="nftdetails">
              <div class="card explore-card">

                <figure class="card-banner">
                  <a href="#">
                    <img src={props.img} loading="lazy"
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
            </Link>
            
          </nav>
          <Outlet/>
   </>
  )
}

export default card