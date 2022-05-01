import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import '../css/Trade.css'

const CoinSlider = (props) => {

    const Next = ({onClick}) => {
        return (
            <div className='next' onClick={onClick}>
                <FaArrowDown />
            </div>
        )
    }

    const Previous = ({onClick}) => {
        return (
            <div className='previous' onClick={onClick}>
                <FaArrowUp />
            </div>
        )
    }

    const settings = {
        infinite:true,
        speed:200,
        slidesToShow:3,
        slidesToScroll:3,
        vertical: true,
        verticalSwiping: true,
        variableHeight:false,
        nextArrow: <Next />,
        prevArrow: <Previous />
    }

    const [ markets, setMarkets ] = useState();

    useEffect(() => {
       axios.get("http://localhost:8000/api/markets", {withCredentials: true})
          .then(res => setMarkets(res.data))
          .catch(err => console.log(err));
    }, []);
 
    return (
        <div className='trade'>
            <Slider {...settings}>
                { markets && markets.map((market, idx) => {
                    return(
                        <div className='coin-card' key={idx}>
                            <div className='coin' key={idx}>
                                <Link to={'/singleCurrency/' + market.id}><img id='coin' src={market.image} alt={market.id} /></Link>
                            </div>
                        </div>
                    )}
                )}
            </Slider>
        </div>

    //    <div>
    //       { markets && markets.map((market, idx) => {
    //          return(
    //             <div key={idx}>
    //                <Link to={'/singleCurrency/' + market.id}><img src={market.image} alt={market.id} /></Link>
    //             </div>
    //          )}
    //       )}
    //    </div>
    )
 }

export default CoinSlider