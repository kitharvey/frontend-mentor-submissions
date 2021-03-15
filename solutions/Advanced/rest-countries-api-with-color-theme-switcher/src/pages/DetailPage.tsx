import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import {fetchCountryInfo} from '../axios/axios'
import { useQuery } from 'react-query';
import Loader from '../components/Loader';
import BorderCountry from '../components/BorderCountry';


const DetailPage: React.FC = () => {
    const {name} = useParams<{name: string}>();

    const { data, isFetching } = useQuery(['fetchCountryInfo', name], async() => await fetchCountryInfo(name))
    const history = useHistory();
    
        return (
            <div className="details">
                <div className='details-wrapper' >
                    <div className='navigation' >
                        <div className='back-wrapper' onClick={history.goBack}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                            <span>Back</span>
                        </div>
                    </div>
                    {data && !isFetching ? 
                    <div className='details-container' >
                        <img src={data.flag} alt={data.name} />
                        <div className='left' >
                            <h1>{data.name}</h1>
                            <div className='more-details' >
                                <div className='right-details' >
                                    <p>Native Name: <span>{data.nativeName}</span></p>
                                    <p>Population: <span>{data.population.toLocaleString()}</span></p>
                                    <p>Region: <span>{data.region}</span></p>
                                    <p>Sub Region: <span>{data.subregion}</span></p>
                                    <p>Capital: <span>{data.capital}</span></p>
                                </div>
                                <div className='left-details' >
                                    <p>Top Level Domain: <span>{data.topLevelDomain}</span></p>
                                    <p>Currencies: <span>{data.currencies.map( currency =>  currency.name).join(', ')}</span></p>
                                    <p>Languages: <span>{data.languages.map( language =>  language.name).join(', ')}</span></p>
                                </div>
                            </div>
                            <div className='borders' >
                                <p>Border Countries: </p>
                                {(data.borders && data.borders.length > 0)  ? data.borders.map( (border, index) => <BorderCountry key={index} name={border} />) : <div>None</div>}
                            </div>
                        </div>
                    </div> 
                    : <Loader /> 
                }
                    
                </div>
            </div>
        );
}


export default DetailPage