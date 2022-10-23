import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom';
import Analytics from './Analytics';

var colla="";
var id;
function Analyticschoice() {
  const [selected, setSelected] = useState("");
  // const [colla, setColla] = useState("");
  // const [id, setId] = useState(7934);
  
  // const optcol={"MUTANT APE YACHT CLUB":"0x22c36BfdCef207F9c0CC941936eff94D4246d14A"}
  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    // setColla(optcol[selected])
  };
 
  
  /** Different arrays for different dropdowns */
  const cryptop = Array.from({length: 10000}, (_, index) => index + 1);
  const mutape = Array.from({length: 20000}, (_, index) => index + 1);
  const coolc = Array.from({length: 9999}, (_, index) => index + 1);
  const pudgyp = Array.from({length: 8888}, (_, index) => index + 1);
  const deadf = Array.from({length: 10000}, (_, index) => index + 1);
  const meeb = Array.from({length: 20000}, (_, index) => index + 1);
  const clay = Array.from({length: 4040}, (_, index) => index + 1);
  const boredb = Array.from({length: 4999}, (_, index) => index + 1);
 
  
  
  /** Type variable to store different array for different dropdown */
  let type = null;
  
  /** This will be used to create set of options that user will see */
  let options = "Please select collection first";

  
  /** Setting Type variable according to dropdown */
  console.log(colla)
  if (selected === "") {
    type = ["Please select collection first"];
    
  } else if (selected === "Select a Collection") {
    type = ["Please select collection first"];
  } else if (selected === "CRYPTOPUNKS") {
    type = cryptop;
    colla="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
    // setColla("0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB")
  } else if (selected === "MUTANT APE YACHT CLUB") {
    type = mutape;
    colla="0x22c36BfdCef207F9c0CC941936eff94D4246d14A"
    // setColla("0x22c36BfdCef207F9c0CC941936eff94D4246d14A")
  } else if (selected === "COOL CATS") {
    type = coolc;
    // setColla("0x1A92f7381B9F03921564a437210bB9396471050C")
  } else if (selected === "PUDGY PENGUINS") {
    type = pudgyp;
    // setColla("0xBd3531dA5CF5857e7CfAA92426877b022e612cf8")
  } else if (selected === "DEAD FELLAZ") {
    type = deadf;
    // setColla("0x2acAb3DEa77832C09420663b0E1cB386031bA17B")
  } else if (selected === "MEEBITS") {
    type = meeb;
    // setColla("0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7")
  }else if (selected === "CLAYLINGS") {
    type = clay;
    // setColla("0x8630cDEaA26D042f0F9242ca30229b425E7f243f")
  }else if (selected === "BORED BUNNY") {
    type = boredb;
    // setColla("0x9372b371196751dd2F603729Ae8D8014BbeB07f6")
  }


  // if (type) {
  //   options = type.map((el) => <option key={el}>{el}</option>);
  //   if(!(selected === "Select Collection"||selected === "")){  var newarr = [<option key={0}>{"Select a Token Id"}</option>].concat(options); options = newarr}
  // }

  var slide=()=>{
    // console.log(pagec);
    // <Link to="/anal"></Link>
    document.getElementById("anbtn").style.backgroundPosition="left";
    // setPagec(1);
    // console.log(pagec)
    // return <Analytics/>;
  }


  
  return (
    <>
    <h3 style={{"color":"whitesmoke","textAlign":"center","marginBottom":"3.5rem","marginTop":"1.5rem","paddingLeft":"4rem"}}>Select the NFT For which You Want to See the Analytics.</h3>
    <form id="anaform">
        <div className="inpfie" style={{"display":"flex","justifyContent":"center","gap":"6rem","position":"relative","right":"1.5rem"}}>

        <div className="collfield" id='co' style={{"gap":"1rem","display":"flex","cursor":"pointer"}}>
  Collection: <select name="subject" style={{"cursor":"pointer","textAlign":"center"}} id="collection"  onChange={changeSelectOptionHandler} >
    <option selected="selected">Select a Collection</option>
    <option>CRYPTOPUNKS</option>
    <option>MUTANT APE YACHT CLUB</option>
    <option>COOL CATS</option>
    <option>PUDGY PENGUINS</option>
    <option>DEAD FELLAZ</option>
    <option>MEEBITS</option>
    <option>CLAYLINGS</option>
    <option>BORED BUNNY</option>
  </select>
        </div>

<div className="tokenfield" style={{"gap":"1rem","display":"flex"}}>
  NFT ID: <select name="topic" id="id" style={{"width":"15rem","cursor":"pointer","textAlign":"center"}} >
    {options}
  </select>
    </div>  
            </div>

    </form>
    <div className="btn" style={{"display":"flex","justifyContent":"center","marginTop":"3rem",paddingLeft:"5rem"}} >
    <Link to={"../nftanalyisis"} state={{collection:colla,id:id}}>
     <button onClick={slide} id='anbtn'  style={{"width":"10rem","height":"2.5rem","borderRadius":"10px","backgroundColor":"aqua",background: "linear-gradient(to left, aqua 50%, #ec1f7f 50%) right",
backgroundSize: "200% 100%","transition":"all 1s ease-in-out"}}>See The Analytics</button></Link>
    </div>
    {/* <Outlet/> */}
    
    </>
  )
}

export default Analyticschoice