import React from 'react'
import "./nftdetail.css"

function Nftdetails() {
  return (
    <>
    <link rel="stylesheet" 
  href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"></link>
    <div className="nftdetails">

    <img src="https://img.icons8.com/ios-filled/50/000000/back.png" class="backimg"/>
    
     <h1 class="name">NFT (name) here</h1>
     
    <div class="creatordetails">
     <img src="https://img.icons8.com/color/48/000000/verified-badge.png" class="verifiedtick"/>
     <img src="cre1.png" alt=""  height="55rem" width="55rem" className='cimg'/>
     <p class="cn">CreatorName</p>
     <p class="creatorid">CreatorIdhere <img src="https://img.icons8.com/ios-glyphs/30/000000/copy.png" class="copyimg"/></p>
     
    </div>
   
    <div>
     <span class="ownership">
       OwnerShip
     </span>
     <div class="creatordetails" id="ownershipdetails">
       <img src="cre1.png" alt="" height="55rem" width="55rem" className='cimg'
       id="ownerpic"/>
       <p class="ownertext">
         Owner
       </p>
       <p class="cn" id="ownercn">OwnerName</p>
       <p class="creatorid" id="ownerid">OwnerIdhere <img src="https://img.icons8.com/ios-glyphs/30/000000/copy.png" class="copyimg"/></p>
       
      </div>
     <span class="history">
       History
     </span>
     
    </div>
  
 <div class="nftimage"><img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"   class="tt"  alt=""/>
 </div>
 <div class="graph" >
     <img src="https://i.stack.imgur.com/nW1vp.png" alt="" class="graphimg"/>
 </div>
  
 
 <div>
 
 </div>
 {/* <div class="btn_wrap">
         <span class="spanshare">Share</span>
         <div class="container">
             <i class="fab fa-facebook-f"></i>
             <i class="fab fa-twitter"></i>
             <i class="fab fa-instagram"></i>
             <i class="fab fa-github"></i>
         </div>
     </div>  */}

    </div>
    </>
  )
}

export default Nftdetails