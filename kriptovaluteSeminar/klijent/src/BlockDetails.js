import React from "react";
import {navigate, Link} from "@reach/router";
import "./App.css";

class BlockDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = {hashOrHeight:props.hashOrHeight};
    }

    getInfo = () => {
        
        //alert(this.props.hashOrHeight + " input");
        if (!isNaN(this.props.hashOrHeight)){ //ako je input broj, onda je height, inace.
          //alert("numba");
          fetch(`http://localhost:5000/getblockstats?height=${this.props.hashOrHeight}`)
            .then((response)=>response.json())
            .then((result) => { 
                this.setState({ hash: result.result.blockhash }); 
                fetch(`http://localhost:5000/getblock?blockhash=${this.state.hash}`)
                .then((response2)=>response2.json())
                .then((result) => { 
                this.setState({ 
                  nTx: result.result.nTx,
                  height: result.result.height,
                  confirmations: result.result.confirmations,
                  weight: result.result.weight,
                  merkle: result.result.merkleroot,
                  difficulty: result.result.difficulty,
                  nextblock: result.result.nextblockhash,
                  version:result.result.versionHex,
                  tx:result.result.tx
              
                });
                //alert(this.props.hashOrHeight + " je height");
                fetch(`http://localhost:5000/getblockstats?height=${this.props.hashOrHeight}`)
                .then((response3)=>response3.json())
                .then((result) =>  {
                  this.setState({ 
                    totalfee: result.result.totalfee,
                    minfee: result.result.minfee,
                    maxfee: result.result.maxfee
                  });
                });
                
              });
            });

            //console.log(this.state.hash + " je hash");
        }
        else {
          this.setState ({hash: this.props.hashOrHeight});
          //alert(this.state.hash + " je hash");
          fetch(`http://localhost:5000/getblock?blockhash=${this.props.hashOrHeight}`)
            .then((response2)=>response2.json())
              .then((result) => { 
              this.setState({ 
                  nTx: result.result.nTx,
                  height:result.result.height,
                  confirmations: result.result.confirmations,
                  weight: result.result.weight,
                  merkle: result.result.merkleroot,
                  difficulty: result.result.difficulty,
                  nextblock: result.result.nextblockhash,
                  version:result.result.versionHex,
                  tx:result.result.tx
              });
              console.log(result.result.tx + " su transaikcije");
              fetch(`http://localhost:5000/getblockstats?blockheight=${result.result.height}`)
              .then((response4)=>response4.json())
              .then((result) =>  {
                this.setState({ 
                  totalfee: result.result.totalfee,
                  minfee: result.result.minfee,
                  maxfee: result.result.maxfee
                });
              });
            });
        }
  
      }
      
      //1230321

    componentDidMount(){
        this.getInfo();
        document.body.style.backgroundColor = "#f2cda0";
    }

    render(){

        return(
            
        <div>
            <Link to={`/`}><button style={{background:"#ffeac9",borderRadius:10,height:58, width:100, fontSize:20, borderColor:"brown"}}>BACK</button></Link>
            <table>
            <tr>
              <th>Block hash</th>
              <th>Height</th>
              <th>Number of transactions</th>
            </tr>
            <tr>
              <td>{this.state.hash}</td>
              <td>{this.state.height}</td>
              <td>{this.state.nTx}</td>
            </tr>

            <tr>
              <th>Merkleroot</th>
              <th>Weight</th>
              <th>Confirmations</th>
            </tr>
            <tr>
              <td>{this.state.merkle}</td>
              <td>{this.state.weight}</td>
              <td>{this.state.confirmations}</td>
            </tr>

            <tr>
              <th>Next block hash</th>
              <th>Version Hex</th>
              <th>Difficulty</th>
            </tr>
            <tr>
              <td>{this.state.nextblock}</td>
              <td>{this.state.version}</td>
              <td>{this.state.difficulty}</td>
            </tr>

            <tr>
              <th>Total fee</th>
              <th>Min fee</th>
              <th>Max fee</th>
            </tr>
            <tr>
              <td>{this.state.totalfee} &nbsp;BTC</td>
              <td>{this.state.minfee}&nbsp;BTC</td>
              <td>{this.state.maxfee}&nbsp;BTC</td>
            </tr>
            
          </table>
          <h2>Transakcije</h2>
          {String(this.state.tx).replaceAll(",", " ________ ")}
        </div>
                
        );
    }
}
export default BlockDetails;