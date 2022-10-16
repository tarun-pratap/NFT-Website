import React from 'react'
import "./analytics.css"
import { Chart } from "react-google-charts";
import { InfinitySpin } from 'react-loader-spinner';
import { useEffect,useState } from 'react';

function Analytics(props) {
    const [trans, setTrans] = useState([]); 
    

   

  
  var fetchnfttransfer = async() => {
    var arr=[];

    const options = {method: 'GET', headers: {accept: '*/*', 'x-api-key': 'demo-api-key'}};
    // const addresses=["0xBd3531dA5CF5857e7CfAA92426877b022e612cf8","0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7","0x1A92f7381B9F03921564a437210bB9396471050C","0x2acAb3DEa77832C09420663b0E1cB386031bA17B","0x60E4d786628Fea6478F785A6d7e704777c86a7c6","0x9372b371196751dd2F603729Ae8D8014BbeB07f6","0x8630cDEaA26D042f0F9242ca30229b425E7f243f","0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"];
   
    const address = "0x1A92f7381B9F03921564a437210bB9396471050C";
    const tokenid=7934;
        const urlt=`https://api.reservoir.tools/transfers/v2?token=`+address+`%3A`+tokenid+`&limit=20`
    // const urlp=`https://api.reservoir.tools/tokens/v5?collection=`+address+`&sortBy=floorAskPrice&limit=10&includeTopBid=false&includeAttributes=false`;

 await fetch(urlt, options)
  .then(response => response.json())
  .then(response=>response.transfers)
  .then(response => {
    response.forEach(ele => {
      var d = new Date(ele.timestamp*1000);
       ele.price&&arr.push([new Date(d.getFullYear(),d.getMonth(), d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()),ele.price])
      
    });
  }
  
  )
  .catch(err => console.error(err));
  setTrans([...trans,...arr]);
}



     useEffect(() =>{
   fetchnfttransfer();
        
    },[]);

  return (
    <>
    <div className="anahead">
        <h3>Analytics</h3>
    </div>
    <div className="anfirst">
        <div className="nftanaldet">
            <div className="nftpic">
                <img  className='nftdp' src="/billidp.jpg" alt="" />
            </div>
            <div className="nftpdet">
                <h3> Nft Name</h3>
            </div>
            
        </div>
        <div className="regraph">
        <Chart
                chartType="Scatter"
                data={[["Transaction Date", "Transaction Amount(ETH)",], ...trans]}
                width="95%"
                height="95%"
                options={{"backgroundColor":"aqua","colors":["#ec1f7f"]}}
                legendToggle
                style={{"backgroundColor":"aqua"}}
                
                loader={<InfinitySpin 
                  width='200'
                  color="aqua"
                />}
              />
        </div>
    </div>
    <div className="nftanalysis">
        <h3>Analysis</h3>

    </div>
    </>
  )
}

export default Analytics