import React from 'react'; 
import { HomePageContainer } from './homePage.styles';
import Directory from '../../components/directory/directory'

 const HomePage = ({ history }) => {
     return(
        <HomePageContainer>
           <Directory />
        </HomePageContainer>
     );
}
export default HomePage;