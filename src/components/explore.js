import React from 'react'
import "./explore.css"
import Card from './card'
import SellerCard from './sellercard'
import Topcollections from './topcollections'
function explore() {
  return (
  <>
  
  <div className='bgimage'>
<h2 className='headingg'>
Explore The World Of NFT's
</h2>
<div className="bigflexxbox">
    
    <Card nft_image = "/images/pic2.avif"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/4.gif"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/3.gif"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/pic4.jpg"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/5.gif"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/nft4.jfif"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/6(1).gif"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/n1.jpg"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/7.gif"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/n5.jpg"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/pp.jfif"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
    <Card nft_image = "/images/pic11.avif"
nft_name = "Walking On Air"
nft_price = "2.5"
units_minted = "4 Units Minted"

/>
   

    </div>
    <h2 className='headingtopsellers'>
    Top Sellers
    </h2>
    <div className='sellercardbox'>

    <SellerCard sellername = "@Richard"
    seller_image = "/images/avatar-1.jpg"
    seller_owned ="2.4"
    />
    <SellerCard sellername = "@JohnDeo"
    seller_image = "/images/avatar-2.jpg"
    seller_owned ="2.4"
    />
    <SellerCard sellername = "@Junaid"
    seller_image = "/images/avatar-3.jpg"
    seller_owned ="2.4"
    />
    <SellerCard sellername = "@Yasmin"
    seller_image = "/images/avatar-4.jpg"
    seller_owned ="2.4"
    />
    <SellerCard sellername = "@ArhamH"
    seller_image = "/images/avatar-5.jpg"
    seller_owned ="2.4"
    />
    <SellerCard sellername = "@Sara"
    seller_image = "/images/avatar-6.jpg"
    seller_owned ="2.4"
    />
   
    </div>
   
    <h2 className='headingtopsellers'>
    Top Collections
    </h2>
   <div className='topcollectionsbox'>
<Topcollections
 collections_image = "/images/author-banner-1.jpg"
 avatar_image = "/images/avatar-1.jpg"
 collections_title = "Digital Art"
 floor_value = "2.8"
 volume_value ="24"
/>
<Topcollections
 collections_image = "/images/author-banner-2.jpg"
 avatar_image = "/images/avatar-2.jpg"
 collections_title = "Groceries"
 floor_value = "2.8"
 volume_value ="24"
/>
<Topcollections
 collections_image = "/images/author-banner-3.jpg"
 avatar_image = "/images/avatar-3.jpg"
 collections_title = "Digital Art"
 floor_value = "2.8"
 volume_value ="24"
/>
<Topcollections
 collections_image = "/images/author-banner-4.jpg"
 avatar_image = "/images/avatar-4.jpg"
 collections_title = "Digital Art"
 floor_value = "2.8"
 volume_value ="24"
/>
<Topcollections
 collections_image = "/images/author-banner-5.jpg"
 avatar_image = "/images/avatar-5.jpg"
 collections_title = "Digital Art"
 floor_value = "2.8"
 volume_value ="24"
/>
<Topcollections
 collections_image = "/images/author-banner-6.jpg"
 avatar_image = "/images/avatar-6.jpg"
 collections_title = "Digital Art"
 floor_value = "2.8"
 volume_value ="24"
/>
<Topcollections
 collections_image = "/images/author-banner-7.jpg"
 avatar_image = "/images/avatar-7.jpg"
 collections_title = "Digital Art"
 floor_value = "2.8"
 volume_value ="24"
/>
<Topcollections
 collections_image = "/images/author-banner-8.jpg"
 avatar_image = "/images/avatar-8.jpg"
 collections_title = "Digital Art"
 floor_value = "2.8"
 volume_value ="24"
/>

   </div>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  </>
  )
}

export default explore