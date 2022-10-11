import React from 'react'
import "./explore.css"
function card(props) {
  return (
    <>
    <section className="section explore" id="explore">
        <div className="container">
          <ul className="grid-list">

            <li>
              <div className="card explore-card">

                <figure className="card-banner">
                  <a href="#">
                    <img src = {props.nft_image} width="600" height="600" loading="lazy"
                      alt="Walking On Air" className="img-cover"/>
                  </a>
                </figure>

                <span className="unitsminted">{props.units_minted}</span>
                
                <h3 className="h3 card-title">
                  <a href="#">{props.nft_name}</a>
                </h3>

                <span className="card-author">
                  Owned By: <a href="#" className="author-link">Richard</a>
                </span>

                <div className="wrapper">
                  <data className="wrapper-item" value="1.5">${props.nft_price}</data>

                 
                </div>

                <button className="btn">
                  <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>

                  <span>Buy</span>
                </button>
              </div>
            </li>

          </ul>

        </div>
      </section>

    </>
  )
}

export default card

