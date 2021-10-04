import React from 'react'
import Header from '../components/Header'
import Exchange from '../components/Exchange'
const ExchangePage = ({session, nftList, coins}) => {
    return ( 
        <div>
            <Header session={session}/>
            <Exchange nftList={nftList} coins={coins}/>
        </div>
     );
}
 
export default ExchangePage;