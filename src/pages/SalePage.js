import React from 'react'
import Header from '../components/Header'
import Sale from '../components/Sale'
const SalePage = ({coins, setCurrency, setCryptocurrency, dataCryptos, rawData, session}) => {
    return (
        <div>
            <Header session={session}/>
            <Sale session={session} rawData={rawData} dataCryptos={dataCryptos} coins={coins} setCurrency={setCurrency} setCryptocurrency={setCryptocurrency}/>
        </div>
     );
}
export default SalePage;