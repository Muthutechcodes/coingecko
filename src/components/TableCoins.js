import React from 'react';
import CoinRow from './CoinRow';

const titles = ['#', 'Symbol & Name', 'Current Price', 'High 24 hour Price', 'Low 24 hour Price']

const TableCoins = ({coins, search}) => {

    const filteredCoins = coins.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <table className='table table-dark mt-4 table-hover sortable'>
            <thead>
                <tr>
                    {titles.map((title, index) => (
                        <td key={index}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1} />
                ))}
                
            </tbody>
        </table>
    )
};

export default TableCoins;
