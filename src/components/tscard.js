import React from 'react'

function tscard() {
  return (
    <>
     <div class="card-sl">
      <div class="card-image">
                        <img
                           src='/bandar.gif' />
                    </div>

                    <div class="heartaction" onclick="hearty()" id="hrtc" href="#"> <img src="heart.png" class="heartimg" alt=""/> </div>
                    <div class="card-heading">
                    <center>text</center>
                    </div>
                    <div class="card-text">
                     
                    description
                    </div>
                    <div class="card-text">
                      <center>  $67,400</center>
                    </div> 
                    <a href="#" class="card-button"> Sold</a>
                        
                        </div>
    </>
  )
}

export default tscard

