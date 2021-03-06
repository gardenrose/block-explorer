import React, {useState, useEffect} from "react";
import {render} from "react-dom";
import Homepage from "./Homepage";
import BlockDetails from "./BlockDetails";
import AddressDetails from "./AddressDetails";
import TransactionDetails from "./TransactionDetails";
import {navigate, Link} from "@reach/router";
import * as mempool from "./mempool-size.json";
import {ResponsiveContainer, LineChart, Line} from "recharts";
import {Bar} from "react-chartjs-2"
import {csv} from "d3";
import * as V from 'victory';
import { VictoryBar, VictoryChart } from 'victory';


const Graphs = () => {
    

      document.body.style.backgroundColor = "#f2cda0";
      return (
        <div>
        <Link to={`/`}><button style={{background:"#ffeac9",borderRadius:10,height:58, width:100, fontSize:20, borderColor:"brown"}}>BACK</button></Link>
        <h1>MEMPOOL SIZE</h1>
        <VictoryChart align="center">
        <VictoryBar
          data={data}
          width={900}
          height={900}
          padding={{left:100}}
          x="x"
          y="y"
        />
      </VictoryChart>
            
        </div>
      );
      }
    

      
        const data = [
           
           
           
           {
              "x":1642690800,
              "y":1607713.1733630951
           },
           {
              "x":1642692600,
              "y":1601468.9732142857
           },
           {
              "x":1642694400,
              "y":1589200.7410714286
           },
           {
              "x":1642696200,
              "y":1580777.1011904762
           },
           {
              "x":1642698000,
              "y":1578321.0907738095
           },
           {
              "x":1642699800,
              "y":1568904.628720238
           },
           {
              "x":1642701600,
              "y":1556214.1458333333
           },
           {
              "x":1642703400,
              "y":1551173.769345238
           },
           {
              "x":1642705200,
              "y":1560248.9151785714
           },
           {
              "x":1642707000,
              "y":1570609.6889880951
           },
           {
              "x":1642708800,
              "y":1577586.7061011905
           },
           {
              "x":1642710600,
              "y":1591130.9427083333
           },
           {
              "x":1642712400,
              "y":1609754.2879464286
           },
           {
              "x":1642714200,
              "y":1626692.181547619
           },
           {
              "x":1642716000,
              "y":1643811.1264880951
           },
           {
              "x":1642717800,
              "y":1659301.5714285714
           },
           {
              "x":1642719600,
              "y":1673293.5200892857
           },
           {
              "x":1642721400,
              "y":1684623.9680059524
           },
           {
              "x":1642723200,
              "y":1695206.5223214286
           },
           {
              "x":1642725000,
              "y":1701819.4107142857
           },
           {
              "x":1642726800,
              "y":1699826.318452381
           },
           {
              "x":1642728600,
              "y":1698925.8035714286
           },
           {
              "x":1642730400,
              "y":1698850.3601190476
           },
           {
              "x":1642732200,
              "y":1701246.1197916667
           },
           {
              "x":1642734000,
              "y":1703347.970982143
           },
           {
              "x":1642735800,
              "y":1705348.7574404762
           },
           {
              "x":1642737600,
              "y":1706575.174107143
           },
           {
              "x":1642739400,
              "y":1708902.4300595238
           },
           {
              "x":1642741200,
              "y":1713858.746279762
           },
           {
              "x":1642743000,
              "y":1721623.765625
           },
           {
              "x":1642744800,
              "y":1729432.4077380951
           },
           {
              "x":1642746600,
              "y":1733083.566220238
           },
           {
              "x":1642748400,
              "y":1739291.2291666667
           },
           {
              "x":1642750200,
              "y":1749719.1674107143
           },
           {
              "x":1642752000,
              "y":1754571.0476190476
           },
           {
              "x":1642753800,
              "y":1751985.0729166667
           },
           {
              "x":1642755600,
              "y":1746397.693452381
           },
           {
              "x":1642757400,
              "y":1744913.060267857
           },
           {
              "x":1642759200,
              "y":1746668.8802083333
           },
           {
              "x":1642761000,
              "y":1743132.331845238
           },
           {
              "x":1642762800,
              "y":1735638.3816964286
           },
           {
              "x":1642764600,
              "y":1738517.9032738095
           },
           {
              "x":1642766400,
              "y":1741030.7916666667
           },
           {
              "x":1642768200,
              "y":1744184.908482143
           },
           {
              "x":1642770000,
              "y":1755021.1919642857
           },
           {
              "x":1642771800,
              "y":1766399.5610119049
           },
           {
              "x":1642773600,
              "y":1779799.287202381
           },
           {
              "x":1642775400,
              "y":1796322.8154761905
           },
           {
              "x":1642777200,
              "y":1809190.7254464286
           },
           {
              "x":1642779000,
              "y":1819389.7507440476
           },
           {
              "x":1642780800,
              "y":1826994.447172619
           },
           {
              "x":1642782600,
              "y":1837749.5848214286
           },
           {
              "x":1642784400,
              "y":1849435.6956845238
           },
           {
              "x":1642786200,
              "y":1860658.418154762
           },
           {
              "x":1642788000,
              "y":1876885.7351190476
           },
           {
              "x":1642789800,
              "y":1895879.8020833333
           },
           {
              "x":1642791600,
              "y":1913750.6964285714
           },
           {
              "x":1642793400,
              "y":1924202.033482143
           },
           {
              "x":1642795200,
              "y":1931479.2135416667
           },
           {
              "x":1642797000,
              "y":1935956.1041666667
           },
           {
              "x":1642798800,
              "y":1946730.144345238
           },
           {
              "x":1642800600,
              "y":1952597.9419642857
           },
           {
              "x":1642802400,
              "y":1958934.6688988095
           },
           {
              "x":1642804200,
              "y":1967000.5632440476
           },
           {
              "x":1642806000,
              "y":1971958.8578869049
           },
           {
              "x":1642807800,
              "y":1989436.2700892857
           },
           {
              "x":1642809600,
              "y":2010906.0699404762
           },
           {
              "x":1642811400,
              "y":2033054.502232143
           },
           {
              "x":1642813200,
              "y":2055027.7061011905
           },
           {
              "x":1642815000,
              "y":2077317.6458333333
           },
           {
              "x":1642816800,
              "y":2102310.6941964286
           },
           {
              "x":1642818600,
              "y":2126147.9032738097
           },
           {
              "x":1642820400,
              "y":2158668.991815476
           },
           {
              "x":1642822200,
              "y":2195455.4382440476
           },
           {
              "x":1642824000,
              "y":2227994.491815476
           },
           {
              "x":1642825800,
              "y":2258432.230654762
           },
           {
              "x":1642827600,
              "y":2290500.2842261903
           },
           {
              "x":1642829400,
              "y":2320331.46875
           },
           {
              "x":1642831200,
              "y":2348353.8177083335
           },
           {
              "x":1642833000,
              "y":2376043.275297619
           },
           {
              "x":1642834800,
              "y":2400373.9427083335
           },
           {
              "x":1642836600,
              "y":2422221.6592261903
           },
           {
              "x":1642838400,
              "y":2441883.086309524
           },
           {
              "x":1642840200,
              "y":2454418.8125
           },
           {
              "x":1642842000,
              "y":2462358.0729166665
           },
           {
              "x":1642843800,
              "y":2466093.258184524
           },
           {
              "x":1642845600,
              "y":2467575.707589286
           },
           {
              "x":1642847400,
              "y":2466643.451636905
           },
           {
              "x":1642849200,
              "y":2463850.892113095
           },
           {
              "x":1642851000,
              "y":2459764.907738095
           },
           {
              "x":1642852800,
              "y":2455189.255952381
           },
           {
              "x":1642854600,
              "y":2464270.058779762
           },
           {
              "x":1642856400,
              "y":2477613.699404762
           },
           {
              "x":1642858200,
              "y":2488637.6584821427
           },
           {
              "x":1642860000,
              "y":2497639.8147321427
           },
           {
              "x":1642861800,
              "y":2511500.744047619
           },
           {
              "x":1642863600,
              "y":2529497.601190476
           },
           {
              "x":1642865400,
              "y":2550062.3229166665
           },
           {
              "x":1642867200,
              "y":2563402.4947916665
           },
           {
              "x":1642869000,
              "y":2578742.3467261903
           },
           {
              "x":1642870800,
              "y":2586854.1160714286
           },
           {
              "x":1642872600,
              "y":2587749.5848214286
           },
           {
              "x":1642874400,
              "y":2580761.515625
           },
           {
              "x":1642876200,
              "y":2573475.6383928573
           },
           {
              "x":1642878000,
              "y":2575370.115327381
           },
           {
              "x":1642879800,
              "y":2581306.548363095
           },
           {
              "x":1642881600,
              "y":2586226.871279762
           },
           {
              "x":1642883400,
              "y":2579539.1867559524
           },
           {
              "x":1642885200,
              "y":2575962.5223214286
           },
           {
              "x":1642887000,
              "y":2571297.289434524
           },
           {
              "x":1642888800,
              "y":2574365.4352678573
           },
           {
              "x":1642890600,
              "y":2576914.6041666665
           },
           {
              "x":1642892400,
              "y":2578943.1852678573
           },
           {
              "x":1642894200,
              "y":2580049.4508928573
           },
           {
              "x":1642896000,
              "y":2579986.795386905
           },
           {
              "x":1642897800,
              "y":2581621.464285714
           },
           {
              "x":1642899600,
              "y":2581922.652529762
           },
           {
              "x":1642901400,
              "y":2581126.923363095
           },
           {
              "x":1642903200,
              "y":2581787.668154762
           },
           {
              "x":1642905000,
              "y":2578254.2135416665
           },
           {
              "x":1642906800,
              "y":2584984.5498511903
           },
           {
              "x":1642908600,
              "y":2588528.753720238
           },
           {
              "x":1642910400,
              "y":2591065.4441964286
           },
           {
              "x":1642912200,
              "y":2590281.732886905
           },
           {
              "x":1642914000,
              "y":2590220.4583333335
           },
           {
              "x":1642915800,
              "y":2590138.7038690476
           },
           {
              "x":1642917600,
              "y":2590013.5342261903
           },
           {
              "x":1642919400,
              "y":2592539.550595238
           },
           {
              "x":1642921200,
              "y":2592733.566964286
           },
           {
              "x":1642923000,
              "y":2594808.734375
           },
           {
              "x":1642924800,
              "y":2594631.831845238
           },
           {
              "x":1642926600,
              "y":2594749.5416666665
           },
           {
              "x":1642928400,
              "y":2594989.680059524
           },
           {
              "x":1642930200,
              "y":2594292.323660714
           },
           {
              "x":1642932000,
              "y":2595245.288690476
           },
           {
              "x":1642933800,
              "y":2596543.8102678573
           },
           {
              "x":1642935600,
              "y":2597427.973214286
           },
           {
              "x":1642937400,
              "y":2599822.5885416665
           },
           {
              "x":1642939200,
              "y":2599965.245535714
           },
           {
              "x":1642941000,
              "y":2599858.972470238
           },
           {
              "x":1642942800,
              "y":2602378.302827381
           },
           {
              "x":1642944600,
              "y":2604025.023809524
           },
           {
              "x":1642946400,
              "y":2604871.1584821427
           },
           {
              "x":1642948200,
              "y":2608510.7842261903
           },
           {
              "x":1642950000,
              "y":2608348.715029762
           },
           {
              "x":1642951800,
              "y":2604327.479910714
           },
           {
              "x":1642953600,
              "y":2599671.355654762
           },
           {
              "x":1642955400,
              "y":2601655.125
           },
           {
              "x":1642957200,
              "y":2601989.2477678573
           },
           {
              "x":1642959000,
              "y":2605377.3229166665
           },
           {
              "x":1642960800,
              "y":2609044.168154762
           },
           {
              "x":1642962600,
              "y":2608869.761904762
           },
           {
              "x":1642964400,
              "y":2609643.898809524
           },
           {
              "x":1642966200,
              "y":2610459.316964286
           },
           {
              "x":1642968000,
              "y":2610534.603422619
           },
           {
              "x":1642969800,
              "y":2610608.931547619
           },
           {
              "x":1642971600,
              "y":2610548.7157738097
           },
           {
              "x":1642973400,
              "y":2611861.0930059524
           },
           {
              "x":1642975200,
              "y":2612371.3697916665
           },
           {
              "x":1642977000,
              "y":2612057.5848214286
           },
           {
              "x":1642978800,
              "y":2612050.2180059524
           },
           {
              "x":1642980600,
              "y":2611691.78125
           },
           {
              "x":1642982400,
              "y":2612060.1592261903
           },
           {
              "x":1642984200,
              "y":2614453.6532738097
           },
           {
              "x":1642986000,
              "y":2615077.173363095
           },
           {
              "x":1642987800,
              "y":2615405.345238095
           },
           {
              "x":1642989600,
              "y":2615437.6398809524
           },
           {
              "x":1642991400,
              "y":2619310.150297619
           },
           {
              "x":1642993200,
              "y":2617340.585565476
           },
           {
              "x":1642995000,
              "y":2618013.1383928573
           },
           {
              "x":1642996800,
              "y":2617704.0066964286
           },
           {
              "x":1642998600,
              "y":2618015.8251488097
           },
           {
              "x":1643000400,
              "y":2616873.71875
           },
           {
              "x":1643002200,
              "y":2615709.4092261903
           },
           {
              "x":1643004000,
              "y":2611518.941220238
           },
           {
              "x":1643005800,
              "y":2612043.123511905
           },
           {
              "x":1643007600,
              "y":2609240.9508928573
           },
           {
              "x":1643009400,
              "y":2608078.2842261903
           },
           {
              "x":1643011200,
              "y":2607832.9345238097
           },
           {
              "x":1643013000,
              "y":2609097.045386905
           },
           {
              "x":1643014800,
              "y":2612592.398809524
           },
           {
              "x":1643016600,
              "y":2620695.6428571427
           },
           {
              "x":1643018400,
              "y":2627083.802827381
           },
           {
              "x":1643020200,
              "y":2607695.2552083335
           },
           {
              "x":1643022000,
              "y":2584509.8348214286
           },
           {
              "x":1643023800,
              "y":2555721.644345238
           },
           {
              "x":1643025600,
              "y":2533694.285714286
           },
           {
              "x":1643027400,
              "y":2517056.4694940476
           },
           {
              "x":1643029200,
              "y":2498511.212797619
           },
           {
              "x":1643031000,
              "y":2483974.5148809524
           },
           {
              "x":1643032800,
              "y":2477974.448660714
           },
           {
              "x":1643034600,
              "y":2480048.488839286
           },
           {
              "x":1643036400,
              "y":2489799.6101190476
           },
           {
              "x":1643038200,
              "y":2498595.1272321427
           },
           {
              "x":1643040000,
              "y":2500429.933035714
           },
           {
              "x":1643041800,
              "y":2502515.378720238
           },
           {
              "x":1643043600,
              "y":2507486.095238095
           },
           {
              "x":1643045400,
              "y":2507436.4501488097
           },
           {
              "x":1643047200,
              "y":2510536.0052083335
           },
           {
              "x":1643049000,
              "y":2514742.558035714
           },
           {
              "x":1643050800,
              "y":2523320.4032738097
           },
           {
              "x":1643052600,
              "y":2537288.4538690476
           },
           {
              "x":1643054400,
              "y":2555281.3645833335
           },
           {
              "x":1643056200,
              "y":2572184.761904762
           },
           {
              "x":1643058000,
              "y":2594854.8601190476
           },
           {
              "x":1643059800,
              "y":2606203.420386905
           },
           {
              "x":1643061600,
              "y":2609525.871279762
           },
           {
              "x":1643063400,
              "y":2608265.3459821427
           },
           {
              "x":1643065200,
              "y":2605009.7470238097
           },
           {
              "x":1643067000,
              "y":2602992.417410714
           },
           {
              "x":1643068800,
              "y":2603681.629464286
           },
           {
              "x":1643070600,
              "y":2606205.1495535714
           },
           {
              "x":1643072400,
              "y":2607912.232886905
           },
           {
              "x":1643074200,
              "y":2610741.015625
           },
           {
              "x":1643076000,
              "y":2610524.5491071427
           },
           {
              "x":1643077800,
              "y":2609191.0461309524
           },
           {
              "x":1643079600,
              "y":2609236.563988095
           },
           {
              "x":1643081400,
              "y":2609974.5334821427
           },
           {
              "x":1643083200,
              "y":2608287.579613095
           },
           {
              "x":1643085000,
              "y":2605307.7589285714
           },
           {
              "x":1643086800,
              "y":2599473.704613095
           },
           {
              "x":1643088600,
              "y":2591258.329613095
           },
           {
              "x":1643090400,
              "y":2585861.2782738097
           },
           {
              "x":1643092200,
              "y":2583729.7760416665
           },
           {
              "x":1643094000,
              "y":2585756.879464286
           },
           {
              "x":1643095800,
              "y":2585931.6101190476
           },
           {
              "x":1643097600,
              "y":2584947.823660714
           },
           {
              "x":1643099400,
              "y":2583436.6339285714
           },
           {
              "x":1643101200,
              "y":2582716.757440476
           },
           {
              "x":1643103000,
              "y":2585209.925595238
           },
           {
              "x":1643104800,
              "y":2589469.0022321427
           },
           {
              "x":1643106600,
              "y":2594779.3311011903
           },
           {
              "x":1643108400,
              "y":2601667.921875
           },
           {
              "x":1643110200,
              "y":2611661.537202381
           },
           {
              "x":1643112000,
              "y":2620733.599702381
           },
           {
              "x":1643113800,
              "y":2627295.875
           },
           {
              "x":1643115600,
              "y":2637993.292410714
           },
           {
              "x":1643117400,
              "y":2649620.0751488097
           },
           {
              "x":1643119200,
              "y":2659801.3876488097
           },
           {
              "x":1643121000,
              "y":2666355.933035714
           },
           {
              "x":1643122800,
              "y":2671452.9538690476
           },
           {
              "x":1643124600,
              "y":2676436.4479166665
           },
           {
              "x":1643126400,
              "y":2679030.324404762
           },
           {
              "x":1643128200,
              "y":2678106.261160714
           },
           {
              "x":1643130000,
              "y":2675654.008184524
           },
           {
              "x":1643131800,
              "y":2665713.03125
           },
           {
              "x":1643133600,
              "y":2655064.0260416665
           },
           {
              "x":1643135400,
              "y":2644441.2157738097
           },
           {
              "x":1643137200,
              "y":2630071.2648809524
           },
           {
              "x":1643139000,
              "y":2625532.040922619
           },
           {
              "x":1643140800,
              "y":2623621.5758928573
           },
           {
              "x":1643142600,
              "y":2615861.0245535714
           },
           {
              "x":1643144400,
              "y":2609503.337797619
           },
           {
              "x":1643146200,
              "y":2609797.326636905
           },
           {
              "x":1643148000,
              "y":2612041.098214286
           },
           {
              "x":1643149800,
              "y":2608736.8288690476
           },
           {
              "x":1643151600,
              "y":2608953.777529762
           },
           {
              "x":1643153400,
              "y":2609461.726190476
           },
           {
              "x":1643155200,
              "y":2607560.0066964286
           },
           {
              "x":1643157000,
              "y":2611434.4270833335
           },
           {
              "x":1643158800,
              "y":2618481.2678571427
           },
           {
              "x":1643160600,
              "y":2622845.6852678573
           },
           {
              "x":1643162400,
              "y":2623308.869047619
           },
           {
              "x":1643164200,
              "y":2622898.101190476
           },
           {
              "x":1643166000,
              "y":2622980.771577381
           },
           {
              "x":1643167800,
              "y":2622468.9680059524
           },
           {
              "x":1643169600,
              "y":2622469.730654762
           },
           {
              "x":1643171400,
              "y":2622633.9635416665
           },
           {
              "x":1643173200,
              "y":2622606.6532738097
           },
           {
              "x":1643175000,
              "y":2623396.5625
           },
           {
              "x":1643176800,
              "y":2623846.590029762
           },
           {
              "x":1643178600,
              "y":2627200.340029762
           },
           {
              "x":1643180400,
              "y":2630241.9776785714
           },
           {
              "x":1643182200,
              "y":2633461.4322916665
           },
           {
              "x":1643184000,
              "y":2631701.820684524
           },
           {
              "x":1643185800,
              "y":2633105.945684524
           },
           {
              "x":1643187600,
              "y":2636501.873511905
           },
           {
              "x":1643189400,
              "y":2635883.851934524
           },
           {
              "x":1643191200,
              "y":2638476.837797619
           },
           {
              "x":1643193000,
              "y":2635419.4583333335
           },
           {
              "x":1643194800,
              "y":2626353.0438988097
           },
           {
              "x":1643196600,
              "y":2616378.4813988097
           },
           {
              "x":1643198400,
              "y":2602212.1160714286
           },
           {
              "x":1643200200,
              "y":2594401.8883928573
           },
           {
              "x":1643202000,
              "y":2590911.355654762
           },
           {
              "x":1643203800,
              "y":2589920.4322916665
           },
           {
              "x":1643205600,
              "y":2603431.5944940476
           },
           {
              "x":1643207400,
              "y":2625380.646577381
           },
           {
              "x":1643209200,
              "y":2651099.0535714286
           },
           {
              "x":1643211000,
              "y":2681500.470238095
           }
        ]
     

export default Graphs;