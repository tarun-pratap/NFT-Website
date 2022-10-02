import React from 'react'
import "./marketplace.css"
import Card from './card'

function MarketPlace() {
  return (
    <>
      <h1 className='Mtitle'>Market Place</h1>
      <div className="buyarea">
        <div className="filters">
          <div className="ft" style={{ borderBottom: "1px solid white", padding: "0.5rem" }}>
            <h3>Filters</h3>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M5.5 16.75L1.5 12.25L5.5 7.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><line x1="9.75" y1="4.25" x2="21.25" y2="4.25" stroke="white" stroke-width="1.5" stroke-linecap="round"></line><line x1="9.75" y1="12.25" x2="21.25" y2="12.25" stroke="white" stroke-width="1.5" stroke-linecap="round"></line><line x1="9.75" y1="20.25" x2="21.25" y2="20.25" stroke="white" stroke-width="1.5" stroke-linecap="round"></line></svg>
          </div>
          <div className="price" style={{ borderBottom: "1px solid white", padding: "0.5rem" }}>
            <h4>Price</h4>
            <div className="range">
              $
              <input type="number" style={{ width: "45%", borderRadius: "0.3rem", padding: "0.15rem" }} name="minp" placeholder='Minimum' />
              -
              <input type="number" style={{ width: "45%", borderRadius: "0.3rem", padding: "0.15rem" }} name="maxp" placeholder='Maximum' />
            </div>
          </div>
          <div className="Categories" style={{ borderBottom: "1px solid white", padding: "0.5rem" }}>
            <h4>Categories</h4>


            <div className="catopts">
              <div className="cate">
                <input type="checkbox" className='catoli' id="Art" />
                <label htmlFor="Art">Art</label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Music" />
                <label htmlFor="Music">Music</label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Photography" />
                <label htmlFor="Photography">Photography</label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Sports" />
                <label htmlFor="Sports">Sports</label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Gaming" />
                <label htmlFor="Gaming"></label>
              </div>
              <div className="cate">

                <input type="checkbox" className='catoli' id="Crypto" />
                <label htmlFor="Crypto"></label>
              </div>


            </div>
          </div>

        </div>
        <div className="nftcards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default MarketPlace