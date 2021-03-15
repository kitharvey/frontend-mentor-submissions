import React, { useEffect, useState } from 'react'
import Card from './Card';
import { CardContainerProps, CountryProps} from '../types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC<CardContainerProps> = ({countries}) => {
    const [countriesState, setCountriesState] = useState<CountryProps[] | null>(null)
    const [searchState, setSearchState] = useState('')
    const [regionState, setRegionState] = useState('')
    const [regionToggle, setRegionToggle] = useState(false)

    useEffect(() => {
        if(countries) {
            const filtered = countries.filter( country => {
                return country.name.toLowerCase().includes(searchState) && country.region.includes(regionState)
            } )
            setCountriesState(filtered)
        }

        return () => {
            setCountriesState(countries)
        }
    }, [searchState, regionState, countries])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchState(event.target.value)
    }
    const handleToggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setRegionToggle(!regionToggle)
    }

        return (
            <div className="home">
                <div className='home-wrapper' >
                    <div className='navigation' >
                        <div className='search-wrapper' id='search-wrapper' >
                            <FontAwesomeIcon icon={faSearch}/>
                            <input type='search' placeholder='Search for a country...' aria-labelledby='search-wrapper' onChange={handleSearch}  />
                        </div>
                            
                        <div className='select-wrapper' onClick={handleToggle}>
                            <span>{regionState ? regionState :'Filter by Region'}</span>
                            {regionToggle && 
                            <div className='select'>
                                <div className='select-options' onClick={() => setRegionState('')} >Remove Filter</div>
                                <div className='select-options' onClick={() => setRegionState('Africa')} >Africa</div>
                                <div className='select-options' onClick={() => setRegionState('America')} >America</div>
                                <div className='select-options' onClick={() => setRegionState('Asia')} >Asia</div>
                                <div className='select-options' onClick={() => setRegionState('Europe')} >Europe</div>
                                <div className='select-options' onClick={() => setRegionState('Oceania')} >Oceania</div>
                            </div>}
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                      
                    </div>
                    <div className='card-container' >
                        {countriesState && countriesState.map( (countryState, index) => <Card key={index} country={countryState} /> )}
                    </div>
                </div>
            </div>
        );
}


export default Home