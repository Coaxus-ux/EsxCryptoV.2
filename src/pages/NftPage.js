import React from 'react'
import Header from '../components/Header'
import Nft from '../components/Nft'
const NftPage = ({nftList}) => {
    return ( 
        <div>
            <Header/>
            <Nft nftList={nftList}/>
        </div>
     );
}
 
export default NftPage;