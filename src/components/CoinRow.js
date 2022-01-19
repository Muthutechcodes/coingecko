import React from 'react';
import axios from 'axios'

const CoinRow = ({coin, index}) => {

    const handlechange =async(e)=>{
        const coin_Id = await axios.get(`https://api.coingecko.com/api/v3/${e}`)
        sessionStorage.setItem("coinid", e)
        sessionStorage.getItem("coinid")
        window.location.replace("/coins/CoinDetails")
        }
    return (
            <tr onClick={() => {handlechange(`coins/${coin.id}`)}
            }>
                <td>{index}</td>
                <td>
                    <img src={coin.image} alt={coin.name} style={{width: '3%'}} className='img-fluid me-4'/>
                    <span>{coin.name}</span>
                    <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
                </td>
                <td>{coin.current_price}</td>
                <td>{coin.high_24h}</td>
                <td>{coin.low_24h}</td>
            </tr>
    )
};

export default CoinRow
