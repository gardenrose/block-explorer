import React from "react";
import {render} from "react-dom";
import Homepage from "./Homepage";
import BlockDetails from "./BlockDetails";
import AddressDetails from "./AddressDetails";
import TransactionDetails from "./TransactionDetails";
import Historic from "./Historic";
import Latest from "./Latest";
import Graphs from "./Graphs";
import {Router} from "@reach/router";

const App = () =>{
  return(
    <div>
    <Router>
    <Homepage path ="/"/>
    <BlockDetails path ="/Block/:hashOrHeight"/>
    <AddressDetails path="/Address/:hashOrHeight" />
    <TransactionDetails path="/Transaction/:hashOrHeight" />
    <Historic path="/Historic" />
    <Latest path="/Latest" />
    <Graphs path="/Graphs" />
    </Router>
    </div>
    
      
  );
}

render(<App/>, document.getElementById("root"));

export default App;
