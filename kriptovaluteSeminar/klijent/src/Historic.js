import React, {useState, useEffect} from "react";
import {render} from "react-dom";
import {navigate, Link} from "@reach/router";

const Historic = () => {
      const [lengthh, setLengthh] = useState("");
      const [transakcije, setTransakcije] = useState([]);
      function getMempool() {
      
      //alert("refreshing")
      var url = `http://localhost:5000/getrawmempool`;
      const response = fetch(url)
      .then((response)=>response.json())
            .then((result)=>{
               setTransakcije(result.result);
               setLengthh(result.result.length);
            }).catch((err)=>(console.log(err)));
        
      }
    
      document.body.style.backgroundColor = "#f2cda0";
      var timer = setTimeout(getMempool, 5000);
      return (
        <div>
             <Link to={`/`}><button style={{background:"#ffeac9",borderRadius:10,height:58, width:100, fontSize:20, borderColor:"brown"}}>BACK</button></Link>
            
            <h1>MEMPOOL STATE - LATEST TRANSACTIONS</h1>
            <h2>Total: {lengthh}</h2>
            <table>
                
                <h4><td>{transakcije.join("\n___")}</td></h4>
                
            </table>
            
        </div>
      );
      }
    
    export default Historic;