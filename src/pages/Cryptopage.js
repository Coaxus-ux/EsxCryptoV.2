import React from 'react'
import Header from '../components/Header'
import Cryptocurrency from '../components/Cryptocurrency'
const CryptoPage = ({coins, session}) => {
    return ( 
        <div>
            <Header session={session}/>
            <Cryptocurrency coins={coins}/>
        </div>
     );
}
 
export default CryptoPage;