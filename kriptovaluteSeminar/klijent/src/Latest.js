import React, {useState, useEffect} from "react";
import {render} from "react-dom";
import Homepage from "./Homepage";
import BlockDetails from "./BlockDetails";
import AddressDetails from "./AddressDetails";
import TransactionDetails from "./TransactionDetails";
import {navigate, Link} from "@reach/router";


const Latest = () => {
      const [blokovi, setBlokovi] = useState([]);
      function getMempool() {
      
      //alert("refreshing")
      var url = `https://mempool.space/testnet/api/blocks/`;
      var arrayy = []
      const response = fetch(url)
      .then((response)=>response.json())
            .then((result)=>{
               for (let i = 0; i < result.length; i++) {
                   arrayy.push(result[i].height);
               }
               setBlokovi(arrayy);
               
            }).catch((err)=>(console.log(err)));
        
      }
    
      document.body.style.backgroundColor = "#f2cda0";
      var timer = setTimeout(getMempool, 5000);
      return (
        <div>
             <Link to={`/`}><button style={{background:"#ffeac9",borderRadius:10,height:58, width:100, fontSize:20, borderColor:"brown"}}>BACK</button></Link>
            
            <h1> 10 LATEST BLOCKS</h1>
            <ul>
               <li><h3>{blokovi[0]}</h3></li>
               <li><h3>{blokovi[1]}</h3></li>
               <li><h3>{blokovi[2]}</h3></li>
               <li><h3>{blokovi[3]}</h3></li>
               <li><h3>{blokovi[4]}</h3></li>
               <li><h3>{blokovi[5]}</h3></li>
               <li><h3>{blokovi[6]}</h3></li>
               <li><h3>{blokovi[7]}</h3></li>
               <li><h3>{blokovi[8]}</h3></li>
               <li><h3>{blokovi[9]}</h3></li>
            </ul>
            
        </div>
      );
      }
    
    export default Latest;