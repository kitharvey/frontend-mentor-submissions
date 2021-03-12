import React from 'react'
import { useQuery } from 'react-query';
import {fetchAllCountry} from '../axios/axios';
import Home from '../components/Home';
import Header from '../components/Header';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Loader from '../components/Loader';
import DetailPage from './DetailPage';




const MainPage: React.FC = () => {
    const { data, isFetching } = useQuery('fetchAllCountry', async() => await fetchAllCountry())
        return (
            <Router>
                <div className='main-page' >
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            {(data && !isFetching) ? <Home countries={data} /> : <Loader />}
                        </Route>
                        <Route exact path={`/country/:name`}>
                            <DetailPage />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
}


export default MainPage