import React from 'react';
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';


class ShopPage extends React.Component {
    constructor(){
        super();
        this.state ={
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state
        return(<div className='shop-page'>  
            {                       // title, items, routeName
                collections.map(({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                ))
            }
       </div> );
    }
}

export default ShopPage;
