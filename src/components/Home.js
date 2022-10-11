import React from 'react'
import "./Home.css"
import { ethers } from 'ethers'

function Home() {
   (async () => {
      const provider = new ethers.providers.JsonRpcProvider("https://smart-withered-arm.discover.quiknode.pro/b61fceb5ab48c1f1df04a06c8adccc72583597b9/");
      provider.connection.headers = { "x-qn-api-version": 1 };
      const heads = await provider.send("qn_fetchNFTsByCollection", {
        collection: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
    
        page: 1,
        perPage: 3,
      });
      console.log(heads);
      document.getElementById('nftdetailshome').innerHTML(heads);
    })();
    

  return (
    <>
    <div class="slider">
    <div class="rotator">
       <div class="items">
          <img src="/lions.gif" alt="loaded Lions NFT" />
       </div>
       <div class="items">
          <img src="/Bunny.gif"alt="Bunny NFT collection" />
       </div>
       <div class="items">
          <img src="/Acid.gif" alt="Acid Bored Apes" />
       </div>
       <div class="items">
          <img src="/pirate.gif" alt="Pirate NFT" />
       </div>
       <div class="items">
          <img src="/rand.gif" alt="Random NFT" />
       </div>
       <div class="items">
          <img src="/bull.gif" alt="bull NFT" />
       </div>
       <div class="items">
          <img src="/Snake-nft.gif" alt="Snake NFT" />
       </div>
       <div class="items">
          <img src="/panda.gif" alt="Panda NFT" />
       </div>
       <div class="items">
          <img src="/Bandar.gif" alt="Monkey NFT" />
       </div>




      
       

    </div>
 </div>



    </>
  )
}

export default Home