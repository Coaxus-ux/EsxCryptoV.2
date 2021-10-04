import React from 'react'
import Header from '../components/Header'
import Nft from '../components/Nft'
const NftPage = ({nftList, session}) => {
    return ( 
        <div>
            <Header session={session}/>
            <Nft nftList={nftList}/>
        </div>
     );
}
 
export default NftPage;