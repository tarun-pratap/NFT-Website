import React from 'react'

function tpcard() {
  return (
    <>
    <div class="card-sl">
                    <div class="card-image">
                        <img
                           src='/images/new2.jpg' />
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
                    <a href="#" class="card-button"> Purchased</a>
                </div>
    </>
  )
}

export default tpcard