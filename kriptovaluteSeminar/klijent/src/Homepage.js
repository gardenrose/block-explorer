import logo from './izrezak2.png';
import searchicon from './searchicon.png';
import React, {useState, useEffect} from "react";
import {Link, useLocation, navigate} from "@reach/router";

const Homepage = () => {

const [input, setInput] = useState("");
const [selected, setSelected] = useState("Block");




// 1230321
// 1230543

  return (
    <div className="App" >

        <div className="search"  style={{background:"#f2cda0 "}} align="center">
          <img src={logo}height={200} width={200}></img>
          <h2 style={{display: 'inline', fontSize:70}}>&nbsp;&nbsp;BLOCKCHAIN EXPLORER &nbsp;&nbsp;</h2>
          <img src={searchicon}height={200} width={200}></img>
          <p align="center" style={{color:"#666666"}}>Blockchain information for Bitcoin (BTC) 
          Testnet including historical prices, the most recently <br></br> mined blocks, the 
          mempool size of unconfirmed transactions, and data for the latest transactions.</p>
          <br></br><br></br>
          <div align="center">
            <select onChange={(e)=>{setSelected(e.target.value)}} style={{borderRadius:10, fontSize:20, height:56, borderColor:"brown"}}>
              <option>Block</option>
              <option>Transaction</option>
              <option>Address</option>
            </select>
            <input onChange={(e)=>{setInput(e.target.value)}} placeholder='Enter a block hash, height, address or txid...' type="text" style={{borderRadius:10, width:500, fontSize:20, height:50, borderColor:"brown"}}></input>
            
              <button onClick={() => {navigate(`/${selected}/${input}`, { state: { hashOrHeight: {input} } })}} style={{background:"#ffeac9",borderRadius:10,height:58, width:100, fontSize:20, borderColor:"brown"}}>SEARCH</button>
            
          </div>
        </div>

        <div className="buttons" align="center" style={{background:"#ffffff"}}>
        <br></br><br></br>
        <button style={{marginRight:20,background:"#ffeac9",borderRadius:10,height:58, width:200, fontSize:20, borderColor:"brown"}} onClick={() => {navigate(`/Historic`)}}>HISTORIC STUFF</button>
        <button style={{marginRight:20,background:"#ffeac9",borderRadius:10,height:58, width:100, fontSize:20, borderColor:"brown"}} onClick={() => {navigate(`/Graphs`)}}>GRAPHS</button>
        <button style={{background:"#ffeac9",borderRadius:10,height:58, width:200, fontSize:20, borderColor:"brown"}} onClick={() => {navigate(`/Latest`)}}>LATEST BLOCKS</button>
        <br></br><br></br><br></br><br></br>
        <p style={{color:"#666666"}}>©Testnet</p>
        </div>
        
      </div>
  );
  }

export default Homepage;