import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
   const [ markets, setMarkets ] = useState();

   useEffect(() => {
      axios.get("http://localhost:8000/api/markets", {withCredentials: true})
         .then(res => setMarkets(res.data))
         .catch(err => console.log(err));
   }, []);

   return (
      <div>
         { markets && markets.map((market, idx) => {
            return(
               <div key={idx}>
                  <Link to={'/user/singleCurrency/' + market.id}><img src={market.image} alt={market.id} /></Link>
               </div>
            )}
         )}
      </div>
   )
}

export default Dashboard