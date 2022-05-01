import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import '../css/Trade.css'

const Trade = (props) => {

    const Next = ({onClick}) => {
        return (
            <div className='next' onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const Previous = ({onClick}) => {
        return (
            <div className='previous' onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const settings = {
        infinite:true,
        speed:200,
        slidesToShow:1,
        slidesToScroll:1,
        vertical: true,
        verticalSwiping: true,
        adaptiveHeight:true,
        variableHeight:false,
        nextArrow: <Next />,
        previousArrow: <Previous />
    }

    const [ markets, setMarkets ] = useState();

    useEffect(() => {
       axios.get("http://localhost:8000/api/markets", {withCredentials: true})
          .then(res => setMarkets(res.data))
          .catch(err => console.log(err));
    }, []);
 
    return (
        <div>
            <Slider {...settings}>
                { markets && markets.map((market, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={'/singleCurrency/' + market.id}><img src={market.image} alt={market.id} /></Link>
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

export default Trade