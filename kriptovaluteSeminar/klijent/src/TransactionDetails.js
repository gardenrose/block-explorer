import React from "react";
import {navigate, Link} from "@reach/router";
import "./App.css";

class TransactionDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = {hashOrHeight:props.hashOrHeight};
    }

    getTotalFee = () => {
        var izlaz = 0, ulaz = 0;
        var ids = [];

        const response = fetch(`http://localhost:5000/getrawtransaction?txid=${this.props.hashOrHeight}&verbose=2`)
        .then((response)=>response.json())
        .then((result)=>{
            for (let i = 0; i < result.result.vout.length; i++) {
            izlaz += result.result.vout[i].value;
            console.log(result.result.vout[i].value);
            }
            console.log("ukupni izlaz : " + izlaz);
            for (let j = 0; j < result.result.vin.length; j++) {
            console.log(result.result.vin[j].txid);
            console.log(result.result.vin[j].vout + "vout");
            ids.push(result.result.vin[j].vout);
            console.log("IDs: " + ids);

            const response2 = fetch(`http://localhost:5000/getrawtransaction?txid=${result.result.vin[j].txid}&verbose=2`)
            .then((response2)=>response2.json())
            .then((result)=>{
            
            console.log(result.result.vout[ids[j]].value);
            ulaz += result.result.vout[ids[j]].value;
            console.log("ukupni izlaz : " + izlaz);
            
            console.log("ULAZ: " + ulaz);
            this.setState({
                fee: ulaz-izlaz,
                inn: ulaz,
                outt: izlaz
            })
            //document.getElementById("rez").value=result.result.nTx;
        }).catch((err)=>(console.log(err)));
            }
            
            console.log("ULAZ: " + ulaz);
            this.setState({
                fee: ulaz-izlaz,
                inn: ulaz,
                outt: izlaz
            })
            //document.getElementById("rez").value=result.result.nTx;
        }).catch((err)=>(console.log(err)));
    }

    getInfo = () => {
          fetch(`http://localhost:5000/getrawtransaction?txid=${this.props.hashOrHeight}&verbose=2`)
            .then((response2)=>response2.json())
            .then(alert("jason"))
            .then((result) => { 
                this.setState({ 
                    txid: result.result.txid,
                    hash: result.result.hash,
                    size: result.result.size,
                    weight: result.result.weight,
                    locktime: result.result.locktime,
                    blok: result.result.blockhash,
                    confirmations: result.result.confirmations,
                    time: result.result.time,
                    blocktime: result.result.blocktime
                 }); 
                
            });


        }
      
      //1230321

    componentDidMount(){
        this.getInfo();
        this.getTotalFee();
        document.body.style.backgroundColor = "#f2cda0";
    }

    render(){

        return(
            
        <div>
            <Link to={`/`}><button style={{background:"#ffeac9",borderRadius:10,height:58, width:100, fontSize:20, borderColor:"brown"}}>BACK</button></Link>
            <table>

            <tr>
              <th>Transaction ID</th>
              <th>Hash</th>
              <th>Size</th>
            </tr>
            <tr>
              <td>{String(this.state.txid)}</td>
              <td>{String(this.state.hash)}</td>
              <td>{String(this.state.size)}</td>
            </tr>

            <tr>
              <th>Total fee</th>
              <th>Inputs total value (vin)</th>
              <th>Outputs total value</th>
            </tr>
            <tr>
              <td>{this.state.fee} BTC</td>
              <td>{this.state.inn} BTC</td>
              <td>{this.state.outt} BTC</td>
            </tr>

            <tr>
              <th>Lock time</th>
              <th>Block</th>
              <th>Weight</th>
            </tr>
            <tr>
              <td>{this.state.locktime}s</td>
              <td>{this.state.blok}</td>
              <td>{this.state.weight}</td>
            </tr>

            <tr>
              <th>Confirmations</th>
              <th>Time</th>
              <th>Block time</th>
            </tr>
            <tr>
              <td>{this.state.confirmations}</td>
              <td>{this.state.time} &nbsp;s</td>
              <td>{this.state.blocktime}&nbsp;s</td>
            </tr>
            
          </table>
        </div>
                
        );
    }
}
export default TransactionDetails;