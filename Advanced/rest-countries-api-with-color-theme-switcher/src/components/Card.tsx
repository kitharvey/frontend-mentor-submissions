import React from 'react'
import { Link } from 'react-router-dom';
import { CardProps } from '../types/interfaces';


const Card: React.FC<CardProps> = ({country}) => {
        return (
            <Link to={`/country/${country.name}`} >
                <div className='card-wrapper' >
                    <div
                        className='flag'
                        style={{
                            backgroundImage: `url(${country.flag})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className='details' >
                        <h1>{country.name}</h1>
                        <p>Population: <span>{country.population.toLocaleString()}</span></p>
                        <p>Region: <span>{country.region}</span></p>
                        <p>Capital: <span>{country.capital}</span></p>
                    </div>
                </div>
            </Link>
        );
}


export default Card