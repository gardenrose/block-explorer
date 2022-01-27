import React from "react";
import {navigate, Link} from "@reach/router";
import "./App.css";

class AddressDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = {hashOrHeight:props.hashOrHeight};
    }

    getInfo = () => {
          alert("refreshing balance");
          fetch(`http://localhost:5000/getaddressinfo?address=${this.props.hashOrHeight}`)
            .then((response)=>response.json())
            .then((result) => { 
                this.setState({ 
                    hash: result.result.address,
                    scriptpub: result.result.scriptPubKey,
                    ismine: result.result.ismine,
                    solvable: result.result.solvable,
                    iswatchonly: result.result.iswatchonly,
                    isscript: result.result.isscript,
                    witnessprogram: result.result.witness_program,
                    pubkey: result.result.pubkey,
                    hdseedid: result.result.hdseedid,
                    hdmasterfingerprint: result.result.hdmasterfingerprint,
                 }); 
                
            });
            this.setState({
                knownBalance: "false",
                balance: "-"
            });
            fetch(`http://localhost:5000/listaddressgroupings`)
            .then((response2)=>response2.json())
            .then((result) => {
                for ( let i = 0; i < result.result.length; i++) {
                    //alert(result.result[i][0][1])
                    if(result.result[i][0][0] === this.state.hash) {
                        //alert("postoji podatak o balansu")
                        this.setState({
                            knownBalance: "true",
                            balance: result.result[i][0][1]
                        })
                        break;
                    }
                }
            })
            var timer = setTimeout(this.getInfo, 1000 * 60 * 30);

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
              <th>Address hash</th>
              <th>Script pubkey</th>
              <th>Is mine</th>
            </tr>
            <tr>
              <td>{this.state.hash}</td>
              <td>{this.state.scriptpub}</td>
              <td>{String(this.state.ismine)}</td>
            </tr>

            <tr>
              <th>Solvable</th>
              <th>Is watch only</th>
              <th>Is script</th>
            </tr>
            <tr>
              <td>{String(this.state.solvable)}</td>
              <td>{String(this.state.iswatchonly)}</td>
              <td>{String(this.state.isscript)}</td>
            </tr>

            <tr>
              <th>Witness programm</th>
              <th>PubKey</th>
              <th>Hd seed id</th>
            </tr>
            <tr>
              <td>{this.state.witnessprogram}</td>
              <td>{this.state.pubkey}</td>
              <td>{this.state.hdseedid}</td>
            </tr>

            <tr>
              <th>HD master fingerprint</th>
              <th>Known balance</th>
              <th>Balance</th>
            </tr>
            <tr>
              <td>{this.state.hdmasterfingerprint}</td>
              <td>{this.state.knownBalance}</td>
              <td>{this.state.balance} BTC</td>
            </tr>
            
          </table>
        </div>
                
        );
    }
}
export default AddressDetails;