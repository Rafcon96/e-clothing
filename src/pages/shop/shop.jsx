import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import  CollectionsOverview  from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

import withSpinner from '../../components/with-spinner/with-spinner';

import { firestore, covertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner (CollectionPage);

class ShopPage extends React.Component {
state = {
     loading: true
};

     unsubscribeFromSnapshot = null;

     componentDidMount() {
          const { updateCollections } = this.props;
          const collectionRef = firestore.collection('collections');

               // fetch('https://firestore.googleapis.com/v1/projects/crown-db-6b658/databases/(default)/documents/collections')
               // .then(response => response.json())
               // .then(collections => console.log(collections));
         collectionRef.get().then(snapshot => {
              const collectionsMap = covertCollectionsSnapshotToMap(snapshot);  
              updateCollections(collectionsMap);
             this.setState({loading: false});
         });
     }

     render(){
          const { loading } = this.state;
          const { match } = this.props;
          return(
          <div className='shop-page'>  
               <Route exact path={`${match.path}`}
                    render={props =>( 
                    <CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} />

               <Route path={`${match.path}/:collectionId`}  
                    render={props =>( 
                    <CollectionPageWithSpinner isLoading={loading} {...props} /> )} />
          </div> 
          );
     }
}

const mapDispatchToProps = dispatch => ({
     updateCollections: collectionsMap =>
     dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
