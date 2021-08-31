import React from 'react'
import Header from '../components/Header'
import Cryptocurrency from '../components/Cryptocurrency'
const CryptoPage = ({coins}) => {
    return ( 
        <div>
            <Header/>
            <Cryptocurrency coins={coins}/>
        </div>
     );
}
 
export default CryptoPage;