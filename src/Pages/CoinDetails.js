import axios from 'axios'
import React, { useEffect, useState } from 'react'

const titles = ['#', 'Name', 'Symbol', 'Hashing algorithm', 'Description', 'Market Cap', 'Homepage', 'Genesis Data']

const CoinDetails = () => {

    const [coindata, setCoindata] = useState({})
    const [marketCap, setMarketCap] = useState()
    const [description, setDescription] = useState()
    const getData =async()=>{
        var coinid = sessionStorage.getItem("coinid")
        const res = await axios.get(`https://api.coingecko.com/api/v3/${coinid}`)
        setCoindata(res.data)
        setMarketCap(res.data.market_data.market_cap.eur)
        setDescription(res.data.description.en)
    }

    useEffect(() => {
    return getData()
    }, [])

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {titles.map((title, index) => (
                        <td key={index}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                    <tr>
                    <td>{}</td>
                    <td>{coindata.name}</td>
                    <td>{coindata.symbol}</td>
                    <td>{coindata.hashing_algorithm}</td>
                    <td>{description}</td>
                    <td>{marketCap}</td>
                    <td>{<a href="http://localhost:3000/">Home</a>}</td>
                    <td>{coindata.genesis_date}</td>
                </tr>           
                
            </tbody>
        </table>
        
    )
}

export default CoinDetails
